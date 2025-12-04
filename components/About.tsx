'use client';

import { motion } from 'framer-motion';
import { Code2, Globe, Server, Smartphone, Rocket, Heart, Coffee, Users, TrendingUp } from 'lucide-react';

const highlights = [
    {
        icon: Code2,
        title: "React & MERN Expert",
        description: "Modern JavaScript, React, Next.js for stunning, performant web applications"
    },
    {
        icon: Globe,
        title: "WordPress Specialist",
        description: "14+ professional WordPress sites with Elementor, custom themes & optimizations"
    },
    {
        icon: Smartphone,
        title: "Mobile Developer",
        description: "Cross-platform mobile apps with React Native for iOS and Android"
    },
    {
        icon: Server,
        title: "Full Stack",
        description: "Node.js, Express, PostgreSQL - complete backend solutions with Prisma ORM"
    }
];

const stats = [
    { icon: Rocket, number: "28+", label: "Projects" },
    { icon: Globe, number: "14+", label: "WordPress Sites" },
    { icon: Users, number: "15+", label: "Clients" },
    { icon: TrendingUp, number: "3+", label: "Years" }
];

export default function About() {
    return (
        <section id="about" className="py-28 px-6 md:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
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
                        className="inline-block px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
                    >
                        About Me
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
                        Passionate Developer
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        A dedicated Full Stack Developer with <span className="text-primary font-semibold">3+ years</span> of experience
                        building web applications and WordPress websites that solve real-world problems.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="glass-card rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-4 text-foreground">My Journey</h3>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Hi, I'm <span className="text-primary font-semibold">Shiva Krishna</span>, a Full Stack Developer
                                    with around <span className="text-accent font-semibold">3 years of hands-on experience</span> in
                                    building web applications and websites. I specialize in modern JavaScript, React ecosystem,
                                    WordPress development, and the MERN stack.
                                </p>
                                <p>
                                    My professional journey began as an <span className="text-primary font-medium">intern</span>,
                                    where I quickly proved myself and secured a position as <span className="text-primary font-medium">Jr. Web Developer</span>.
                                    Through dedication and continuous learning, I've grown into a <span className="text-accent font-semibold">Full Stack Developer</span> role.
                                </p>
                                <p>
                                    Over these 3 years, I've built numerous client projects and in-house applications.
                                    My focus has been on crafting <span className="text-primary font-medium">pixel-perfect UIs</span>,
                                    <span className="text-accent font-medium"> code optimization</span>, and
                                    <span className="text-primary font-medium"> responsive design</span>. I'm also constantly
                                    working on improving my problem-solving skills to become a better developer every day.
                                </p>
                                <p>
                                    I work with <span className="text-accent font-medium">Figma designs</span> — taking designs and
                                    bringing them to life with clean, maintainable code. I can also make quick adjustments
                                    like color changes and image updates to match client requirements perfectly.
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-4 gap-3">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="stats-card text-center p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50"
                                >
                                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                                    <div className="text-2xl font-black gradient-text">{stat.number}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - What I Do */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="magic-card glow-border p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-foreground">{item.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex flex-wrap justify-center gap-4 px-8 py-6 rounded-3xl bg-gradient-to-r from-primary/5 via-card to-accent/5 border border-border/50">
                        {['UI/UX Focus', 'Code Optimization', 'Responsive Design', 'Problem Solving', 'Team Player'].map((value, i) => (
                            <motion.span
                                key={value}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="skill-tag px-5 py-2 rounded-full text-sm font-semibold"
                            >
                                {value}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
