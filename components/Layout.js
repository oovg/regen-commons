import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = 'Regen Commons' }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Regen Commons - Regenerative Solutions for a Better Future" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-green-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Regen Commons</Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/about" className="hover:text-green-200 transition-colors">About</Link></li>
                <li><Link href="/projects" className="hover:text-green-200 transition-colors">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-green-200 transition-colors">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {children}
      </main>

      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Regen Commons. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
