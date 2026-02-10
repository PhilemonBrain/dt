import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Handshake, Building, Briefcase, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const partnershipTypes = [
  {
    icon: Building,
    title: 'Strategic Investment',
    description: 'Partner with us to invest in high-growth sectors with proven track records.',
    features: [
      'Access to diverse portfolio',
      'Quarterly performance reports',
      'Board advisory opportunities',
      'Co-investment options',
    ],
    cta: 'Explore Investment',
    highlight: false,
  },
  {
    icon: Handshake,
    title: 'Business Partnership',
    description: 'Collaborate with our subsidiaries to expand your reach and capabilities.',
    features: [
      'Joint venture opportunities',
      'Technology partnerships',
      'Distribution agreements',
      'White-label solutions',
    ],
    cta: 'Start Partnership',
    highlight: true,
  },
  {
    icon: Briefcase,
    title: 'Enterprise Solutions',
    description: 'Leverage our multi-sector expertise to transform your business operations.',
    features: [
      'Custom solution design',
      'Implementation support',
      'Ongoing optimization',
      'Dedicated account team',
    ],
    cta: 'Get Solutions',
    highlight: false,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dark" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark)" />
        </svg>
      </div>

      <div className="container-wide relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-white/60 uppercase tracking-widest mb-4">
            Partner With Us
          </span>
          <h2 className="heading-lg mb-6">
            Multiple Ways to Collaborate
          </h2>
          <p className="text-lg text-white/70">
            Whether you're an investor, business partner, or enterprise client, 
            Donatello offers tailored engagement models to meet your goals.
          </p>
        </motion.div>

        {/* Partnership Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                type.highlight
                  ? 'bg-white text-foreground'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20'
              }`}
            >
              {type.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-telecoms text-white text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                type.highlight ? 'bg-primary/10' : 'bg-white/10'
              }`}>
                <type.icon className={`w-6 h-6 ${type.highlight ? 'text-primary' : 'text-white'}`} />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 ${type.highlight ? 'text-foreground' : 'text-white'}`}>
                {type.title}
              </h3>
              <p className={`text-sm mb-6 ${type.highlight ? 'text-muted-foreground' : 'text-white/70'}`}>
                {type.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      type.highlight ? 'text-farm' : 'text-farm'
                    }`} />
                    <span className={`text-sm ${type.highlight ? 'text-foreground' : 'text-white/90'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full group ${
                  type.highlight
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-white text-primary hover:bg-white/90'
                }`}
              >
                {type.cta}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
