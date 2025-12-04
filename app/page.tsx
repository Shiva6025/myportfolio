import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';
import CustomCursor from '@/components/CustomCursor';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <CustomCursor />

      {/* Navigation - with Theme Toggle inside */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-black gradient-text">SK.</a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-black gradient-text mb-4">Shiva Krishna</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full Stack Developer crafting beautiful digital experiences with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-3">
                <a href="https://github.com/Shiva6025" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/shiva-krishna-anamala-26237717a/" target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shiva Krishna. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> on Development
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
