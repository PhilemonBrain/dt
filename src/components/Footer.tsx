import { motion } from 'framer-motion';
import { Leaf, Radio, Zap, Users } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Leadership', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  subsidiaries: [
    { name: 'Donatello Farm', href: '#', icon: Leaf, color: 'text-farm' },
    { name: 'Donatello Telecoms', href: '#', icon: Radio, color: 'text-telecoms' },
    { name: 'Donatello Energy', href: '#', icon: Zap, color: 'text-energy' },
    { name: 'Donatello CLO', href: '#', icon: Users, color: 'text-clo' },
  ],
  resources: [
    { name: 'Investor Relations', href: '#' },
    { name: 'Sustainability Report', href: '#' },
    { name: 'News & Updates', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white/50"
                  />
                  <circle cx="20" cy="8" r="3" className="fill-farm" />
                  <circle cx="32" cy="20" r="3" className="fill-telecoms" />
                  <circle cx="20" cy="32" r="3" className="fill-energy" />
                  <circle cx="8" cy="20" r="3" className="fill-clo" />
                </svg>
              </div>
              <span className="text-xl font-bold">Donatello</span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Building connected futures through strategic investments in agriculture, 
              telecommunications, renewable energy, and customer services.
            </p>
            <div className="flex gap-2">
              {[Leaf, Radio, Zap, Users].map((Icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center"
                >
                  <Icon className="w-4 h-4 text-white/70" />
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries Links */}
          <div>
            <h4 className="font-semibold mb-4">Subsidiaries</h4>
            <ul className="space-y-3">
              {footerLinks.subsidiaries.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
                  >
                    <link.icon className={`w-4 h-4 ${link.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Donatello Holdings. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <span>Innovating Across Industries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
