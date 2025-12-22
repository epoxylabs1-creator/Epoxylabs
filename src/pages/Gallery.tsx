import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

import flakeFloor from '@/assets/flake-floor.jpg';
import metallicFloor from '@/assets/metallic-floor.jpg';
import afterImage from '@/assets/after-1.jpg';
import commercialFloor from '@/assets/commercial-floor.jpg';
import beforeImage from '@/assets/before-1.jpg';
import heroImage from '@/assets/hero-garage.jpg';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'flake', name: 'Flake' },
  { id: 'metallic', name: 'Metallic' },
  { id: 'solid', name: 'Solid Color' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'before-after', name: 'Before/After' },
];

const galleryItems = [
  { id: 1, image: flakeFloor, category: 'flake', title: 'Full Flake — Charcoal Blend', location: ', TX' },
  { id: 2, image: metallicFloor, category: 'metallic', title: 'Metallic — Silver & Blue Swirl', location: 'Round Rock, TX' },
  { id: 3, image: afterImage, category: 'solid', title: 'Solid Gray — High Gloss', location: 'Cedar Park, TX' },
  { id: 4, image: commercialFloor, category: 'commercial', title: 'Commercial — Warehouse Floor', location: 'Georgetown, TX' },
  { id: 5, image: heroImage, category: 'metallic', title: 'Metallic — Blue Designer', location: 'Pflugerville, TX' },
  { id: 6, image: flakeFloor, category: 'flake', title: 'Full Flake — Earth Tones', location: 'Leander, TX' },
  { id: 7, image: beforeImage, category: 'before-after', title: 'Before — Cracked Concrete', location: 'Houston, TX' },
  { id: 8, image: afterImage, category: 'before-after', title: 'After — Flake System', location: 'Houston, TX' },
  { id: 9, image: metallicFloor, category: 'metallic', title: 'Metallic — Copper Pearl', location: 'Lakeway, TX' },
  { id: 10, image: commercialFloor, category: 'commercial', title: 'Commercial — Auto Shop', location: 'Houston, TX' },
  { id: 11, image: afterImage, category: 'solid', title: 'Solid Charcoal — Satin Finish', location: 'Round Rock, TX' },
  { id: 12, image: flakeFloor, category: 'flake', title: 'Full Flake — Cool Gray', location: 'Cedar Park, TX' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-background/70">
              Browse our recent epoxy floor installations across the Houston Metro area. Every floor is unique.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-surface py-6 border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-foreground hover:bg-secondary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-background">
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Get a Quote for Your Style
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Love what you see? Tell us about your project and let us create a custom floor for you.
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
