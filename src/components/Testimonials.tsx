import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const REVIEWS = [
  {
    author: "Elena Rossi",
    role: "Plant Manager, Tuscany Estates",
    text: "Bevco's filtration systems changed everything for us. We've seen a 30% increase in consistency while cutting waste in half."
  },
  {
    author: "Marcus Thorne",
    role: "CEO, Thorne Brew Co",
    text: "The precision engineering is unlike anything else on the market. It's a partner that understands the soul of the drink."
  },
  {
    author: "Sarah Jenkins",
    role: "Operations, PureFlow Intl",
    text: "Scaling from a local distributor to international supply was only possible with Bevco's modular bottling solutions."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-bev-gold mx-auto mb-6 opacity-30" />
          <h2 className="text-4xl md:text-5xl font-serif text-bev-navy">Client Voices</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-bev-paper/30 rounded-3xl relative"
            >
              <p className="text-bev-navy/70 italic leading-relaxed mb-8">
                &quot;{review.text}&quot;
              </p>
              <div>
                <h4 className="font-serif text-lg text-bev-navy">{review.author}</h4>
                <p className="text-[10px] uppercase tracking-widest text-bev-gold font-bold mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
