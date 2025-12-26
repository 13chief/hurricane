import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-orange-100">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-slate-800 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
              Case Studies
            </Badge>
            <h1 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Proven growth for ambitious teams
            </h1>
            <p className="mt-4 text-lg text-orange-200">
              Detailed breakdowns of how we plan, launch, and scale campaigns
              across Meta, Google, and TikTok.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-slate-800/70 border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-orange-100">
                E-commerce Fashion Brand
              </CardTitle>
              <CardDescription className="text-orange-300">
                Meta & Google Ads Campaign
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-orange-200">
              <p>
                A DTC fashion label needed consistent list growth and higher
                ROAS during seasonal drops.
              </p>
              <div className="flex justify-between text-sm">
                <span>Lead Increase</span>
                <span className="text-orange-400 font-semibold">+340%</span>
              </div>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full border-orange-500/40 bg-transparent text-orange-200 hover:bg-orange-500/10 hover:text-orange-100"
              >
                <Link href="/case-studies/ecommerce-fashion-brand">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/70 border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-orange-100">SaaS Startup</CardTitle>
              <CardDescription className="text-orange-300">
                TikTok & Meta Integration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-orange-200">
              <p>
                A workflow SaaS scaled qualified demos by aligning creative to
                the real pain points of operations teams.
              </p>
              <div className="flex justify-between text-sm">
                <span>Qualified Leads</span>
                <span className="text-orange-400 font-semibold">+280%</span>
              </div>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full border-orange-500/40 bg-transparent text-orange-200 hover:bg-orange-500/10 hover:text-orange-100"
              >
                <Link href="/case-studies/saas-startup">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/70 border-orange-500/30">
            <CardHeader>
              <CardTitle className="text-orange-100">
                Local Service Business
              </CardTitle>
              <CardDescription className="text-orange-300">
                Google Ads Optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-orange-200">
              <p>
                A regional home services team turned search traffic into steady,
                high-intent booked calls.
              </p>
              <div className="flex justify-between text-sm">
                <span>Local Leads</span>
                <span className="text-orange-400 font-semibold">+450%</span>
              </div>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="w-full border-orange-500/40 bg-transparent text-orange-200 hover:bg-orange-500/10 hover:text-orange-100"
              >
                <Link href="/case-studies/local-service-business">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-900 hover:from-orange-600 hover:to-yellow-600"
          >
            <Link href="/#contact">Start a test run</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
