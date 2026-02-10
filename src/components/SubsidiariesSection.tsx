"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Radio, Zap, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const subsidiaries = [
  {
    id: 'farm',
    name: 'Donatello Farm',
    icon: Leaf,
    color: 'farm',
    tagline: 'Cultivating Tomorrow',
    description: 'Revolutionizing agriculture through sustainable practices, smart farming technologies, and supply chain innovation to feed communities responsibly.',
    features: ['Smart Irrigation Systems', 'Organic Certification', 'Farm-to-Table Logistics'],
  },
  {
    id: 'telecoms',
    name: 'Donatello Telecoms',
    icon: Radio,
    color: 'telecoms',
    tagline: 'Connecting Every Corner',
    description: 'Building robust telecommunications infrastructure that brings high-speed connectivity to underserved regions and powers the digital economy.',
    features: ['5G Network Expansion', 'Rural Connectivity', 'Enterprise Solutions'],
  },
  {
    id: 'energy',
    name: 'Donatello Energy',
    icon: Zap,
    color: 'energy',
    tagline: 'Powering Sustainable Futures',
    description: 'Developing renewable energy solutions—from solar farms to wind installations—that reduce carbon footprints and ensure energy independence.',
    features: ['Solar Power Plants', 'Wind Energy Projects', 'Energy Storage Systems'],
  },
  {
    id: 'clo',
    name: 'Donatello CLO',
    icon: Users,
    color: 'clo',
    tagline: 'Excellence in Every Interaction',
    description: 'Delivering world-class customer liaison and support services that transform customer experiences and build lasting brand loyalty.',
    features: ['24/7 Support Centers', 'AI-Powered Assistance', 'Customer Success Programs'],
  },
];

const SubsidiaryCard = ({ subsidiary, index }: { subsidiary: typeof subsidiaries[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const colorClasses = {
    farm: {
      bg: 'bg-farm',
      bgMuted: 'bg-farm-muted',
      text: 'text-farm',
      border: 'border-farm/20',
      hoverBorder: 'group-hover:border-farm/50',
    },
    telecoms: {
      bg: 'bg-telecoms',
      bgMuted: 'bg-telecoms-muted',
      text: 'text-telecoms',
      border: 'border-telecoms/20',
      hoverBorder: 'group-hover:border-telecoms/50',
    },
    energy: {
      bg: 'bg-energy',
      bgMuted: 'bg-energy-muted',
      text: 'text-energy',
      border: 'border-energy/20',
      hoverBorder: 'group-hover:border-energy/50',
    },
    clo: {
      bg: 'bg-clo',
      bgMuted: 'bg-clo-muted',
      text: 'text-clo',
      border: 'border-clo/20',
      hoverBorder: 'group-hover:border-clo/50',
    },
  };

  const colors = colorClasses[subsidiary.color as keyof typeof colorClasses];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`group relative p-8 rounded-2xl bg-card border-2 ${colors.border} ${colors.hoverBorder} transition-all duration-300 card-hover`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-8 right-8 h-1 ${colors.bg} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity`} />

      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl ${colors.bgMuted} flex items-center justify-center mb-6`}>
        <subsidiary.icon className={`w-7 h-7 ${colors.text}`} />
      </div>

      {/* Content */}
      <div className="mb-6">
        <p className={`text-sm font-medium ${colors.text} mb-2`}>{subsidiary.tagline}</p>
        <h3 className="text-2xl font-bold text-foreground mb-3">{subsidiary.name}</h3>
        <p className="text-muted-foreground leading-relaxed">{subsidiary.description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {subsidiary.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant="ghost"
        className={`group/btn p-0 h-auto font-medium ${colors.text} hover:bg-transparent`}
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </motion.div>
  );
};

const SubsidiariesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="subsidiaries" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Our Companies
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Four Pillars of Innovation
          </h2>
          <p className="body-lg">
            Each subsidiary operates at the forefront of its industry, united by our 
            commitment to excellence, sustainability, and positive community impact.
          </p>
        </motion.div>

        {/* Subsidiaries Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {subsidiaries.map((subsidiary, index) => (
            <SubsidiaryCard key={subsidiary.id} subsidiary={subsidiary} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
