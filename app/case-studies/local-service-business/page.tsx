import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LocalServiceBusinessCaseStudy() {
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
                Local Services
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                Google Search + LSA
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                6-month engagement
              </Badge>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
              Local Service Business Case Study
            </h1>
            <p className="mt-4 text-lg text-orange-200">
              A regional HVAC and plumbing business needed steady booked calls
              and lower lead costs across four service areas.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-12">
          <section className="grid gap-6 md:grid-cols-3">
            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-orange-300">Local Leads</p>
                <p className="mt-2 text-3xl font-semibold text-orange-100">
                  +450%
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-orange-300">Cost Per Lead</p>
                <p className="mt-2 text-3xl font-semibold text-orange-100">
                  -55%
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-orange-300">Revenue Growth</p>
                <p className="mt-2 text-3xl font-semibold text-orange-100">
                  +380%
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
                  <span className="text-orange-300">HVAC + Plumbing</span>
                </div>
                <div className="flex justify-between">
                  <span>Markets</span>
                  <span className="text-orange-300">4 metro areas</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Spend</span>
                  <span className="text-orange-300">$25k</span>
                </div>
                <div className="flex justify-between">
                  <span>Channels</span>
                  <span className="text-orange-300">
                    Google Search, LSA, Call Ads
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-orange-100">Objectives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-orange-200">
                <p>Increase booked calls and fill weekly schedules.</p>
                <p>Reduce CPL below $50 while maintaining lead quality.</p>
                <p>Balance demand across all four service areas.</p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">
              Challenge
            </h2>
            <p className="text-orange-200 leading-relaxed">
              The business relied on lead brokers and broad search campaigns,
              which generated inconsistent quality and wasted budget. The call
              center also struggled to handle spikes during peak season.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">Strategy</h2>
            <ul className="list-disc space-y-2 pl-5 text-orange-200">
              <li>
                Rebuilt campaigns around service-specific keywords and strict
                geo targeting by zip code.
              </li>
              <li>
                Added negative keyword libraries and dayparting to reduce
                irrelevant clicks.
              </li>
              <li>
                Launched separate landing pages for HVAC, plumbing, and emergency
                repair by location.
              </li>
              <li>
                Implemented call tracking and lead routing to prioritize
                high-value jobs.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">
              Execution
            </h2>
            <ul className="space-y-3 text-orange-200">
              <li>
                Month 1: campaign restructure, call tracking rollout, and
                landing page updates.
              </li>
              <li>
                Months 2-4: expanded coverage to new zip codes and refined
                offers by service line.
              </li>
              <li>
                Months 5-6: optimized bids around booked jobs and seasonal
                demand.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">Results</h2>
            <ul className="list-disc space-y-2 pl-5 text-orange-200">
              <li>
                Local leads grew 450% while expanding reach across four metros.
              </li>
              <li>Cost per lead dropped 55% to $38.</li>
              <li>
                Revenue climbed 380% during peak season with higher job value.
              </li>
              <li>62% of booked jobs now originate from paid search.</li>
            </ul>
            <p className="text-xs text-orange-300/80">
              Results are client-specific and depend on market conditions,
              creative, and budget.
            </p>
          </section>

          <section className="rounded-lg border border-orange-500/20 bg-slate-800/60 px-6 py-8 text-center">
            <h2 className="text-2xl font-semibold text-orange-100">
              Ready for more qualified calls?
            </h2>
            <p className="mt-3 text-orange-200">
              We can design a local growth plan tailored to your service area.
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
