import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OPR Youth App — Terms and Conditions",
  description:
    "Terms and Conditions for using the OPR Youth App, outlining acceptable use, rights, and responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-text-primary">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold sm:text-3xl">
            OPR Youth App — Terms and Conditions
          </h1>
          <p>
            <strong>Effective date:</strong> 2025-12-30
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">1. Acceptance of terms</h2>
          <p>
            By downloading, installing, or using the OPR Youth App ("the App"),
            you agree to be bound by these Terms and Conditions. If you do not
            agree, please do not use the App.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">2. Who may use the App</h2>
          <p>
            The App is intended for students, teachers, and administrators in
            participating schools. If you are under the age of 18, you should
            use the App with permission from a parent, guardian, or school
            authority.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">3. Educational use only</h2>
          <p>
            The App is provided for educational and organisational purposes
            only. You agree not to use the App for any unlawful, harmful, or
            abusive activity.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">4. Your account and content</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            login details and for all activity under your account. Do not share
            your password with others or allow unauthorised access.
          </p>
          <p>
            You remain responsible for the accuracy of the information you enter
            into the App (such as tasks, notes, and timetable entries). You
            agree not to upload content that is illegal, offensive, or infringes
            the rights of others.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">5. Privacy and data</h2>
          <p>
            Our use of personal data is described in the OPR Youth App Privacy
            Policy. By using the App, you acknowledge that your information will
            be processed in accordance with that policy.
          </p>
          <p>
            You can read the Privacy Policy at
            {" "}
            <a
              href="/privacy-policy"
              className="text-primary-600 underline"
            >
              /privacy-policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">6. Intellectual property</h2>
          <p>
            The App, including its design, code, logos, and content (other than
            your own input), is owned by Jakob&apos;s Studio and its partners and is
            protected by copyright and other intellectual property laws.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable licence
            to use the App for personal, non-commercial, educational purposes.
            You may not copy, modify, distribute, or reverse engineer the App
            except where allowed by law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">7. Service availability</h2>
          <p>
            We aim to keep the App available and reliable, but we do not
            guarantee uninterrupted or error-free operation. Features may change
            over time, and we may suspend or discontinue parts of the service
            for maintenance, security, or other reasons.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">8. Prohibited behaviour</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Attempt to gain unauthorised access to other accounts or data.</li>
            <li>Introduce malware, spam, or other harmful code.</li>
            <li>
              Use the App to bully, harass, or threaten other students, staff,
              or third parties.
            </li>
            <li>
              Interfere with the normal operation of the App or the
              infrastructure it runs on.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">9. Third-party services</h2>
          <p>
            The App may rely on third-party services such as Supabase and app
            stores. We are not responsible for the terms or policies of those
            services. You should review their terms separately.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">10. Disclaimer of warranties</h2>
          <p>
            The App is provided on an "as is" and "as available" basis, without
            warranties of any kind, whether express or implied, including but
            not limited to implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">11. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Jakob&apos;s Studio and its
            partners will not be liable for any indirect, incidental, special,
            or consequential damages, or any loss of data or profits, arising
            out of or in connection with your use of the App.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">12. Changes to these terms</h2>
          <p>
            We may update these Terms and Conditions from time to time. When we
            do, we will change the effective date at the top of this page. If
            changes are significant, we will provide additional notice within
            the App or by other reasonable means.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-semibold">13. Contact</h2>
          <p>
            If you have questions or concerns about these Terms and Conditions,
            please contact us at
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
      </div>
    </main>
  );
}
