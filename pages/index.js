import Layout from "../components/Layout";
import { Link, Image } from "next/link";

export default function Home() {
  return (
    <Layout title="Regen Commons - Regenerative Solutions for a Better Future">
      {/* Hero Section */}
      <section
        className="py-16 md:py-24 border-b border-gray-200 dark:border-gray-700"
        style={{
          backgroundImage: "url(" + "/rc_hero.png" + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
              Regen Commons
            </h1>
            <p className="text-xl mb-10">
              A new kind of decentralized brand commons is emerging—one that
              stewards the Regen meme, brand, & movement while out-coordinating
              the competition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                target="_blank"
                href="https://x.com/gregory_landua/status/1894781218685616444"
                className="button"
              >
                View Announcement
              </a>
              <a
                target="_blank"
                href="https://regencommons.discourse.group/"
                className="button"
              >
                Go to Forum
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Regen Commons */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Wtf is Regen Commons?</h2>
            <p className="text-lg mb-6">
              It’s a decentralized brand and IP commons designed to nurture &
              grow the Regen identity across Web3, ensuring it remains a public
              good while aligning shared incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Now?</h2>
            <p className="text-lg mb-6">
              Regen is the most potent meme in regenerative crypto, but the
              brand needs intentional stewardship to prevent misalignment &
              dilution. By co-governing fair use standards & shared IP, we
              ensure Regen remains a signal of real regenerative action.
            </p>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="https://regencommons.discourse.group/"
                className="card hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">Forum</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Sign the Regen Commons manifesto to show your alignment.
                </p>
              </a>
              <a
                href="https://github.com/oovg/regen-commons"
                className="card hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore our open source code and contribute.
                </p>
              </a>
              <a
                href="https://twitter.com/regen_network"
                className="card hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">Twitter</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Follow us for the latest updates and announcements.
                </p>
              </a>
              <a
                href="https://medium.com/regen-network"
                className="card hover:shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">Blog</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Read our latest articles and thought pieces on regeneration.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Contribute to Regen Commons
            </h2>
            <p className="text-lg mb-6">
              We welcome contributions from anyone interested in regenerative
              practices, and are grateful for even the smallest of efforts! If
              you'd like to contribute to the Regen Commons, please follow the
              movement, share your ideas, and participate in our open projects.
            </p>
          </div>
        </div>
      </section>

      {/* About the Network */}
      <section className="py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About the Network</h2>
            <p className="text-lg mb-6">
              The Regen Commons network comprises dedicated individuals and
              organizations distributed across the world. The network is
              committed to supporting Regen initiatives and building tools for a
              more sustainable future.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
