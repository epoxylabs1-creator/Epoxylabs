import { Link } from 'react-router-dom';
import { ArrowRight, Check, Award, Shield, Users } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

import metallicFloor from '@/assets/metallic-floor.jpg';
import obsidianSwirl from '@/assets/obsidian-swirl.jpg';

const differentiators = [
  {
    icon: Shield,
    title: 'Proper Prep, Every Time',
    description: 'We diamond grind every floor—no shortcuts like acid etching that lead to peeling and failure.',
  },
  {
    icon: Award,
    title: 'Industrial-Grade Materials',
    description: 'We use commercial-quality epoxies and polyaspartics—not watered-down big-box store products.',
  },
  {
    icon: Users,
    title: 'Owner-Operated Quality',
    description: 'As a locally-owned business, our reputation depends on every job. We take pride in our work.',
  },
];

const values = [
  'Honest communication—no upsells, no hidden fees',
  'Clean job sites, every time',
  'On-time arrivals and realistic timelines',
  'Standing behind our work with real warranties',
  'Treating your home with respect',
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">EpoxyLabs</span>
            </h1>
            <p className="text-xl text-background/70">
              We're not just floor coaters—we're craftsmen dedicated to delivering floors that look incredible and last for years.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built on <span className="text-primary">Craftsmanship</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                EpoxyLabs was founded with a simple mission: install garage floors the right way, using professional techniques and materials that actually last.
              </p>
              <p className="text-muted-foreground mb-6">
                We've seen too many homeowners burned by cheap coatings that peel, bubble, or wear through within months. That's why we invest in proper diamond grinding, moisture testing, and commercial-grade products on every single project.
              </p>
              <p className="text-muted-foreground">
                Based in the Houston Metro area, we've installed hundreds of floors for homeowners, car enthusiasts, and local businesses. Every floor is a reflection of our reputation—and we take that seriously.
              </p>
            </div>
            <div>
              <img
                src={obsidianSwirl}
                alt="EpoxyLabs metallic floor installation"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="bg-background rounded-xl p-8 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={metallicFloor}
                alt="EpoxyLabs quality work"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We believe in doing right by our customers. That means:
              </p>
              <ul className="space-y-4">
                {values.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-background/70">Floors Installed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-background/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</div>
              <div className="text-background/70">Star Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-background/70">Satisfaction Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote and see why Houston homeowners trust EpoxyLabs.
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
