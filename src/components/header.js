"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons
import ThemeSwitcher from "./themeswitcher";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    Soft<span className="text-gray-800 dark:text-gray-200">Ware</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            className="relative text-lg font-medium text-gray-800 dark:text-gray-200 group"
                        >
                            {link.name}
                            {/* underline animation */}
                            <motion.span
                                className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 dark:bg-blue-400 group-hover:w-full"
                                initial={{ width: 0 }}
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    ))}
                    {/* <ThemeSwitcher /> */}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-800 dark:text-gray-200"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.nav
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
                >
                    <div className="flex flex-col items-center gap-6 py-6">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.href}
                                className="text-lg font-medium text-gray-800 dark:text-gray-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* <ThemeSwitcher /> */}
                    </div>
                </motion.nav>
            )}
        </header>
    );
}
