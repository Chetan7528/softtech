import * as motion from "motion/react-client"


const About = () => {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto bg-white dark:bg-gray-900">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            >
                About Us
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
            >
                At <span className="font-semibold">SoftTech</span>, we believe in empowering businesses with innovative technology.
                Founded in 2020, our mission is to create scalable, secure, and user-friendly software that drives real business results.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6"
            >
                Our team of experienced developers, designers, and project managers work collaboratively to deliver world-class solutions for startups and enterprises alike.
            </motion.p>

            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white"
            >
                Our Mission
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
            >
                To help businesses unlock growth through technology, innovation, and seamless digital transformation.
            </motion.p>
        </section>
    )
}

export default About;