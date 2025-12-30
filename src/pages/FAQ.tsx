import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does installation take?',
    answer: 'Most residential garages are completed in 1-2 days. Polyaspartic systems cure faster and can often be installed in a single day with next-day use. Larger commercial projects may take 3-5 days depending on size and complexity.',
  },
  {
    question: 'How long before I can walk on it or park my car?',
    answer: 'With polyaspartic systems, you can typically walk on the floor within 4-6 hours and park vehicles in 24-48 hours. Traditional epoxy systems require 24 hours for light foot traffic and 3-7 days for vehicle traffic. We\'ll give you specific timelines based on your chosen system.',
  },
  {
    question: 'Will the coating peel or come up?',
    answer: 'When properly prepared and applied, quality epoxy and polyaspartic coatings do not peel. The key is proper surface prep (diamond grinding, not acid etching) and addressing any moisture issues before application. That\'s why we never cut corners on prep work.',
  },
  {
    question: 'Is epoxy flooring slippery when wet?',
    answer: 'A smooth epoxy floor can be slippery when wet. That\'s why we offer anti-slip additives that can be incorporated into the topcoat. Flake systems also provide natural texture and traction. We\'ll discuss the best options for your specific use case.',
  },
  {
    question: 'What\'s the difference between epoxy and polyaspartic?',
    answer: 'Both are durable floor coatings, but polyaspartic offers some advantages: faster cure times (same-day or next-day use), better UV stability (won\'t yellow), and can be applied in a wider temperature range. Polyaspartic typically costs more but offers convenience and longevity benefits.',
  },
  {
    question: 'Do you repair cracks before coating?',
    answer: 'Yes, crack repair is included in our standard prep work. We fill and repair cracks, chips, and spalling before applying any coating. For significant structural cracks, we\'ll discuss options during the estimate.',
  },
  {
    question: 'How do I clean and maintain my epoxy floor?',
    answer: 'Epoxy floors are very easy to maintain. Regular sweeping or dust mopping, occasional mopping with mild soap and water, and that\'s about it. Avoid harsh chemicals and abrasive cleaners. We provide detailed care instructions with every installation.',
  },
  {
    question: 'Do you offer a warranty?',
    answer: 'Yes, all our floor systems come with a warranty. The Essential Flake system includes a 5-year warranty, while our Premium Polyaspartic and Metallic systems include a 10-year warranty. Warranty covers peeling, delamination, and manufacturing defects.',
  },
  {
    question: 'What affects the cost of an epoxy floor?',
    answer: 'Several factors influence cost: the size of the area, condition of the existing concrete (more repairs = more prep work), the system chosen (flake vs. metallic vs. polyaspartic), and any special requirements like extra topcoat thickness or custom colors. We provide detailed, transparent quotes.',
  },
  {
    question: 'Can you coat a floor with existing paint or coating?',
    answer: 'It depends on the condition. If the existing coating is in poor shape (peeling, flaking), it will need to be removed. If it\'s well-adhered, we may be able to prep and coat over it. We assess this during the estimate and provide honest recommendations.',
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-background/70">
              Got questions about epoxy floors? We've got answers. If you don't see your question here, just give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-surface rounded-xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-surface">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're happy to help. Give us a call or send a message and we'll get back to you quickly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+1‪8322781564‬">Call ‪(832) 278-1564‬</a>
            </Button>
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
