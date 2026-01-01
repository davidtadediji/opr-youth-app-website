import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OPR Youth App — Privacy Policy",
  description:
    "Privacy Policy for the OPR Youth App, explaining what data is collected, how it is used, and your rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-text-primary">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold sm:text-3xl">
            OPR Youth App — Privacy Policy
          </h1>
          <p>
            <strong>Effective date:</strong> 2025-12-30
          </p>
          <p>
            <strong>App name:</strong> OPR Youth App
            <br />
            <strong>Developer / Controller:</strong> Jakob&apos;s Studio
            <br />
            <strong>Website:</strong>{" "}
            <a
              href="https://www.jakobs.studio"
              target="_blank"
              rel="noreferrer"
              className="text-primary-600 underline"
            >
              https://www.jakobs.studio
            </a>
            <br />
            <strong>Contact email:</strong>{" "}
            <a
              href="mailto:contact@jakobs.studio"
              className="text-primary-600 underline"
            >
              contact@jakobs.studio
            </a>
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Quick summary</h2>
          <p>
            OPR Youth App ('we', 'our', 'us') is a school planner that helps students manage
            timetables, tasks, and school information. We collect only the
            minimum personal information needed to operate and improve the app
            and keep accounts secure.
          </p>
          <p>
            If you have questions about this policy or want to exercise any
            rights, contact us at{" "}
            <a
              href="mailto:contact@jakobs.studio"
              className="text-primary-600 underline"
            >
              contact@jakobs.studio
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. Information we collect</h2>
          <p>
            We collect only what is necessary to provide and improve the app.
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Account information:</strong> name, class/form, and
              student ID (if you register or an account is created for you by an
              administrator).
            </li>
            <li>
              <strong>Optional profile photo:</strong> if you choose to upload
              or take a profile image.
            </li>
            <li>
              <strong>Notes and planner content:</strong> tasks, reminders, and
              school-related information you add.
            </li>
            <li>
              <strong>Device &amp; usage data:</strong> device type and OS
              version, app version, anonymous identifiers, IP address, crash
              logs, and basic analytics.
            </li>
            <li>
              <strong>Permissions:</strong> camera (for profile photo) and
              microphone (for audio notes) are requested only when you use those
              features.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. Third-party services</h2>
          <p>
            We use <strong>Supabase</strong> to provide secure hosting,
            database storage, authentication, and admin synchronisation.
            Supabase processes the information you provide and device/usage
            metadata to operate these services on our behalf.
          </p>
          <p>
            We do not show targeted advertising and we do not sell your
            personal data.
          </p>
          <p>
            You can read Supabase&apos;s Privacy Policy at{" "}
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-primary-600 underline"
            >
              https://supabase.com/privacy
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">
            4. How we use your information
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Provide and operate the app&apos;s planner features.</li>
            <li>Manage user accounts and authentication.</li>
            <li>
              Sync data securely between users and administrators where required
              by the school.
            </li>
            <li>Keep the app secure and prevent misuse.</li>
            <li>Diagnose issues and improve performance.</li>
            <li>Communicate important app or account-related messages.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">5. Sharing and disclosure</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Service providers:</strong> such as Supabase, who process
              data solely to operate the app under strict confidentiality and
              security obligations.
            </li>
            <li>
              <strong>Legal compliance and safety:</strong> where required to
              comply with the law or protect the rights and safety of users.
            </li>
            <li>
              <strong>Business transfer:</strong> if our business is
              reorganised, merged, or sold, data may transfer with it. We will
              notify users where appropriate.
            </li>
          </ul>
          <p>We do not sell or rent personal information.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">6. Children&apos;s privacy</h2>
          <p>
            The app may be used by students under 18, including children under
            13. We collect only limited, education-related information and do
            not provide targeted advertising or sell personal information.
          </p>
          <p>
            If you are under 13, you should use the app with permission from a
            parent, guardian, or school authority. Parents or guardians can
            request access, correction, or deletion of a child&apos;s information,
            or withdraw consent, by contacting
            {" "}
            <a
              href="mailto:contact@jakobs.studio"
              className="text-primary-600 underline"
            >
              contact@jakobs.studio
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">7. Data retention &amp; security</h2>
          <p>
            We keep personal information only for as long as necessary to
            provide the service, meet legal requirements, or resolve disputes.
            When data is no longer needed, it is securely deleted or
            anonymised.
          </p>
          <p>
            We use reasonable technical and organisational measures to protect
            your information, including encrypted connections (HTTPS), secure
            storage, and restricted access. No system is completely secure, but
            we work to protect your data and will notify users and regulators of
            any data breach where required by law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">8. Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct,
            delete, or restrict use of your personal data, object to certain
            processing, or withdraw consent where processing is based on
            consent.
          </p>
          <p>
            You can exercise these rights by contacting
            {" "}
            <a
              href="mailto:contact@jakobs.studio"
              className="text-primary-600 underline"
            >
              contact@jakobs.studio
            </a>
            . We will respond within the time limits required by law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will change the effective date at the top of this page. If changes
            are significant, we will provide additional notice within the app or
            by other reasonable means.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">10. Contact us</h2>
          <p>
            If you have questions, concerns, or requests about this Privacy
            Policy, please contact us at
            {" "}
            <a
              href="mailto:contact@jakobs.studio"
              className="text-primary-600 underline"
            >
              contact@jakobs.studio
            </a>
            . We will do our best to help.
          </p>
        </section>
      </div>
    </main>
  );
}
