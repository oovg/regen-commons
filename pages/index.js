import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  // Sample links for the Regen Commons website
  const links = [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Head>
        <title>Regen Commons</title>
        <meta name="description" content="Regen Commons - Regenerative Solutions for a Better Future" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-8 text-center">
            Regen Commons
          </h1>
          
          <p className="text-xl text-gray-700 mb-12 text-center">
            Building regenerative solutions for a sustainable future
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Explore Our Site
            </h2>
            
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name} className="border-b border-gray-100 pb-2">
                  <Link href={link.href} className="flex items-center text-lg text-gray-800 hover:text-green-600 transition-colors">
                    <span className="mr-2">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Regen Commons. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
