import Link from 'next/link'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About Us | Regen Commons">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8">
          About Regen Commons
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            Regen Commons is dedicated to promoting regenerative practices that restore ecosystems, 
            build community resilience, and create sustainable economic models.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to connect people, projects, and resources to accelerate the transition 
            to a regenerative future.
          </p>
        </div>
        
        <Link href="/" className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition-colors">
          Back to Home
        </Link>
      </div>
    </Layout>
  )
}
