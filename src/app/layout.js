import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "@/components/themeswitcher";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider   >
          <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {/* Navbar */}
            <header className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-800">
              <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                SoftTech
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
              </nav>
              <ThemeSwitcher />
            </header>

            {/* Page content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="py-6 text-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} SoftTech. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
