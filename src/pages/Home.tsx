import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Clock, Award, Droplets, Phone, Star, MapPin, ChevronRight, Car, Sparkles, Wrench, Home as HomeIcon } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

import heroImage from '@/assets/hero-garage.jpg';
import beforeImage from '@/assets/before-1.jpg';
import metallicShowroomAfter from '@/assets/metallic-showroom-after.jpg';
import metallicFloor from '@/assets/metallic-floor.jpg';
import flakeFloor from '@/assets/flake-floor.jpg';
import commercialFloor from '@/assets/commercial-floor.jpg';
import afterImage from '@/assets/after-1.jpg';


const benefits = [
  { icon: Sparkles, text: 'Showroom-Grade Finish' },
  { icon: Shield, text: 'Hot Tire & Chemical Resistant' },
  { icon: Award, text: 'Warranty Backed' },
];

const perfectFor = [
  { icon: Car, title: 'Luxury & Exotic Car Garages', description: 'Where your investment deserves protection' },
  { icon: Sparkles, title: 'Car Collectors', description: 'Museum-quality floors for museum-quality cars' },
  { icon: Wrench, title: 'Detailing Bays', description: 'Easy cleanup, zero compromise on aesthetics' },
  { icon: HomeIcon, title: 'High-End Home Builds', description: 'Complete your premium property' },
];

const services = [
  {
    title: 'Metallic Epoxy',
    subtitle: 'Showroom Series',
    description: 'Stunning depth and reflection. Hand-manipulated swirls create a one-of-a-kind floor.',
    image: metallicFloor,
    href: '/catalog?category=metallic',
  },
  {
    title: 'Full Flake',
    subtitle: 'Performance Series',
    description: 'Classic durability with premium aesthetics. Hides imperfections beautifully.',
    image: flakeFloor,
    href: '/catalog?category=flake',
  },
  {
    title: 'Solid Color',
    subtitle: 'Minimal Series',
    description: 'Clean lines, seamless finish. Modern minimalism for discerning tastes.',
    image: afterImage,
    href: '/catalog?category=solid',
  },
  {
    title: 'Commercial',
    subtitle: 'Detail Shop Series',
    description: 'Heavy-duty performance for professional environments.',
    image: commercialFloor,
    href: '/catalog?category=commercial',
  },
];

const luxuryProof = [
  'Showroom-grade metallic depth and reflectivity',
  'Clean edges, clean lines, premium finish quality',
  'Built for hot tires, brake dust, oil, and chemicals',
  'Slip-resistant options without killing the look',
  'Warranty-backed systems with professional installation',
];

