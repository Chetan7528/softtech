"use client";

import Image from "next/image";
// import { motion } from "framer-motion";
import { motion } from "motion/react"
import Link from "next/link";

export default function Home() {
  return (
    <>

      <div className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-500 to-indigo-700 text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold"
          >
            Welcome to SoftTech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg md:text-2xl max-w-2xl"
          >
            Building innovative software solutions for businesses worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 flex space-x-4"
          >
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-100"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white/20"
            >
              Learn More
            </Link>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Web Development", desc: "Modern, responsive websites." },
              { title: "Mobile Apps", desc: "Cross-platform mobile applications." },
              { title: "Cloud Solutions", desc: "Secure & scalable cloud systems." },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="py-20 px-6 bg-white dark:bg-gray-950 text-center">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            We are a passionate team of developers, designers, and strategists
            dedicated to creating impactful digital solutions.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700"
          >
            Learn More About Us
          </Link>
        </section>

        {/* STATS */}
        <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "500+", label: "Projects Delivered" },
              { num: "100+", label: "Happy Clients" },
              { num: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
              >
                <h3 className="text-3xl font-bold text-blue-600">{stat.num}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
          <p className="mt-4">Let’s bring your ideas to life with our expert team.</p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
}
