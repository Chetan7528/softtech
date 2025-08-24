


"use client";

import * as motion from "motion/react-client"
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                    alt="Team working"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute text-center">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="mt-4 text-lg md:text-xl text-gray-200"
                    >
                        Driving innovation through technology & passion 🚀
                    </motion.p>
                </div>
            </section>

            {/* Story Section */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        Founded in 2020, our company started with a small team of tech
                        enthusiasts who wanted to make software simpler, faster, and more
                        human. Today, we’re helping businesses worldwide achieve digital
                        transformation with cutting-edge solutions.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                        alt="Our team"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg"
                    />
                </motion.div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-100 dark:bg-gray-900 py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800"
                    >
                        <h3 className="text-2xl font-semibold mb-2">🎯 Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            To empower businesses with reliable, scalable, and user-friendly
                            software solutions that create real impact in people’s lives.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800"
                    >
                        <h3 className="text-2xl font-semibold mb-2">🌍 Our Vision</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            To be a global leader in digital innovation, shaping the future of
                            technology while making it accessible and sustainable for all.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-10"
                >
                    Meet Our Team
                </motion.h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {[
                        {
                            name: "Alice Johnson",
                            role: "CEO",
                            img: "https://randomuser.me/api/portraits/women/44.jpg",
                        },
                        {
                            name: "Michael Smith",
                            role: "CTO",
                            img: "https://randomuser.me/api/portraits/men/32.jpg",
                        },
                        {
                            name: "Sophia Lee",
                            role: "Lead Designer",
                            img: "https://randomuser.me/api/portraits/women/65.jpg",
                        },
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
                        >
                            <Image
                                src={member.img}
                                alt={member.name}
                                width={150}
                                height={150}
                                className="mx-auto rounded-full mb-4"
                            />
                            <h4 className="text-xl font-semibold">{member.name}</h4>
                            <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
