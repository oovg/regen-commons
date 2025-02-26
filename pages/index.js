import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Regen Commons - Regenerative Solutions for a Better Future">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Regen Commons</h1>
            <p className="text-xl mb-10">
              Official platform for regenerative communities and sustainable ecosystems
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/projects" className="button">
                Explore Projects
              </Link>
              <Link href="/docs" className="button bg-accent">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Regen Commons */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is Regen Commons?</h2>
            <p className="text-lg mb-6">
              Regen Commons is a platform for regenerative communities focused on building 
              sustainable ecosystems and solutions for a better future. Our approach combines 
              ecological wisdom with modern technology to create resilient systems.
            </p>
            <p className="text-lg mb-6">
              Regen Commons has been supporting regenerative initiatives since the beginning, 
              making it one of the most experienced and tested platforms in the regenerative space.
            </p>
            <p className="text-lg mb-6">
              Regen Commons provides tools, resources, and community support for projects 
              that aim to restore ecosystems, build sustainable communities, and create 
              regenerative economies.
            </p>
            <Link href="/docs/getting-started" className="text-accent hover:text-primary font-medium">
              Get started with Regen Commons
            </Link>
          </div>
        </div>
      </section>

      {/* What is Regeneration */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is Regeneration?</h2>
            <p className="text-lg mb-6">
              Regeneration is a holistic approach to creating systems that restore, renew, and 
              revitalize their own sources of energy and materials. It goes beyond sustainability 
              by actively improving the health of ecosystems and communities.
            </p>
            <p className="text-lg mb-6">
              Regenerative practices work with nature rather than against it, creating abundance 
              and resilience in natural and human systems.
            </p>
            <a href="https://regeneration.org" className="text-accent hover:text-primary font-medium">
              Learn more about Regeneration
            </a>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why join Regen Commons?</h2>
            <p className="text-lg mb-6">
              Joining Regen Commons enables you to connect with like-minded individuals and 
              organizations committed to regenerative practices. You'll gain access to resources, 
              knowledge, and support to amplify your impact.
            </p>
            <p className="text-lg mb-6">
              "Be the change you wish to see in the world"
            </p>
            <a href="https://regeneration.org/join-a-community" className="text-accent hover:text-primary font-medium">
              Read more about joining a regenerative community
            </a>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contribute to Regen Commons</h2>
            <p className="text-lg mb-6">
              We welcome contributions from anyone interested in regenerative practices, and are 
              grateful for even the smallest of efforts! If you'd like to contribute to the Regen 
              Commons platform, please join our community forum, share your ideas, and participate 
              in our open projects.
            </p>
            <Link href="/docs/contributing" className="text-accent hover:text-primary font-medium">
              Read our contribution guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* About the Team */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About the Team</h2>
            <p className="text-lg mb-6">
              The Regen Commons team comprises dedicated individuals distributed across the world. 
              Our team is committed to supporting regenerative initiatives and building tools for 
              a more sustainable future.
            </p>
            <a href="https://regeneration.org/foundation" className="text-accent hover:text-primary font-medium">
              Read more about the Regeneration Foundation
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <h3 className="text-xl font-semibold mb-4">Get Started</h3>
                <p className="mb-4">Don't know where to start? We can help.</p>
                <Link href="/docs/getting-started" className="text-accent hover:text-primary font-medium">
                  Get started
                </Link>
              </div>
              <div className="card text-center">
                <h3 className="text-xl font-semibold mb-4">Have doubts?</h3>
                <p className="mb-4">Check the FAQ section in the documentation.</p>
                <Link href="/docs/faq" className="text-accent hover:text-primary font-medium">
                  Go to the FAQ
                </Link>
              </div>
              <div className="card text-center">
                <h3 className="text-xl font-semibold mb-4">Want to contribute?</h3>
                <p className="mb-4">Get more information in the documentation.</p>
                <Link href="/docs/contributing" className="text-accent hover:text-primary font-medium">
                  How to contribute
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
