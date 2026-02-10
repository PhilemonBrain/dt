"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, TrendingUp, Globe, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Strategic Vision',
    description: 'Investing in sectors that shape the future of communities and economies.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    description: 'Building businesses that deliver long-term value for all stakeholders.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Creating solutions that transcend borders and transform industries.',
  },
  {
    icon: Heart,
    title: 'People First',
    description: 'Putting communities and customers at the heart of everything we do.',
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 network-bg opacity-50" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium text-telecoms uppercase tracking-widest mb-4">
              Our Vision
            </span>
            <h2 className="heading-lg text-foreground mb-6">
              United in Purpose,
              <br />
              <span className="text-muted-foreground">Diverse in Impact</span>
            </h2>
            <p className="body-lg mb-6">
              At Donatello, we believe that true innovation emerges at the intersection of 
              diverse industries. By strategically investing in agriculture, telecommunications, 
              renewable energy, and customer services, we create a powerful ecosystem where 
              each sector strengthens the others.
            </p>
            <p className="body-md">
              Our approach isn't just about financial returns—it's about building infrastructure 
              that empowers communities, connects people, sustains our planet, and delivers 
              exceptional experiences. Together, our subsidiaries form a network of innovation 
              that drives progress across multiple fronts.
            </p>
          </motion.div>

          {/* Right: Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-border"
        >
          {[
            { number: '4', label: 'Industry Sectors' },
            { number: '12+', label: 'Years of Excellence' },
            { number: '50K+', label: 'Customers Served' },
            { number: '15', label: 'Countries Reached' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: 'spring' }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
