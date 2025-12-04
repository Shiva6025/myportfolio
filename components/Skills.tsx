'use client';

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Palette, Server, Terminal, Wrench } from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend",
        icon: Globe,
        skills: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion"]
    },
    {
        title: "Backend",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST APIs", "Prisma", "Authentication", "MERN Stack"]
    },
    {
        title: "Mobile",
        icon: Smartphone,
        skills: ["React Native", "Expo", "iOS", "Android", "Mobile UI/UX", "Cross-Platform"]
    },
    {
        title: "Database",
        icon: Database,
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"]
    },
    {
        title: "WordPress",
        icon: Palette,
        skills: ["Elementor", "Theme Customization", "Gutenverse", "Custom Plugins", "WooCommerce", "SEO"]
    },
    {
        title: "Tools & Design",
        icon: Wrench,
        skills: ["Git", "GitHub", "VS Code", "Postman", "Figma (Design to Code)"]
    }
];

const allTechnologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "React Native",
    "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB",
    "Prisma", "Tailwind CSS", "Mantine", "shadcn/ui", "Framer Motion",
    "Git", "WordPress", "Elementor", "Figma", "MERN Stack"
];

export default function Skills() {
    return (
        <section id="skills" className="py-28 px-6 md:px-8 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
                    >
                        <Code size={16} />
                        <span>Tech Stack</span>
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Technologies I've mastered over my <span className="text-primary font-semibold">3+ years</span> of
                        building web applications and WordPress websites
                    </p>
                </motion.div>

                {/* Skill Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="magic-card glow-border p-6 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                    <category.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="skill-tag px-3 py-1.5 rounded-lg text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* All Technologies Cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-xl font-bold mb-6 text-foreground flex items-center justify-center gap-2">
                        <Terminal size={20} className="text-primary" />
                        All Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {allTechnologies.map((tech, i) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: Math.min(i * 0.03, 0.5) }}
                                whileHover={{ scale: 1.1 }}
                                className="skill-tag px-4 py-2 rounded-full text-sm font-semibold cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-card/50 to-accent/5 border border-border/50"
                >
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-4xl font-black gradient-text mb-2">3+</div>
                            <div className="text-muted-foreground">Years of Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black gradient-text mb-2">20+</div>
                            <div className="text-muted-foreground">Technologies Mastered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black gradient-text mb-2">∞</div>
                            <div className="text-muted-foreground">Willingness to Learn</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
