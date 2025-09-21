"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Users,
  Award,
  Globe,
  Zap,
  Target,
  Eye,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Rocket,
  Shield,
  Lightbulb,
  TrendingUp,
  Clock,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { useRouter } from "next/navigation";

function handleTimelineButton() {
  document.getElementById("timeline").scrollIntoView({ behavior: "smooth" });
}

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState(0);

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

  const teamMembers = [
    {
      name: "Kaklotar Chetan",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=400&h=400&fit=crop&crop=face",
      bio: "Visionary leader with 12+ years in tech innovation. Alexandra founded SoftWare with a mission to democratize technology and make it accessible to businesses of all sizes.",
      skills: [
        "Strategic Planning",
        "Business Development",
        "Innovation Leadership",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/kaklotar-chetan/",
        twitter: "#",
        email: "alexandra@SoftWare.com",
      },
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Tech architect and AI specialist. Marcus leads our technical vision and ensures we stay at the forefront of emerging technologies and scalable solutions.",
      skills: ["System Architecture", "AI/ML", "Cloud Computing"],
      social: {
        linkedin: "#",
        github: "#",
        email: "marcus@SoftWare.com",
      },
    },
    {
      name: "Emma Thompson",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer passionate about creating intuitive user experiences. Emma transforms complex ideas into beautiful, accessible digital interfaces.",
      skills: ["UI/UX Design", "Design Systems", "User Research"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emma@SoftWare.com",
      },
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack wizard with expertise in modern frameworks. David leads our development team and ensures every line of code meets our high-quality standards.",
      skills: ["React/Next.js", "Node.js", "DevOps"],
      social: {
        linkedin: "#",
        github: "#",
        email: "david@SoftWare.com",
      },
    },
  ];

  const companyStats = [
    {
      number: "500+",
      label: "Projects Delivered",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "200+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "5+",
      label: "Years of Excellence",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Star className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const coreValues = [
    {
      title: "Innovation First",
      description:
        "We constantly push boundaries, exploring cutting-edge technologies to deliver solutions that set new industry standards.",
      icon: <Lightbulb className="w-10 h-10" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Quality Excellence",
      description:
        "Every project undergoes rigorous quality assurance, ensuring we deliver nothing but the finest digital experiences.",
      icon: <Shield className="w-10 h-10" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Client Partnership",
      description:
        "We build lasting relationships through transparent communication, collaborative approach, and unwavering commitment to success.",
      icon: <Heart className="w-10 h-10" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Global Impact",
      description:
        "Our solutions create meaningful change, helping businesses transform and communities thrive in the digital age.",
      icon: <Globe className="w-10 h-10" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Started with a vision to democratize technology for businesses worldwide.",
    },
    {
      year: "2021",
      title: "First 100 Clients",
      description:
        "Reached our first major milestone with diverse clients across industries.",
    },
    {
      year: "2022",
      title: "AI Integration",
      description:
        "Pioneered AI-powered solutions, becoming early adopters in the space.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description:
        "Expanded operations internationally, serving clients across 5 continents.",
    },
    {
      year: "2024",
      title: "Innovation Awards",
      description:
        "Recognized as 'Tech Innovation Company of the Year' by industry leaders.",
    },
    {
      year: "2025",
      title: "Sustainable Future",
      description:
        "Committed to carbon-neutral operations and green technology initiatives.",
    },
  ];

  const navigate = useRouter();
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navigation - Same as main site */}
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
              <a href="/" className="hover:text-blue-400 transition-colors">
                Home
              </a>
              <a
                href="/#services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </a>
              <a href="/aboutus" className="text-blue-400">
                About
              </a>
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
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
                  About
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  SoftWare
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Driving innovation through technology & passion 🚀
              </p>
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full p-1">
                  <div className="bg-gray-950 rounded-full px-6 py-3">
                    <span className="text-sm font-medium">
                      Established 2020 • Trusted Worldwide
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            data-animate
            id="stats"
          >
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all duration-700 transform ${
                  isVisible.stats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-animate id="story-text">
              <div
                className={`transition-all duration-1000 transform ${
                  isVisible["story-text"]
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Founded in 2020, SoftWare began as a small team of passionate
                  technologists who believed that cutting-edge technology should
                  be accessible to businesses of all sizes. What started in a
                  garage has grown into a global technology partner, serving
                  clients across six continents.
                </p>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Today, we're proud to be at the forefront of digital
                  innovation, helping businesses transform their operations,
                  enhance customer experiences, and achieve sustainable growth
                  through smart technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 inline-block ml-2" />
                  </button>
                  <button
                    onClick={handleTimelineButton}
                    className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
                  >
                    View Timeline
                  </button>
                </div>
              </div>
            </div>

            <div data-animate id="story-visual">
              <div
                className={`transition-all duration-1000 transform ${
                  isVisible["story-visual"]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-gray-700">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800/70 rounded-lg p-4 text-center">
                        <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-300">Growth Rate</div>
                        <div className="text-xl font-bold text-green-400">
                          250%
                        </div>
                      </div>
                      <div className="bg-gray-800/70 rounded-lg p-4 text-center">
                        <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-sm text-gray-300">
                          Avg. Delivery
                        </div>
                        <div className="text-xl font-bold text-blue-400">
                          6 weeks
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <p className="text-green-400 font-semibold">
                        Industry Leading Performance
                      </p>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-green-500/30 to-cyan-500/30 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-animate id="mission-header">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 transform ${
                isVisible["mission-header"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div data-animate id="mission">
              <div
                className={`bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-700 h-full transition-all duration-1000 transform ${
                  isVisible.mission
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">🎯 Our Mission</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower businesses with reliable, scalable, and
                  user-friendly software solutions that create real impact in
                  people's lives. We strive to bridge the gap between complex
                  technology and practical business needs.
                </p>
              </div>
            </div>

            <div data-animate id="vision">
              <div
                className={`bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-gray-700 h-full transition-all duration-1000 transform ${
                  isVisible.vision
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">🌍 Our Vision</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be a global leader in digital innovation, shaping the
                  future of technology while making it accessible and
                  sustainable for all. We envision a world where every business
                  can harness the power of technology to thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate id="values-header">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 transform ${
                isVisible["values-header"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                data-animate
                id={`value-${index}`}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible[`value-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-animate id="team-header">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 transform ${
                isVisible["team-header"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              The brilliant minds behind SoftWare's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-animate
                id={`team-${index}`}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible[`team-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto border-4 border-gradient-to-r from-blue-500 to-purple-600 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-700/50 text-xs px-2 py-1 rounded-full text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a
                        target="_blank"
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
        id="timeline"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-animate id="timeline-header">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 transform ${
                isVisible["timeline-header"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                data-animate
                id={`milestone-${index}`}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-12 transition-all duration-1000 transform ${
                  isVisible[`milestone-${index}`]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
                    <div className="text-2xl font-bold text-blue-400 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-950"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center" data-animate id="cta">
          <div
            className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-gray-700 transition-all duration-1000 transform ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and turn your vision into reality. Our team is
              excited to hear about your next project and discuss how we can
              help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                Start Your Project
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </button>
              <button className="border-2 border-gray-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all">
                Schedule a Call
              </button>
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
                Innovating the future with smart technology solutions that
                empower businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    News & Blog
                  </a>
                </li>
              </ul>
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
                  <span className="text-sm">San Francisco, CA</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm">hello@SoftWare.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2025 SoftWare. All rights reserved. Crafted with passion
                for innovation.
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

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
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

        /* Floating animation for background elements */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Pulse glow effect */
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutUsPage;
