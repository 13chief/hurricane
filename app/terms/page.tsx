import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-orange-100">
      <SiteHeader />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="mt-4 text-lg text-orange-200">
              These terms outline how we work together and how our services are
              provided.
            </p>
            <p className="mt-3 text-sm text-orange-400">
              Last updated: March 1, 2025
            </p>
          </div>

          <Card className="border-orange-500/30 bg-slate-800/70">
            <CardHeader>
              <CardTitle className="text-center text-orange-100">
                Using our services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-orange-200">
              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Service scope
                </h2>
                <p className="leading-relaxed">
                  We provide paid traffic strategy, campaign setup, and
                  optimization for approved platforms. Project details, scope,
                  and deliverables are confirmed before work begins.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Orders and payments
                </h2>
                <ul className="list-disc space-y-1 pl-5">
                  <li>
                    Fees and timelines are agreed upon in writing before
                    kickoff.
                  </li>
                  <li>
                    Test runs and ongoing services may require advance payment.
                  </li>
                  <li>
                    Late or missing payments can pause deliverables until
                    resolved.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Client materials
                </h2>
                <p className="leading-relaxed">
                  You retain ownership of your brand assets and content. You
                  grant us permission to use these materials solely to deliver
                  the services you request.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Results and guarantees
                </h2>
                <p className="leading-relaxed">
                  Marketing performance depends on many factors outside our
                  control. We do not guarantee specific outcomes, but we will
                  apply best practices and continuous optimization.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Intellectual property
                </h2>
                <p className="leading-relaxed">
                  Our strategies, processes, and internal tools remain our
                  property. You may use deliverables created for your campaigns,
                  but may not resell or repurpose our proprietary methods.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Limitation of liability
                </h2>
                <p className="leading-relaxed">
                  We are not liable for indirect or consequential damages. To
                  the extent permitted by law, our total liability is limited
                  to the fees paid for the services at issue.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Changes to these terms
                </h2>
                <p className="leading-relaxed">
                  We may update these terms from time to time. Continued use of
                  our services after updates means you accept the revised
                  terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-lg font-semibold text-orange-100">
                  Contact us
                </h2>
                <p className="leading-relaxed">
                  Questions about these terms? Reach out through the{" "}
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
