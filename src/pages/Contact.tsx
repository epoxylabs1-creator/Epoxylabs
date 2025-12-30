import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '‪(832) 278-1564‬',
    href: 'tel:+15551234567',
    action: 'Call Now',
  },
  {
    icon: MessageCircle,
    title: 'Text',
    value: '(555) 123-4567',
    href: 'sms:+1‪8322781564‬',
    action: 'Text Us',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'TheEpoxyLabs@outlook.com',
    href: 'mailto:TheEpoxyLabs@outlook.com',
    action: 'Send Email',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: 'Mon-Sat: 8am - 6pm',
    href: null,
    action: null,
  },
];

const serviceAreas = [
  'Houston',
  'The Woodlands',
  'Sugar Land',
  'Katy',
  'Cypress',
  'Pearland',
  'League City',
  'Spring',
  'Friendswood',
  'Missouri City',
  'Richmond',
  'Humble',
];

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-foreground text-background section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-primary">The Epoxy Labs</span>
            </h1>
            <p className="text-xl text-background/70">
              Reach out to us by phone, text, or email. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.title}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-semibold text-lg hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="font-semibold text-lg">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="text-primary font-semibold mb-2">⏱ Quick Response</div>
                <p className="text-sm text-muted-foreground">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-surface rounded-xl p-6 shadow-sm h-fit">
              <h3 className="font-bold text-lg mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 bg-background rounded-full text-sm text-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                + other areas in Greater Houston. Not sure? Just ask!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-surface">
        <div className="container-wide py-12">
          <div className="bg-background rounded-xl p-12 text-center shadow-sm">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Service Area Map</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We proudly serve Houston and the surrounding Greater Houston communities. 
              Contact us to confirm service availability in your area.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
