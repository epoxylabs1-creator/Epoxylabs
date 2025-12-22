import { Link } from 'react-router-dom';
import { Check, ArrowRight, Shield, Droplets, Wrench, Layers, Sparkles, Building2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

import flakeFloor from '@/assets/flake-floor.jpg';
import metallicFloor from '@/assets/metallic-floor.jpg';
import afterImage from '@/assets/after-1.jpg';
import commercialFloor from '@/assets/commercial-floor.jpg';

const services = [
  {
    id: 'garage',
    title: 'Epoxy Garage Floors',
    subtitle: 'Our Most Popular System',
    icon: Layers,
    image: flakeFloor,
    description: 'Transform your garage into a showroom with our durable flake epoxy systems. Available in dozens of color combinations to match your style.',
    features: [
      'Full flake broadcast for complete coverage',
      'Hot-tire resistant topcoat options',
      'Anti-slip additives available',
      'Hides minor imperfections',
      'Easy to clean and maintain',
    ],
    idealFor: ['Daily parking', 'Home gyms', 'Workshops', 'Man caves'],
  },
  {
    id: 'metallic',
    title: 'Decorative Metallic Epoxy',
    subtitle: 'One-of-a-Kind Designs',
    icon: Sparkles,
    image: metallicFloor,
    description: 'Create a truly unique floor with stunning metallic swirls and patterns. Each installation is hand-manipulated for a custom look.',
    features: [
      'Unique, unrepeatable patterns',
      'High-gloss, reflective finish',
      'Seamless, easy-to-clean surface',
      'Available in silver, gold, copper, blue & more',
      'Crystal-clear protective topcoat',
    ],
    idealFor: ['Man caves', 'Showrooms', 'Basements', 'Retail spaces', 'Lounges'],
  },
  {
    id: 'solid',
    title: 'Solid Color Epoxy',
    subtitle: 'Clean & Minimal',
    icon: Shield,
    image: afterImage,
    description: 'A clean, professional look with solid color application. Perfect for spaces where simplicity and function are the priority.',
    features: [
      'Uniform, seamless finish',
      'Wide range of colors available',
      'Chemical and stain resistant',
      'Easy to touch up if needed',
      'Cost-effective solution',
    ],
    idealFor: ['Utility spaces', 'Storage areas', 'Small shops', 'Laundry rooms'],
  },
  {
    id: 'commercial',
    title: 'Commercial & Shop Floors',
    subtitle: 'Heavy-Duty Performance',
    icon: Building2,
    image: commercialFloor,
    description: 'Industrial-grade coatings designed for high-traffic commercial environments. Built to withstand forklifts, chemicals, and constant use.',
    features: [
      'Extra-thick mil build for durability',
      'Chemical resistance options',
      'Safety striping and demarcation',
      'Fast-cure systems to minimize downtime',
      'Anti-static options available',
    ],
    idealFor: ['Warehouses', 'Auto shops', 'Retail backrooms', 'Manufacturing'],
  },
  {
    id: 'repair',
    title: 'Concrete Repair & Moisture Mitigation',
    subtitle: 'Proper Prep for Lasting Results',
    icon: Wrench,
    image: afterImage,
    description: 'Before any coating is applied, we address underlying issues. Crack repair and moisture barriers ensure your new floor lasts.',
    features: [
      'Professional crack repair and filling',
      'Spalling and pitting correction',
      'Moisture testing on every project',
      'Vapor barrier application when needed',
      'Surface profiling with diamond grinding',
    ],
    idealFor: ['Older concrete', 'Slabs with cracks', 'Basements', 'Areas with moisture concerns'],
  },
];

const faqs = [
  {
    q: 'How long does installation take?',
    a: 'Most residential garages are completed in 1-2 days depending on the system chosen. Polyaspartic systems cure faster and allow next-day use.',
  },
  {
    q: 'Do you work on new construction?',
    a: 'Yes! We work with builders and homeowners on new construction projects. New concrete should cure for at least 28 days before coating.',
  },
  {
    q: 'What sizes of projects do you handle?',
    a: 'From single-car garages to large commercial warehouses. We tailor our approach to each project\'s specific needs.',
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Epoxy Floor <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-background/70 mb-8">
              Choose the finish that fits your space and budget. From classic flake to stunning metallic, we install floors that last.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
                    <service.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{service.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Ideal For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-surface rounded-full text-sm text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button asChild>
                    <Link to="/contact">
                      Get a Quote for This
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover rounded-xl shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-background rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your garage, basement, or commercial floor.
          </p>
          <Button variant="dark" size="xl" asChild>
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}