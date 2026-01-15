"use client"

export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Donatello</h3>
            <p className="text-foreground/60 text-sm">Connecting worlds. Powering futures.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Divisions</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#telecom" className="hover:text-foreground transition">
                  Telecom
                </a>
              </li>
              <li>
                <a href="#energy" className="hover:text-foreground transition">
                  Energy
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-foreground transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#farms" className="hover:text-foreground transition">
                  Farms
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="mailto:hello@donatello.io" className="hover:text-foreground transition">
                  info@donatello.io
                </a>
              </li>
              <li className="text-foreground/40">+234 (706) 950-1730</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50">
          <p>&copy; 2026 Donatello Infrastructure. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
