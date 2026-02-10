"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Tractor, 
  Building2, 
  Home, 
  Factory, 
  Users, 
  ShoppingBag,
  Leaf,
  Radio,
  Zap,
  HeadphonesIcon
} from 'lucide-react';

const audiences = [
  {
    icon: Tractor,
    title: 'Agricultural Businesses',
    description: 'Modern farming solutions and sustainable practices',
    subsidiaries: [{ icon: Leaf, color: 'farm' }],
  },
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Connectivity, energy, and customer support solutions',
    subsidiaries: [
      { icon: Radio, color: 'telecoms' },
      { icon: Zap, color: 'energy' },
      { icon: HeadphonesIcon, color: 'clo' },
    ],
  },
  {
    icon: Home,
    title: 'Rural Communities',
    description: 'Bridging the digital divide with essential services',
    subsidiaries: [
      { icon: Radio, color: 'telecoms' },
      { icon: Zap, color: 'energy' },
    ],
  },
  {
    icon: Factory,
    title: 'Industrial Partners',
    description: 'Supply chain and renewable energy partnerships',
    subsidiaries: [
      { icon: Leaf, color: 'farm' },
      { icon: Zap, color: 'energy' },
    ],
  },
  {
    icon: Users,
    title: 'Government & NGOs',
    description: 'Infrastructure development and community programs',
    subsidiaries: [
      { icon: Radio, color: 'telecoms' },
      { icon: Zap, color: 'energy' },
      { icon: Leaf, color: 'farm' },
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Brands',
    description: 'Customer experience and liaison services',
    subsidiaries: [{ icon: HeadphonesIcon, color: 'clo' }],
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solutions" className="section-padding bg-background" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-energy uppercase tracking-widest mb-4">
            Who We Serve
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Solutions for Every Need
          </h2>
          <p className="body-lg">
            Our diverse portfolio allows us to serve a wide range of clients and communities, 
            delivering integrated solutions that create real value.
          </p>
        </motion.div>

        {/* Audiences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 card-hover"
            >
              {/* Main Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{audience.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{audience.description}</p>

              {/* Subsidiary Icons */}
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground mr-2">Powered by:</span>
                {audience.subsidiaries.map((sub, i) => {
                  const colorClass = `text-${sub.color}`;
                  const bgClass = `bg-${sub.color}/10`;
                  return (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-lg ${bgClass} flex items-center justify-center`}
                    >
                      <sub.icon className={`w-4 h-4 ${colorClass}`} />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
