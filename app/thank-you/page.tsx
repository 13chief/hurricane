import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-orange-100">
      <SiteHeader />
      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Thanks for your request
            </span>
          </h1>
          <p className="mt-4 text-lg text-orange-200">
            Your test run details are in. We will review everything and reach
            back out soon.
          </p>

          <Card className="mt-10 border-orange-500/30 bg-slate-800/70 text-left">
            <CardHeader>
              <CardTitle className="text-center text-orange-100">
                What happens next
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-orange-200">
              <div className="rounded-lg border border-orange-500/20 bg-slate-900/40 px-4 py-3">
                We will review your goals, offer a plan, and outline next steps.
              </div>
              <div className="rounded-lg border border-orange-500/20 bg-slate-900/40 px-4 py-3">
                If we need any extra details, we will follow up via email.
              </div>
              <div className="rounded-lg border border-orange-500/20 bg-slate-900/40 px-4 py-3">
                You can always send updates through the contact form on the home
                page.
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-900 hover:from-orange-600 hover:to-yellow-600"
            >
              <Link href="/">Back to Home</Link>
            </Button>
            <Link
              href="/#contact"
              className="text-sm text-orange-300 underline-offset-4 hover:underline"
            >
              Submit another request
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
