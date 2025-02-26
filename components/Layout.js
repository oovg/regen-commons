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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Regen Commons - Regenerative Solutions for a Better Future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-xl font-bold mb-3 md:mb-0">
              Regen Commons
            </Link>
            <div className="flex items-center">
              <nav className="mr-4">
                <ul className="flex space-x-4">
                  <li>
                    <Link
                      href="/about"
                      className="hover:opacity-80 transition-opacity"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="hover:opacity-80 transition-opacity"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:opacity-80 transition-opacity"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-accent/20 text-white"
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

      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>

      <footer className="bg-primary text-white py-6 mt-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Regen Commons. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
