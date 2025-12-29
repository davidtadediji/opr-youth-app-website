 import { Resend } from "resend";
 import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check for Resend configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendAudienceId = process.env.RESEND_AUDIENCE_ID;

    if (!resendApiKey || !resendAudienceId) {
      console.error("Resend configuration missing");
      // In development, still return success for testing
      if (process.env.NODE_ENV === "development") {
        console.log("Development mode: Simulating waitlist signup for", normalizedEmail);
        return NextResponse.json({
          success: true,
          message: "Successfully joined the waitlist! (dev mode)",
        });
      }
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const { data, error } = await resend.contacts.create({
      audienceId: resendAudienceId,
      email: normalizedEmail,
    });

    if (error) {
      const message = typeof error.message === "string" ? error.message : "";
      const statusCode = (error as unknown as { statusCode?: number }).statusCode;

      // Treat already-existing contacts as success (idempotent signup)
      if (
        statusCode === 409 ||
        message.toLowerCase().includes("already")
      ) {
        return NextResponse.json({
          success: true,
          message: "You're already on the waitlist!",
        });
      }

      console.error("Resend error:", error);

      if (process.env.NODE_ENV === "development") {
        return NextResponse.json(
          {
            error: "Failed to join waitlist. Please try again.",
            resend: {
              name: (error as unknown as { name?: string }).name,
              message,
              statusCode,
            },
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: "Failed to join waitlist. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
      id: data?.id,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