const packages = [
  {
    name: 'Essential Flake',
    subtitle: 'Built to Last',
    features: [
      'Diamond-ground surface prep',
      'High-build epoxy basecoat',
      'Full flake broadcast',
      'Clear polyurethane topcoat',
      '5-year warranty',
    ],
    popular: false,
  },
  {
    name: 'Premium Polyaspartic',
    subtitle: 'Fast Cure, UV Stable',
    features: [
      'Diamond-ground surface prep',
      'Polyaspartic basecoat',
      'Full or partial flake broadcast',
      'UV-stable polyaspartic topcoat',
      'Next-day return to service',
      '10-year warranty',
    ],
    popular: true,
  },
  {
    name: 'Metallic Designer',
    subtitle: 'Showroom Finish',
    features: [
      'Diamond-ground surface prep',
      'Custom metallic epoxy application',
      'Hand-manipulated swirl patterns',
      'Crystal-clear topcoat',
      'Truly unique design',
      '10-year warranty',
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: 'Marcus T.',
    location: 'Houston, TX',
    text: 'I have a 911 GT3 and a classic Porsche 356. The metallic floor they installed makes my garage look like a Porsche dealership. Absolutely stunning.',
    rating: 5,
  },
  {
    name: 'Jonathan K.',
    location: 'The Woodlands, TX',
    text: 'Researched epoxy floors for months. EpoxyLabs was the only company that truly understood what a luxury car owner needs. The finish is flawless.',
    rating: 5,
  },
  {
    name: 'Elena R.',
    location: 'Sugar Land, TX',
    text: "My husband's Ferrari collection deserved better than painted concrete. The metallic silver floor reflects the cars beautifully. Worth every penny.",
    rating: 5,
  },
  {
    name: 'William M.',
    location: 'Katy, TX',
    text: 'Detail shop owner here. The durability is unreal. Hot tires, chemicals, brake dust—nothing phases this floor. And it still looks showroom-fresh.',
    rating: 5,
  },
];

const serviceAreas = ['Houston', 'The Woodlands', 'Sugar Land', 'Katy', 'Cypress', 'Pearland', 'League City', 'Spring'];

const trustBadges = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: Award, text: 'Premium Materials Only' },
  { icon: Check, text: 'Warranty Backed' },
  { icon: Droplets, text: 'Chemical Resistant' },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium metallic epoxy garage floor with exotic cars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        </div>
        
        <div className="relative container-wide py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary mb-8 animate-fade-in backdrop-blur-sm border border-primary/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">Premium Garage Flooring</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.1] mb-8 animate-slide-up">
              Your Cars Deserve a{' '}
              <span className="text-gradient">Better Floor</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-background/80 mb-10 leading-relaxed animate-slide-up max-w-2xl" style={{ animationDelay: '0.1s' }}>
              High-gloss metallic epoxy floors built for luxury garages. Stain-resistant. Hot tire resistant. Showroom-grade finish.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="luxury" size="xl" asChild>
                <Link to="/contact">
                  Book a Luxury Garage Consult
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/catalog">
                  View Finished Catalog
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-3 text-background/90">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-foreground py-6 border-y border-primary/20">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-3">
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-background/80 tracking-wide">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Built For Excellence</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Perfect For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perfectFor.map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-foreground">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">The Transformation</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-background">
              See the Difference
            </h2>
            <p className="text-background/60 max-w-2xl mx-auto text-lg">
              Drag the slider to reveal the transformation from ordinary concrete to showroom-grade metallic epoxy.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={afterImage}
              beforeLabel="Before"
              afterLabel="Metallic Epoxy"
              caption="Metallic Epoxy Finish — custom depth, gloss, and a true showroom look."
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/catalog">
                Browse Our Finished Catalog
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Luxury Owners Choose EpoxyLabs */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Luxury Proof</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Why Luxury Owners Choose{' '}
                <span className="text-gradient">EpoxyLabs</span>
              </h2>
              <ul className="space-y-5">
                {luxuryProof.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    Book Your Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={metallicFloor}
                alt="Premium metallic epoxy floor showing depth and reflection"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-foreground text-background p-8 rounded-2xl shadow-xl border border-primary/20">
                <div className="text-4xl font-display font-bold text-primary">500+</div>
                <div className="text-sm text-background/70 tracking-wide">Premium Floors Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Finished Results Link */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Our Collections</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Finished Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Browse our premium finish collections. Each floor is unique, crafted to complement your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border hover:border-primary/30"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">{service.subtitle}</p>
                  <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-semibold tracking-wide">
                    View Collection
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/catalog">
                View Full Catalog
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-foreground">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Investment</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-background">
              Premium Floor Systems
            </h2>
            <p className="text-background/60 max-w-2xl mx-auto text-lg">
              Professional installation with premium materials. Built to protect your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-primary text-primary-foreground scale-105 shadow-xl shadow-primary/30'
                    : 'bg-background/5 border border-background/20 backdrop-blur-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-foreground text-background text-xs font-bold rounded-full tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold mb-1">{pkg.name}</h3>
                <p className={`text-sm mb-8 ${pkg.popular ? 'text-primary-foreground/80' : 'text-background/50'}`}>
                  {pkg.subtitle}
                </p>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 mt-0.5 shrink-0 ${pkg.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className={pkg.popular ? 'text-primary-foreground/90' : 'text-background/70'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? 'dark' : 'default'}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              From Our Clients
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hear from luxury car owners across Central Texas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-surface p-8 rounded-2xl border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Service Area</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Serving Houston's{' '}
              <span className="text-gradient">Premium Communities</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              We install premium epoxy floors throughout Greater Houston, focusing on areas where excellence is expected.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-5 py-2.5 bg-background rounded-full text-sm font-medium text-foreground border border-border"
                >
                  <MapPin className="w-3.5 h-3.5 inline mr-2 text-primary" />
                  {area}
                </span>
              ))}
              <span className="px-5 py-2.5 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                + Surrounding Areas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50" />
        </div>
        <div className="container-wide relative text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6">
            Ready for a Showroom Floor?
          </h2>
          <p className="text-background/70 mb-10 max-w-2xl mx-auto text-xl">
            Book a complimentary consultation and discover the perfect finish for your luxury garage.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="luxury" size="xl" asChild>
              <Link to="/contact">
                Book a Luxury Garage Consult
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+15551234567">
                <Phone className="w-5 h-5" />
                (555) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
