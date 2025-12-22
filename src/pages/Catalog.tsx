import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Layers, Palette, Building2, Check, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

import metallicFloor from '@/assets/metallic-floor.jpg';
import metallicShowroom from '@/assets/metallic-showroom-after.jpg';
import flakeFloor from '@/assets/flake-floor.jpg';
import commercialFloor from '@/assets/commercial-floor.jpg';
import obsidianSwirl from '@/assets/obsidian-swirl.jpg'; 

const categories = [
  { id: 'all', name: 'All Finishes', icon: Sparkles },
  { id: 'metallic', name: 'Metallic (Showroom)', icon: Sparkles },
  { id: 'flake', name: 'Full Flake (Performance)', icon: Layers },
  { id: 'solid', name: 'Solid Color (Minimal)', icon: Palette },
  { id: 'commercial', name: 'Commercial / Detail Shop', icon: Building2 },
];

const catalogItems = [
  {
    id: 1,
    name: 'Midnight Metallic',
    category: 'metallic',
    images: [metallicShowroom, metallicFloor],
    glossLevel: 'High Gloss',
    texture: 'Standard',
    bestFor: ['Collectors', 'Showrooms'],
    description: 'Deep black base with silver/white metallic swirls creating dramatic depth and reflection.',
  },
  {
    id: 2,
    name: 'Storm Silver',
    category: 'metallic',
    images: [metallicFloor, metallicShowroom],
    glossLevel: 'High Gloss',
    texture: 'Standard',
    bestFor: ['Luxury Garages', 'Modern Homes'],
    description: 'Silvery-grey metallic waves with subtle pearl undertones.',
  },
  {
    id: 3,
    name: 'Obsidian Swirl',
    category: 'metallic',
    images: [obsidianSwirl, obsidianSwirl],
    glossLevel: 'High Gloss',
    texture: 'Anti-slip Available',
    bestFor: ['Exotic Cars', 'Detail Bays'],
    description: 'Black and charcoal metallics with dramatic movement patterns.',
  },
  {
    id: 4,
    name: 'Graphite Flake',
    category: 'flake',
    images: [flakeFloor, commercialFloor],
    glossLevel: 'Satin',
    texture: 'Textured',
    bestFor: ['Daily Parking', 'Workshops'],
    description: 'Classic grey flake blend with excellent durability and stain hiding.',
  },
  {
    id: 5,
    name: 'Titanium Blend',
    category: 'flake',
    images: [flakeFloor],
    glossLevel: 'High Gloss',
    texture: 'Standard',
    bestFor: ['Performance Garages', 'Home Gyms'],
    description: 'Premium grey and silver flake combination with metallic accents.',
  },
  {
    id: 6,
    name: 'Pure Charcoal',
    category: 'solid',
    images: [commercialFloor],
    glossLevel: 'High Gloss',
    texture: 'Standard',
    bestFor: ['Minimalists', 'Modern Builds'],
    description: 'Seamless dark grey finish for clean, contemporary spaces.',
  },
  {
    id: 7,
    name: 'Industrial Grey',
    category: 'commercial',
    images: [commercialFloor, flakeFloor],
    glossLevel: 'Satin',
    texture: 'Anti-slip',
    bestFor: ['Detail Shops', 'Auto Bays'],
    description: 'Heavy-duty coating built for professional environments.',
  },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof catalogItems[0] | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? catalogItems 
    : catalogItems.filter(item => item.category === activeCategory);

  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background section-padding no-print">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Lookbook</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Finished Results Catalog
            </h1>
            <p className="text-xl text-background/70 mb-8">
              Browse our premium finish collections. Each floor is hand-crafted and one-of-a-kind.
            </p>
            <Button variant="heroOutline" onClick={handlePrint}>
              <Download className="w-5 h-5" />
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-surface py-6 border-b border-border sticky top-16 md:top-20 z-40 no-print">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-background text-foreground hover:bg-primary/10 border border-border'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="catalog-card group bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
                    {categories.find(c => c.id === item.category)?.name}
                  </p>
                  <h3 className="font-display text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-background rounded-full text-xs font-medium">{item.glossLevel}</span>
                    <span className="px-3 py-1 bg-background rounded-full text-xs font-medium">{item.texture}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      Best for: {item.bestFor.join(', ')}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">
                      Get This Look
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm no-print" onClick={() => setSelectedItem(null)}>
          <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative aspect-video">
              <img src={selectedItem.images[0]} alt={selectedItem.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
                {categories.find(c => c.id === selectedItem.category)?.name}
              </p>
              <h2 className="font-display text-3xl font-bold mb-4">{selectedItem.name}</h2>
              <p className="text-muted-foreground mb-6">{selectedItem.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-surface rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">Gloss Level</p>
                  <p className="font-semibold">{selectedItem.glossLevel}</p>
                </div>
                <div className="p-4 bg-surface rounded-xl">
                  <p className="text-xs text-muted-foreground mb-1">Texture</p>
                  <p className="font-semibold">{selectedItem.texture}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Best For:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.bestFor.map(item => (
                    <span key={item} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      <Check className="w-4 h-4 inline mr-1" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="luxury" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Get This Look
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-foreground no-print">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to Transform Your Garage?
          </h2>
          <p className="text-background/70 mb-8 max-w-2xl mx-auto">
            Book a consultation and we'll help you choose the perfect finish for your space.
          </p>
          <Button variant="luxury" size="xl" asChild>
            <Link to="/contact">
              Book a Luxury Garage Consult
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
