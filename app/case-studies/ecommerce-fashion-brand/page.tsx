import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EcommerceFashionBrandCaseStudy() {
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
                E-commerce
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                Meta + Google
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                10-week engagement
              </Badge>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
              E-commerce Fashion Brand Case Study
            </h1>
            <p className="mt-4 text-lg text-orange-200">
              A DTC fashion label needed consistent list growth and dependable
              ROAS for seasonal drops without spiking acquisition costs.
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
                  +340%
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-orange-300">Cost Per Lead</p>
                <p className="mt-2 text-3xl font-semibold text-orange-100">
                  -65%
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-orange-300">ROAS</p>
                <p className="mt-2 text-3xl font-semibold text-orange-100">
                  4.8x
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
                  <span className="text-orange-300">DTC Fashion</span>
                </div>
                <div className="flex justify-between">
                  <span>Markets</span>
                  <span className="text-orange-300">US + Canada</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Spend</span>
                  <span className="text-orange-300">$75k</span>
                </div>
                <div className="flex justify-between">
                  <span>Channels</span>
                  <span className="text-orange-300">Meta, Google</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-orange-100">Objectives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-orange-200">
                <p>Triple qualified email and SMS leads.</p>
                <p>Reduce CPL below $20 without sacrificing quality.</p>
                <p>Maintain ROAS above 4x during seasonal drops.</p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">
              Challenge
            </h2>
            <p className="text-orange-200 leading-relaxed">
              The brand was seeing creative fatigue every two to three weeks,
              and mobile landing pages were leaking conversions. iOS tracking
              changes also made it difficult to identify the highest-value
              audiences, so spend was rising without a predictable lift in
              revenue.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">Strategy</h2>
            <ul className="list-disc space-y-2 pl-5 text-orange-200">
              <li>
                Rebuilt conversion tracking and event prioritization to
                stabilize reporting.
              </li>
              <li>
                Produced three creative angles with UGC, studio lifestyle, and
                social proof.
              </li>
              <li>
                Created a size guide lead magnet and a two-step opt-in flow to
                pre-qualify shoppers.
              </li>
              <li>
                Split campaigns into broad prospecting, lookalikes, and dynamic
                retargeting by product category.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">
              Execution
            </h2>
            <ul className="space-y-3 text-orange-200">
              <li>
                Weeks 1-2: tracking audit, landing page refresh, and creative
                production.
              </li>
              <li>
                Weeks 3-6: scaled winning ads, optimized the shopping feed, and
                refined audience signals.
              </li>
              <li>
                Weeks 7-10: added seasonal drop pre-launch sequences and
                expanded retargeting with product-specific offers.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-orange-100">Results</h2>
            <ul className="list-disc space-y-2 pl-5 text-orange-200">
              <li>
                Qualified leads increased 340% month over month after week six.
              </li>
              <li>
                CPL dropped from $42 to $14.70 while maintaining lead quality.
              </li>
              <li>
                ROAS stabilized at 4.8x and held through the seasonal drop.
              </li>
              <li>Email-to-purchase rate improved from 9% to 18%.</li>
            </ul>
            <p className="text-xs text-orange-300/80">
              Results are client-specific and depend on market conditions,
              creative, and budget.
            </p>
          </section>

          <section className="rounded-lg border border-orange-500/20 bg-slate-800/60 px-6 py-8 text-center">
            <h2 className="text-2xl font-semibold text-orange-100">
              Ready for results like this?
            </h2>
            <p className="mt-3 text-orange-200">
              We can map the right offer and channel mix for your next test run.
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
