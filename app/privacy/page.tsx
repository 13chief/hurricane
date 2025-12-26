import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-orange-100">
      <SiteHeader />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="mt-4 text-lg text-orange-200">
              We respect your privacy. This policy explains what we collect,
              how we use it, and the choices you have.
            </p>
            <p className="mt-3 text-sm text-orange-400">
              Last updated: March 1, 2025
            </p>
          </div>

          <Card className="border-orange-500/30 bg-slate-800/70">
            <CardHeader>
              <CardTitle className="text-center text-orange-100">
                How we handle your information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-orange-200">
              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Information we collect
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Contact details and company information submitted through
                    our forms.
                  </li>
                  <li>
                    Project requirements, goals, and campaign preferences you
                    share with us.
                  </li>
                  <li>
                    Basic usage data such as pages visited and device type.
                  </li>
                  <li>
                    Cookies and analytics identifiers used to improve site
                    performance.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  How we use information
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Respond to inquiries and provide proposals.</li>
                  <li>Create and manage campaigns you request.</li>
                  <li>Improve our site and marketing performance.</li>
                  <li>Send service updates and relevant communications.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  How we share information
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Trusted service providers that support our operations.</li>
                  <li>When required by law or to protect our rights.</li>
                  <li>With your consent for specific purposes.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Data retention and security
                </h2>
                <p className="leading-relaxed">
                  We keep data only as long as needed for business or legal
                  purposes. We use reasonable safeguards to protect your
                  information, but no method of transmission is 100 percent
                  secure.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Your choices
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Request access, updates, or deletion of your data.</li>
                  <li>Opt out of marketing communications at any time.</li>
                  <li>Control cookies through your browser settings.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Contact us
                </h2>
                <p className="leading-relaxed">
                  Questions about privacy? Reach us through the{" "}
                  <Link
                    href="/#contact"
                    className="text-orange-300 underline-offset-4 hover:underline"
                  >
                    contact form
                  </Link>
                  .
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
