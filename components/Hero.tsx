'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Sparkles, MapPin, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0891b208_1px,transparent_1px),linear-gradient(to_bottom,#0891b208_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#22d3ee08_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee08_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8 float"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-foreground">Available for opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="gradient-text">Shiva Krishna</span>
          </h1>
        </motion.div>

        {/* Role & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground/90 mb-4">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I craft <span className="text-primary font-semibold">beautiful web experiences</span> and
            <span className="text-accent font-semibold"> robust applications</span> that make a difference.
            <br />
            <span className="text-base">3+ years of turning ideas into reality.</span>
          </p>
        </motion.div>

        {/* Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-sm">
            <MapPin size={16} className="text-primary" />
            <span>India</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-sm">
            <Briefcase size={16} className="text-primary" />
            <span>3+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 text-sm">
            <Sparkles size={16} className="text-accent" />
            <span>28+ Projects Delivered</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl font-bold text-lg transition-all neon-button"
          >
            <Mail size={20} />
            <span>Hire Me</span>
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-card border-2 border-primary/30 hover:border-primary text-foreground rounded-2xl font-bold text-lg transition-all hover:bg-primary/5"
          >
            <span>View Projects</span>
            <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="/Shiva_Krishna_Resume_updated.pdf"
            download="Shiva_Krishna_Resume.pdf"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl font-bold text-lg transition-all neon-button"
            style={{ boxShadow: '0 0 15px rgba(245, 158, 11, 0.35)' }}
          >
            <Download size={20} />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Tech I love working with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Next.js', 'Node.js', 'React Native', 'PostgreSQL'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="skill-tag px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
