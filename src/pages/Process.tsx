import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, Hammer, Droplets, Layers, Sparkles, Shield, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Free Estimate & Consultation',
    description: 'We visit your space, assess the concrete condition, discuss your goals, and provide a detailed quote with options.',
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Surface Preparation',
    description: 'Professional diamond grinding creates the ideal surface profile for coating adhesion. No shortcuts—no acid etching.',
  },
  {
    number: '03',
    icon: Droplets,
    title: 'Repairs & Moisture Check',
    description: 'Cracks are filled, spalling is repaired, and we conduct moisture testing to ensure the slab is ready for coating.',
  },
  {
    number: '04',
    icon: Layers,
    title: 'Basecoat Application',
    description: 'High-quality epoxy or polyaspartic basecoat is rolled on, providing the foundation for your new floor.',
  },
  {
    number: '05',
    icon: Sparkles,
    title: 'Flake, Metallic, or Solid Finish',
    description: 'Your chosen finish is applied—whether full flake broadcast, hand-manipulated metallic, or smooth solid color.',
  },
  {
    number: '06',
    icon: Shield,
    title: 'Protective Topcoat',
    description: 'A clear polyaspartic or polyurethane topcoat seals everything in, providing UV protection and durability.',
  },
  {
    number: '07',
    icon: CheckCircle,
    title: 'Final Walkthrough',
    description: 'We do a detailed walkthrough with you, explain care instructions, and make sure you\'re completely satisfied.',
  },
];

const timeline = [
  { title: 'Single-Car Garage', time: '1 day' },
  { title: '2-3 Car Garage', time: '1-2 days' },
  { title: 'Large Commercial', time: '2-5 days' },
  { title: 'Return to Light Use', time: '24-48 hours' },
  { title: 'Full Vehicle Traffic', time: '3-7 days' },
];

const expectations = [
  'We move small items but ask that you clear the space as much as possible beforehand',
  'Some dust is generated during grinding—we use vacuums and containment',
  'Fumes are minimal but ventilation is recommended during application',
  'Temperature requirements: typically 50°F+ for proper curing',
  'We leave your job site clean and debris-free',
];

export default function Process() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Process</span>
            </h1>
            <p className="text-xl text-background/70">
              From first consultation to final walkthrough, here's how we transform your concrete into a showroom-quality floor.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-[calc(100%-4rem)] bg-border" />
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="pt-3">
                    <div className="text-sm text-primary font-semibold mb-1">Step {step.number}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Expectations */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Typical Timeline</h2>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="space-y-4">
                  {timeline.map((item) => (
                    <div key={item.title} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-primary font-semibold">{item.time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Timelines vary based on system chosen, temperature, and project complexity.
                </p>
              </div>
            </div>

            {/* Expectations */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <ul className="space-y-4">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule your free estimate and let's discuss the best solution for your floor.
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