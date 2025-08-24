"use client";

import Image from "next/image";
import { motion } from "motion/react"
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Tech background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-[1px]" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            <span className="animated-gradient-text">
              Building the Future of Software
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            We design and develop scalable, intelligent, and modern digital
            solutions to help your business grow.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="/about"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-lg bg-white text-gray-900 font-medium shadow-md hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Curved Wave Separator */}
        <svg
          className="absolute bottom-[-1px] left-0 w-full h-24 md:h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="block dark:hidden"
            fill="#f8fafc"
            d="M0,160L60,160C120,160,240,160,360,165.3C480,171,600,181,720,170.7C840,160,960,128,1080,106.7C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <path
            className="hidden dark:block"
            fill="#0b1220"
            d="M0,160L60,160C120,160,240,160,360,165.3C480,171,600,181,720,170.7C840,160,960,128,1080,106.7C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </section>

      {/* Features Section */}
      <section className="-mt-4 bg-slate-50 dark:bg-slate-950 px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Why Choose{" "}
          <span className="animated-gradient-text">Our Company?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "🚀 Fast Development",
              desc: "We deliver scalable applications at lightning speed using cutting-edge technologies.",
            },
            {
              title: "🔒 Secure by Design",
              desc: "Our solutions follow industry-leading security practices from day one.",
            },
            {
              title: "🌍 Global Impact",
              desc: "We create digital experiences that empower businesses worldwide.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
              className="p-6 rounded-xl shadow-lg bg-white dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* FEATURES */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Web Development",
              desc: "Modern and responsive websites with scalable architecture.",
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            },
            {
              title: "Mobile Apps",
              desc: "Cross-platform apps designed with user experience in mind.",
              img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
            },
            {
              title: "Cloud Solutions",
              desc: "Secure, scalable cloud infrastructure for global reach.",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={250}
                className="rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
            alt="Team working"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We are a passionate team of developers, designers, and strategists
              dedicated to delivering innovative digital products and solutions.
            </p>
            <Link
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      {/* <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((p) => (
            <motion.div
              key={p}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={`https://source.unsplash.com/random/800x600?tech,${p}`}
                alt="Project"
                width={400}
                height={300}
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Sarah Lee",
              role: "CEO, StartUpX",
              feedback:
                "SoftTech transformed our vision into a powerful digital product.",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "James Brown",
              role: "CTO, FinEdge",
              feedback:
                "The team’s professionalism and skill set are unmatched.",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Anita Kumar",
              role: "Founder, Healthify",
              feedback:
                "A reliable partner for all our software development needs.",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow"
            >
              <Image
                src={t.img}
                alt={t.name}
                width={80}
                height={80}
                className="mx-auto rounded-full"
              />
              <p className="mt-4 text-gray-600 dark:text-gray-300">{t.feedback}</p>
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="CTA background"
          fill
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <h2 className="text-3xl font-bold">Ready to Build Your Next Project?</h2>
        <p className="mt-4">Let’s collaborate and turn your ideas into reality.</p>
        <Link
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}

