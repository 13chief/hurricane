import Image from 'next/image'
import Link from 'next/link'

const navLinkClassName =
  'text-orange-200 hover:text-orange-400 transition-colors'

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-3">
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
        </Link>
        <nav className="hidden md:flex space-x-6" aria-label="Primary">
          <Link href="/#about" className={navLinkClassName}>
            About
          </Link>
          <Link href="/#cases" className={navLinkClassName}>
            Cases
          </Link>
          <Link href="/#contact" className={navLinkClassName}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
