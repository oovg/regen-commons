import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Layout({ children, title = "Regen Commons" }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Regen Commons - Regenerative Solutions for a Better Future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Regen Commons
            </Link>
            <div className="flex items-center">
              <nav className="mr-6">
                <ul className="flex space-x-6">
                  <li>
                    <Link
                      href="/about"
                      className="text-text hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-text hover:text-primary transition-colors"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/docs"
                      className="text-text hover:text-primary transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-text hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-text"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Regen Commons</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Regenerative solutions for a better future. Building sustainable communities and ecosystems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-accent hover:text-primary">About Us</Link></li>
                <li><Link href="/projects" className="text-sm text-accent hover:text-primary">Projects</Link></li>
                <li><Link href="/docs" className="text-sm text-accent hover:text-primary">Documentation</Link></li>
                <li><Link href="/contact" className="text-sm text-accent hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://twitter.com" className="text-sm text-accent hover:text-primary">Twitter</a></li>
                <li><a href="https://github.com" className="text-sm text-accent hover:text-primary">GitHub</a></li>
                <li><a href="https://discord.com" className="text-sm text-accent hover:text-primary">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Regen Commons. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
