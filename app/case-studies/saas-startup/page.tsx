import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SaasStartupCaseStudy() {
  return (
    <div className="min-h-screen bg-slate-900 text-orange-100">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-slate-800 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href="/case-studies"
              className="text-sm text-orange-300 underline-offset-4 hover:underline"
            >
              Back to case studies
            </Link>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                B2B SaaS
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                TikTok + Meta
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                12-week engagement
              </Badge>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
              SaaS Startup Case Study
            </h1>
            <p className="mt-4 text-lg text-orange-200">
              A workflow automation startup needed to scale qualified demos and
              reduce reliance on founder-led outbound.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-12">
          <section className="grid gap-6 md:grid-cols-3">
            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-orange-300">Qualified Leads</p>
                <p className="mt-2 text-3xl font-semibold text-orange-100">
                  +280%
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-orange-300">Demo Conversion</p>
                <p className="mt-2 text-3xl font-semibold text-orange-100">
                  +85%
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-orange-300">LTV Increase</p>
                <p className="mt-2 text-3xl font-semibold text-orange-100">
                  +120%
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-orange-100">
                  Project snapshot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-orange-200">
                <div className="flex justify-between">
                  <span>Industry</span>
                  <span className="text-orange-300">
                    Workflow Automation SaaS
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>ICP</span>
                  <span className="text-orange-300">
                    Ops teams, 50-500 employees
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Spend</span>
                  <span className="text-orange-300">$35k</span>
                </div>
                <div className="flex justify-between">
                  <span>Channels</span>
                  <span className="text-orange-300">TikTok, Meta, Search</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-orange-100">Objectives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-orange-200">
                <p>Increase qualified demo requests by 3x.</p>
                <p>Lower cost per qualified lead below $120.</p>
                <p>Improve demo-to-opportunity conversion.</p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">
              Challenge
            </h2>
            <p className="text-orange-200 leading-relaxed">
              The startup was spending heavily on LinkedIn ads but struggled to
              scale beyond founder-led outreach. Messaging was too product-heavy
              and lacked proof, leading to low-quality leads and slow pipeline
              velocity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">Strategy</h2>
            <ul className="list-disc space-y-2 pl-5 text-orange-200">
              <li>
                Positioned the product around time savings and compliance
                risk, backed by a ROI calculator.
              </li>
              <li>
                Built a two-step qualification flow with role, company size,
                and tech stack filters.
              </li>
              <li>
                Used TikTok for problem-aware education, Meta for retargeting,
                and Search for high-intent keywords.
              </li>
              <li>
                Implemented lead scoring and routed high-fit leads directly to
                the sales team.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">
              Execution
            </h2>
            <ul className="space-y-3 text-orange-200">
              <li>
                Weeks 1-3: messaging workshop, creative production, and landing
                page updates.
              </li>
              <li>
                Weeks 4-8: scaled the highest-performing angles and rolled out
                proof-based retargeting.
              </li>
              <li>
                Weeks 9-12: refined qualification rules and tested demo versus
                free-trial conversion paths.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">Results</h2>
            <ul className="list-disc space-y-2 pl-5 text-orange-200">
              <li>
                Qualified leads grew from 45 to 171 per month, a 280% increase.
              </li>
              <li>
                Demo-to-opportunity conversion jumped from 14% to 26%.
              </li>
              <li>
                Cost per qualified lead dropped 38% to $118.
              </li>
              <li>
                Better-fit accounts reduced churn, boosting LTV by 120%.
              </li>
            </ul>
            <p className="text-xs text-orange-300/80">
              Results are client-specific and depend on market conditions,
              creative, and budget.
            </p>
          </section>

          <section className="rounded-lg border border-orange-500/20 bg-slate-800/60 px-6 py-8 text-center">
            <h2 className="text-2xl font-semibold text-orange-100">
              Want to scale qualified demos?
            </h2>
            <p className="mt-3 text-orange-200">
              We can map the right channels and funnel steps for your ICP.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-900 hover:from-orange-600 hover:to-yellow-600"
            >
              <Link href="/#contact">
                Start a test run
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
