import Image from 'next/image'
import Link from 'next/link'

const footerLinkClassName =
  'text-orange-300 hover:text-orange-200 transition-colors'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="/" className="flex items-center space-x-3">
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
          </Link>
          <div className="flex flex-col items-center gap-2 text-sm text-orange-300 sm:flex-row sm:gap-6">
            <Link href="/privacy" className={footerLinkClassName}>
              Privacy
            </Link>
            <Link href="/terms" className={footerLinkClassName}>
              Terms
            </Link>
            <span>(c) 2025 Hurricane Traffic. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
