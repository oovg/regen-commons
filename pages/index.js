import Link from 'next/link'
import Layout from '../components/Layout'

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
    <Layout title="Regen Commons - Home">
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
    </Layout>
  )
}
