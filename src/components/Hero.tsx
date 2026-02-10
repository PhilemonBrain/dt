"use client";
import { motion } from 'framer-motion';
import { ArrowDown, Leaf, Radio, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Network grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated glowing orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-farm/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-telecoms/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-energy/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-clo/15 blur-3xl"
        />

        {/* Interconnected nodes visualization */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(158, 64%, 42%)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(192, 91%, 46%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(43, 96%, 56%)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {/* Connecting lines */}
          <motion.line
            x1="20%" y1="30%" x2="50%" y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="80%" y1="25%" x2="50%" y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <motion.line
            x1="75%" y1="70%" x2="50%" y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />
          <motion.line
            x1="25%" y1="75%" x2="50%" y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.1 }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-farm animate-pulse" />
            Innovating Across Four Industries
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="heading-xl text-white mb-6"
        >
          Building Connected
          <br />
          <span className="text-gradient">Futures Together</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8"
        >
          Donatello unites four transformative sectors—Agriculture, Telecommunications, 
          Renewable Energy, and Customer Services—to create synergistic value and lasting impact.
        </motion.p>

        {/* Subsidiary Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-4 md:gap-8 mb-10"
        >
          {[
            { icon: Leaf, color: 'farm', label: 'Farm' },
            { icon: Radio, color: 'telecoms', label: 'Telecoms' },
            { icon: Zap, color: 'energy', label: 'Energy' },
            { icon: Users, color: 'clo', label: 'CLO' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1, type: 'spring' }}
              className="flex flex-col items-center gap-2"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-${item.color}/20 border border-${item.color}/30 flex items-center justify-center backdrop-blur-sm`}>
                <item.icon className={`w-6 h-6 md:w-7 md:h-7 text-${item.color}`} />
              </div>
              <span className="text-xs text-white/60">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8"
          >
            Explore Our Companies
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-black hover:bg-white/10 hover:text-white px-8"
          >
            Partner With Us
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
