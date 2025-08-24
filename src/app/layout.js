import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "@/components/themeswitcher";
import Header from "@/components/header";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider   >
          <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            {/* Navbar */}
            <Header />

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
