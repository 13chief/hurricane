import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TrendingUp, Target, Users, Zap, Star, ArrowRight, Search, Compass, Rocket, LineChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HurricaneTrafficLanding() {
  return (
    <div className="min-h-screen bg-slate-900 text-orange-100">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Your Traffic Storm
                </span>
                <br />
                <span className="text-orange-100">Awaits</span>
              </h1>
              <p className="text-xl text-orange-200 mb-8 max-w-2xl">
                Drive high-quality traffic from Meta, Google, and TikTok ads with precision targeting and proven
                results.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-slate-900 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                <a href="#order-form">
                  Order a Test Run
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <Image
                  src="/hurricane-logo.png"
                  alt="Hurricane Traffic Animation"
                  width={320}
                  height={320}
                  className="animate-spin-slow"
                />

                {/* Dynamic Statistics */}
                <div className="absolute -top-4 -left-4">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 backdrop-blur">
                    <Target className="w-3 h-3 mr-1" />
                    95% Target Accuracy
                  </Badge>
                </div>

                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 backdrop-blur">
                    <Users className="w-3 h-3 mr-1" />
                    100,000+ Leads Generated
                  </Badge>
                </div>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 backdrop-blur">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    75% Higher Conversion Rates
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              About Hurricane Traffic
            </h2>
            <p className="text-lg text-orange-200 mb-8 leading-relaxed">
              We are a specialized lead generation business with deep expertise in driving high-quality, targeted
              traffic through paid advertising channels. Our team combines years of experience with cutting-edge
              strategies to deliver exceptional results across Meta, Google, and TikTok platforms.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-orange-100 mb-2">Expertise</h3>
                <p className="text-orange-300">Years of proven experience in paid traffic generation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-orange-100 mb-2">Precision</h3>
                <p className="text-orange-300">Advanced targeting strategies for maximum ROI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-orange-100 mb-2">Reliability</h3>
                <p className="text-orange-300">Consistent delivery of high-quality leads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-lg text-orange-200">
              A clear, repeatable system that keeps results and transparency front and center.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-slate-800/60 border-orange-500/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center">
                    <Search className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wide text-orange-400">Step 1</span>
                </div>
                <CardTitle className="text-orange-100">Discovery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-orange-200">
                <p className="text-sm text-orange-300">1-2 days</p>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li>Audit current traffic, funnel, and conversion data.</li>
                  <li>Define ICP, offer positioning, and success metrics.</li>
                  <li>Confirm budget range and growth timeline.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-orange-500/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center">
                    <Compass className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wide text-orange-400">Step 2</span>
                </div>
                <CardTitle className="text-orange-100">Strategy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-orange-200">
                <p className="text-sm text-orange-300">3-5 days</p>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li>Build channel mix, budget split, and KPI targets.</li>
                  <li>Map funnel stages, landing pages, and lead flow.</li>
                  <li>Create creative angles and testing roadmap.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-orange-500/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wide text-orange-400">Step 3</span>
                </div>
                <CardTitle className="text-orange-100">Launch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-orange-200">
                <p className="text-sm text-orange-300">1-2 weeks</p>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li>Implement tracking, pixels, and conversion events.</li>
                  <li>Build campaigns, QA ads, and validate landing pages.</li>
                  <li>Go live with initial tests and daily monitoring.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-orange-500/20">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center">
                    <LineChart className="h-5 w-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wide text-orange-400">Step 4</span>
                </div>
                <CardTitle className="text-orange-100">Optimize</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-orange-200">
                <p className="text-sm text-orange-300">Ongoing</p>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li>Weekly reporting with performance insights.</li>
                  <li>Creative refreshes and audience refinement.</li>
                  <li>Budget scaling based on ROI and lead quality.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-orange-500/20 bg-slate-800/50 px-6 py-4 text-center text-orange-200">
              Dedicated strategist with weekly checkpoints.
            </div>
            <div className="rounded-lg border border-orange-500/20 bg-slate-800/50 px-6 py-4 text-center text-orange-200">
              Clear KPIs, shared dashboards, and honest performance notes.
            </div>
            <div className="rounded-lg border border-orange-500/20 bg-slate-800/50 px-6 py-4 text-center text-orange-200">
              Fast creative turnaround to keep tests moving.
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-lg text-orange-200">Real results from real clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-orange-100">E-commerce Fashion Brand</CardTitle>
                <CardDescription className="text-orange-300">Meta & Google Ads Campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-orange-200">Lead Increase:</span>
                    <span className="text-orange-400 font-semibold">+340%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-200">Cost per Lead:</span>
                    <span className="text-orange-400 font-semibold">-65%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-200">ROAS:</span>
                    <span className="text-orange-400 font-semibold">4.8x</span>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="mt-6 w-full border-orange-500/40 bg-transparent text-orange-200 hover:bg-orange-500/10 hover:text-orange-100"
                >
                  <Link href="/case-studies/ecommerce-fashion-brand">
                    Read case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-orange-100">SaaS Startup</CardTitle>
                <CardDescription className="text-orange-300">TikTok & Meta Integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-orange-200">Qualified Leads:</span>
                    <span className="text-orange-400 font-semibold">+280%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-200">Conversion Rate:</span>
                    <span className="text-orange-400 font-semibold">+85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-200">Customer LTV:</span>
                    <span className="text-orange-400 font-semibold">+120%</span>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="mt-6 w-full border-orange-500/40 bg-transparent text-orange-200 hover:bg-orange-500/10 hover:text-orange-100"
                >
                  <Link href="/case-studies/saas-startup">
                    Read case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-orange-100">Local Service Business</CardTitle>
                <CardDescription className="text-orange-300">Google Ads Optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-orange-200">Local Leads:</span>
                    <span className="text-orange-400 font-semibold">+450%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-200">Cost Reduction:</span>
                    <span className="text-orange-400 font-semibold">-55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-200">Revenue Growth:</span>
                    <span className="text-orange-400 font-semibold">+380%</span>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="mt-6 w-full border-orange-500/40 bg-transparent text-orange-200 hover:bg-orange-500/10 hover:text-orange-100"
                >
                  <Link href="/case-studies/local-service-business">
                    Read case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-orange-500/40 bg-transparent text-orange-200 hover:bg-orange-500/10 hover:text-orange-100"
            >
              <Link href="/case-studies">View all case studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact/Order Form Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Ready to Start Your Traffic Storm?
              </h2>
              <p className="text-lg text-orange-200">
                We only mean business and quality leads
              </p>
            </div>

            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-orange-100 text-center">Order Your Test Run</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
