"use client";

import * as motion from "motion/react-client"
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Hero Section with Background Image */}
            <section className="relative h-[40vh] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1497493292307-31c376b6e479"
                    alt="Contact background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-4xl md:text-5xl font-bold text-white"
                >
                    Get in Touch ✨
                </motion.h1>
            </section>

            {/* Contact Form + Info */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8"
                >
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                        Send Us a Message
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex items-center gap-4">
                        <Mail className="w-8 h-8 text-blue-600" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Email Us
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                support@softwareco.com
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex items-center gap-4">
                        <Phone className="w-8 h-8 text-blue-600" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Call Us
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex items-center gap-4">
                        <MapPin className="w-8 h-8 text-blue-600" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Visit Us
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                123 Tech Park, Bangalore, India
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Map Section */}
            {/* <section className="h-[300px] relative">
                <Image
                    src="https://images.unsplash.com/photo-1502920917128-1aa500764b8a"
                    alt="Map placeholder"
                    fill
                    className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <p className="text-white text-lg">📍 Google Map Embed Here</p>
                </div>
            </section> */}
        </div>
    );
}
