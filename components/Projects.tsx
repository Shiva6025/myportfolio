'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Rocket, Zap, Star } from 'lucide-react';
import Image from 'next/image';

const projects = [
    // Full-Stack Applications
    {
        id: 1,
        title: "Task Management System",
        description: "SaaS application for team collaboration and project management with real-time updates.",
        tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
        link: "https://tmstribha.techdino.in/",
        github: null,
        status: "live",
        image: null,
        featured: true
    },
    {
        id: 2,
        title: "Rudra Home Tuitions",
        description: "Educational platform connecting students with qualified tutors for personalized learning.",
        tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
        link: "https://rudrahometuitions.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 3,
        title: "Diary Souls",
        description: "Digital journaling and personal diary application with privacy-focused features.",
        tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
        link: "https://diarysouls.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 4,
        title: "Quadrant Exams",
        description: "Online examination and assessment platform with automated grading system.",
        tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
        link: "https://exam.quadrantitservices.com/",
        github: null,
        status: "live",
        image: null,
        featured: true
    },
    {
        id: 5,
        title: "VMS - Visitor Management",
        description: "Comprehensive visitor management system for corporate and institutional use.",
        tags: ["React.js", "Frontend"],
        link: "https://vms.quadrantitservices.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 6,
        title: "Meetowner",
        description: "Mobile application connecting property seekers directly with owners.",
        tags: ["React Native", "Mobile App"],
        link: "https://www.meetowner.in/",
        github: null,
        status: "live",
        image: null,
        featured: true
    },
    {
        id: 7,
        title: "Linkin Science",
        description: "Bioscience platform with enhanced frontend and error fixes for better user experience.",
        tags: ["HTML", "Frontend"],
        link: "https://bioscience.linkinscience.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 8,
        title: "Mental Maths",
        description: "Interactive educational app for improving mental arithmetic skills and speed.",
        tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
        link: "https://sayabacus.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 9,
        title: "Book My Theatre",
        description: "Theatre booking platform with seat selection and payment integration.",
        tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
        link: "https://uat.bookmytheatre.com/",
        github: null,
        status: "development",
        image: null
    },
    {
        id: 10,
        title: "Limousin Ride",
        description: "Premium ride-hailing service platform with advanced booking features.",
        tags: ["React", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
        link: null,
        github: null,
        status: "development",
        image: null
    },
    {
        id: 11,
        title: "Flames",
        description: "Social networking mobile application with real-time chat and matching features.",
        tags: ["React Native", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
        link: null,
        github: null,
        status: "development",
        image: null
    },
    {
        id: 12,
        title: "Space Pet Clinic",
        description: "Veterinary clinic management mobile app with appointment scheduling and records.",
        tags: ["React Native", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
        link: null,
        github: null,
        status: "development",
        image: null
    },
    {
        id: 13,
        title: "Qwallet",
        description: "Digital wallet mobile application for secure transactions and money management.",
        tags: ["React Native", "Mobile App"],
        link: null,
        github: null,
        status: "development",
        image: null
    },
    {
        id: 14,
        title: "Abode CRM",
        description: "Property CRM desktop application built with Electron framework for real estate management.",
        tags: ["Electron", "Desktop App", "CRM"],
        link: null,
        github: null,
        status: "development",
        image: null
    },

    // WordPress Projects
    {
        id: 15,
        title: "Quadrant IT Services",
        description: "Professional IT services company website showcasing comprehensive technology solutions and services.",
        tags: ["WordPress", "Elementor"],
        link: "https://quadrantitservices.com",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 16,
        title: "Quadrant Systems",
        description: "Enterprise systems integration and technology solutions provider based in South Africa.",
        tags: ["WordPress", "Elementor"],
        link: "https://quadrantsystems.co.za/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 17,
        title: "Haraadya Infrastructure",
        description: "Real estate and infrastructure development company website with modern design.",
        tags: ["WordPress", "Elementor"],
        link: "https://haraadhyainfra.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 18,
        title: "Euro Kids South Africa",
        description: "Educational institution website for early childhood development and learning.",
        tags: ["WordPress", "Elementor"],
        link: "https://eurokidz.co.za/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 19,
        title: "Abode Groups",
        description: "Property development and real estate group showcasing premium residential projects.",
        tags: ["WordPress", "Elementor"],
        link: "https://abodegroups.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 20,
        title: "EcoNest Properties",
        description: "Sustainable and eco-friendly property solutions with modern amenities.",
        tags: ["WordPress", "Elementor"],
        link: "https://econest.properties/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 21,
        title: "Smile Again Dental Care",
        description: "Multispeciality dental care center providing comprehensive oral health services.",
        tags: ["WordPress", "Elementor"],
        link: "https://smileagaindental.in/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 22,
        title: "KASP Dental Care",
        description: "Advanced dental care facility with state-of-the-art treatments and services.",
        tags: ["WordPress", "Elementor"],
        link: "https://kaspdental.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 23,
        title: "Thirumala Safety Nets",
        description: "Professional safety net installation services for residential and commercial properties.",
        tags: ["WordPress", "Elementor"],
        link: "https://thirumalasafetynets.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 24,
        title: "Klogs Solutions",
        description: "Technology solutions and consulting services for modern businesses.",
        tags: ["WordPress", "Elementor"],
        link: "https://klogsolutions.co.in",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 25,
        title: "Neo Skin Madhapur",
        description: "Advanced dermatology and skin care clinic with modern treatments.",
        tags: ["WordPress", "Elementor"],
        link: "https://neoskinmadhapur.com/",
        github: null,
        status: "live",
        image: null
    },
    {
        id: 26,
        title: "SiriGold",
        description: "Premium gold and jewelry business platform currently in testing phase.",
        tags: ["WordPress", "Elementor"],
        link: null,
        github: null,
        status: "testing",
        image: null
    },
    {
        id: 27,
        title: "Sirivennela",
        description: "Modern website built with Gutenverse page builder, currently under testing.",
        tags: ["WordPress", "Gutenverse"],
        link: null,
        github: null,
        status: "testing",
        image: null
    },
    {
        id: 28,
        title: "RC Fitness",
        description: "Fitness center and gym management platform with class scheduling features.",
        tags: ["WordPress", "Elementor"],
        link: null,
        github: null,
        status: "testing",
        image: null
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-28 px-6 md:px-8 relative overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header - EYE CATCHING */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    {/* Floating badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-semibold mb-8 float"
                    >
                        <Rocket className="w-4 h-4 text-primary" />
                        <span className="gradient-text">Portfolio Showcase</span>
                        <Sparkles className="w-4 h-4 text-accent" />
                    </motion.div>

                    {/* Main heading with glow */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-black mb-6 gradient-text leading-tight"
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        Crafting <span className="text-primary font-bold">digital experiences</span> that make an impact.
                        From enterprise applications to stunning websites.
                    </motion.p>
                </motion.div>

                {/* Stats Bar - IMPRESSIVE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
                >
                    {[
                        { number: "28+", label: "Projects Delivered", icon: Rocket },
                        { number: "20+", label: "Live Websites", icon: Zap },
                        { number: "6+", label: "Mobile Apps", icon: Star },
                        { number: "100%", label: "Happy Clients", icon: Sparkles }
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className="stats-card text-center p-6 md:p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 glass-card"
                        >
                            <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{stat.number}</div>
                            <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Divider */}
                <div className="section-divider mb-16" />

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: Math.min(index * 0.08, 0.4) }}
                            className={`group relative bg-card/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-border/50 flex flex-col magic-card glow-border ${project.featured ? 'md:col-span-1' : ''}`}
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-5 left-5 z-20">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-linear-to-r from-primary to-accent text-white text-xs font-bold shadow-lg shadow-primary/30">
                                        <Star size={12} fill="currentColor" />
                                        FEATURED
                                    </span>
                                </div>
                            )}

                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                {/* Gradient background */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10" />

                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-6">
                                            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl shadow-primary/20">
                                                <ExternalLink className="w-9 h-9 text-primary" />
                                            </div>
                                            <p className="text-base font-semibold text-foreground/70 max-w-[180px] mx-auto line-clamp-2">
                                                {project.title}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Status Badge */}
                                <div className="absolute top-5 right-5">
                                    <span className={`text-xs px-4 py-2 rounded-full font-bold text-white shadow-lg ${project.status === 'live' ? 'status-live' :
                                        project.status === 'testing' ? 'status-testing' :
                                            'status-dev'
                                        }`}>
                                        {project.status === 'live' ? '● LIVE' :
                                            project.status === 'testing' ? '◐ TESTING' : '◌ IN DEV'}
                                    </span>
                                </div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>

                            {/* Content */}
                            <div className="p-7 flex flex-col grow relative z-10">
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:gradient-text transition-all duration-300 line-clamp-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-5 text-sm leading-relaxed grow line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span
                                            key={tag}
                                            className="skill-tag text-xs px-3 py-1.5 rounded-full font-semibold text-foreground/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-xs px-3 py-1.5 text-muted-foreground font-medium">
                                            +{project.tags.length - 3} more
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-linear-to-r from-primary to-primary/80 text-white text-sm font-bold transition-all neon-button"
                                        >
                                            <ExternalLink size={14} />
                                            <span>View Live</span>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground text-sm font-bold hover:bg-secondary/80 transition-all"
                                        >
                                            <Github size={14} />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {!project.link && !project.github && (
                                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground italic font-medium">
                                            {project.status === 'testing' ? '🧪 In Testing' : '� Building...'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* HIRE ME CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-24 relative"
                >
                    <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[40px] blur-3xl" />
                    <div className="relative p-10 md:p-16 rounded-[40px] bg-linear-to-br from-card/95 to-card/80 backdrop-blur-xl border border-primary/20 overflow-hidden glass-card">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

                        <div className="relative text-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, type: "spring" }}
                                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-primary/20 to-accent/20 border border-primary/30 text-sm font-bold mb-6"
                            >
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="gradient-text">Let's Build Something Amazing</span>
                            </motion.div>

                            <h3 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
                                Ready to Hire?
                            </h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                                Looking for a developer who delivers <span className="text-primary font-bold">quality code</span>,
                                <span className="text-accent font-bold"> stunning designs</span>, and
                                <span className="text-primary font-bold"> results that matter</span>? Let's talk!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-linear-to-r from-primary to-accent text-white font-bold text-lg transition-all neon-button group"
                                >
                                    <span>Hire Me Now</span>
                                    <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                                <a
                                    href="/Shiva_Krishna_Resume_updated.pdf"
                                    download="Shiva_Krishna_Resume.pdf"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary/50 text-foreground font-bold text-lg hover:bg-primary/10 hover:border-primary transition-all"
                                >
                                    <span>Download Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
