import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { TrendingUp, Target, Users, Zap, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HurricaneTrafficLanding() {
  return (
    <div className="min-h-screen bg-slate-900 text-orange-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/hurricane-logo.png"
              alt="Hurricane Traffic Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Hurricane Traffic
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-orange-200 hover:text-orange-400 transition-colors">
              About
            </a>
            <a href="#cases" className="text-orange-200 hover:text-orange-400 transition-colors">
              Cases
            </a>
            <a href="#contact" className="text-orange-200 hover:text-orange-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

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
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-slate-900 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              >
                Order a Test Run
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-orange-300 mt-3">🎯 20% Discount on Initial Leads</p>
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
              </CardContent>
            </Card>
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
                Get your discounted test run and see the Hurricane Traffic difference
              </p>
            </div>

            <Card className="bg-slate-800/70 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-orange-100 text-center">Order Your Test Run</CardTitle>
                <CardDescription className="text-orange-300 text-center">
                  🎯 20% Discount on Initial Leads - Limited Time Offer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-orange-200">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-orange-200">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-orange-200">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-orange-200">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500"
                        placeholder="(optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-orange-200">
                      Brief Description of Business/Requirements *
                    </Label>
                    <Textarea
                      id="description"
                      className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500 min-h-[100px]"
                      placeholder="Tell us about your business and what you're looking to achieve..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-slate-900 font-semibold py-4 text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    Claim Your 20% Discount Test Run
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/hurricane-logo.png"
                alt="Hurricane Traffic Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Hurricane Traffic
              </span>
            </div>
            <div className="text-orange-300 text-sm">© 2024 Hurricane Traffic. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
