"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
  Globe,
  Headphones,
  Shield,
  Zap,
  Users,
  Award,
  Star,
  Calendar,
  Video,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ContactUsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //aana parthi form data submit thay che and tene store karvu hot databse ma to teni mate khali request maravani baki che
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        service: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);

    console.log("form : ", formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@SoftWare.com", "support@SoftWare.com"],
      color: "from-blue-500 to-cyan-500",
      description: "Get in touch via email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "from-purple-500 to-pink-500",
      description: "Speak directly with our team",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Innovation Street", "San Francisco, CA 94105"],
      color: "from-green-500 to-emerald-500",
      description: "Our headquarters location",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      color: "from-orange-500 to-red-500",
      description: "When we're available",
    },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "AI Integration",
    "UI/UX Design",
    "Digital Marketing",
    "E-commerce Solutions",
    "Custom Software Development",
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kaklotar-chetan/",
      color: "hover:text-blue-400",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-300",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      name: "Website",
      url: "#",
      color: "hover:text-green-400",
    },
  ];

  const quickActions = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule a Call",
      description: "Book a free consultation",
      color: "from-blue-500 to-purple-600",
      action: "Schedule Now",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Live Demo",
      description: "See our solutions in action",
      color: "from-green-500 to-cyan-500",
      action: "Watch Demo",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Get instant help",
      color: "from-purple-500 to-pink-500",
      action: "Get Support",
    },
  ];

  const stats = [
    {
      number: "< 1hr",
      label: "Response Time",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      number: "99.9%",
      label: "Uptime SLA",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Headphones className="w-5 h-5" />,
    },
    {
      number: "500+",
      label: "Happy Clients",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  const navigate = useRouter();

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold">SoftWare</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link
                href="/#services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/aboutus"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </Link>

              <Link href="/contact" className="text-blue-400">
                Contact
              </Link>
              <button
                onClick={() => navigate.push("/")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16" data-animate id="hero">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible.hero
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Get in
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Ready to transform your ideas into reality? Let's discuss your
                project and explore how we can help you achieve your goals. 🚀
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="text-blue-400">{stat.icon}</div>
                      <div>
                        <span className="font-bold text-white">
                          {stat.number}
                        </span>
                        <span className="text-gray-400 text-sm ml-1">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-8 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate id="contact-header">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 transform ${
                isVisible["contact-header"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Multiple Ways to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                data-animate
                id={`contact-${index}`}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible[`contact-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white`}
                >
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {info.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{info.description}</p>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-300 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2" data-animate id="contact-form">
              <div
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 transition-all duration-1000 transform ${
                  isVisible["contact-form"]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Send us a Message</h3>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                      placeholder="Tell us about your project or inquiry in detail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                      isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div data-animate id="quick-actions">
                <div
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 transition-all duration-1000 transform ${
                    isVisible["quick-actions"]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-6 text-center">
                    Quick Actions
                  </h3>
                  <div className="space-y-4">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        className={`w-full bg-gradient-to-r ${action.color} p-4 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 group`}
                      >
                        <div className="flex items-center">
                          <div className="mr-4 group-hover:scale-110 transition-transform">
                            {action.icon}
                          </div>
                          <div className="text-left flex-1">
                            <div className="font-semibold">{action.title}</div>
                            <div className="text-sm opacity-90">
                              {action.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div data-animate id="social-media">
                <div
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 transition-all duration-1000 transform ${
                    isVisible["social-media"]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-6 text-center">
                    Follow Us
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`flex items-center justify-center p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-gray-500 transition-all transform hover:scale-105 ${social.color}`}
                      >
                        <div className="mr-2">{social.icon}</div>
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div data-animate id="office-hours">
                <div
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 transition-all duration-1000 transform ${
                    isVisible["office-hours"]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4 text-center">
                    Office Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Monday - Friday</span>
                      <span className="text-green-400 font-medium">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-blue-400 font-medium">
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Sunday</span>
                      <span className="text-gray-500 font-medium">Closed</span>
                    </div>
                    <div className="pt-3 border-t border-gray-700">
                      <div className="flex items-center justify-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>
                          Response within 1 hour during business hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-animate id="map-header">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 transform ${
                isVisible["map-header"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Visit Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Office
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Located in the heart of San Francisco
            </p>
          </div>

          <div data-animate id="map-container">
            <div
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden transition-all duration-1000 transform ${
                isVisible["map-container"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div className="h-96 bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    SoftWare Headquarters
                  </h3>
                  <p className="text-gray-400 mb-4">
                    123 Innovation Street
                    <br />
                    San Francisco, CA 94105
                  </p>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                    Get Directions
                  </button>
                </div>

                {/* Animated location pins */}
                <div className="absolute top-16 left-16 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <div
                  className="absolute bottom-20 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold">SoftWare</span>
              </div>
              <p className="text-gray-400 mb-4">
                Ready to transform your digital presence? Let's build something
                amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`text-gray-400 transition-colors ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    AI Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm">123 Innovation Street, SF</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm">hello@SoftWare.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm">Mon-Fri: 9AM-6PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2025 SoftWare. All rights reserved. Let's build the
                future together.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        /* Form focus effects */
        input:focus,
        textarea:focus,
        select:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
        }

        /* Button hover effects */
        button:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Gradient border animation */
        @keyframes gradient-border {
          0%,
          100% {
            border-image-source: linear-gradient(45deg, #3b82f6, #8b5cf6);
          }
          50% {
            border-image-source: linear-gradient(45deg, #8b5cf6, #06b6d4);
          }
        }

        /* Card hover lift effect */
        .card-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        /* Loading spinner animation */
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition-property: transform, opacity, box-shadow, border-color,
            background-color, color;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1f2937;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
        }

        /* Responsive text scaling */
        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
          }

          h2 {
            font-size: 2rem;
          }

          .hero-text {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUsPage;
