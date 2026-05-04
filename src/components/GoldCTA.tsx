import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function GoldCTA() {
  return (
    <section className="container mx-auto px-6 py-24">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="relative bg-bev-gold rounded-[2.5rem] p-12 md:p-24 overflow-hidden text-bev-navy"
      >
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-bev-gold-light opacity-50 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] tracking-tight mb-8">
              Ready to <br /> <span className="italic">Transform</span> <br /> Your Flow?
            </h2>
            <p className="text-bev-navy/80 text-lg md:text-xl font-light max-w-sm">
              Schedule a technical consultation with our engineering team today and define your next scale.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <button className="group px-10 py-6 bg-bev-navy text-bev-paper rounded-full font-semibold flex items-center justify-center gap-4 transition-all hover:gap-6">
              Request Technical Audit
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-6 border border-bev-navy/20 rounded-full font-semibold hover:bg-bev-navy/5 transition-all text-center">
              Download Brochure
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
