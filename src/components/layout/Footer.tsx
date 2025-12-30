import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Our Process', href: '/process' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const serviceAreas = [
  'Houston',
  'The Woodlands',
  'Sugar Land',
  'Katy',
  'Cypress',
  'Pearland',
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-background">
                Epoxy<span className="text-primary">Labs</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Premium epoxy and polyaspartic garage floor installations. 
              Industrial-grade coatings with warranty protection.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-background/70 text-sm">
                  {area}, TX
                </li>
              ))}
              <li className="text-primary text-sm font-medium">
                + Surrounding Areas
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+1‪8322781564‬" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  ‪(832) 278-1564‬
                </a>
              </li>
              <li>
                <a href="mailto:TheEpoxyLabs@outlook.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  TheEpoxyLabs@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Serving the Greater Houston Metro Area, TX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} EpoxyLabs. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/50">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Warranty Backed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
