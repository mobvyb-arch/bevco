import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Send } from 'lucide-react';

const FAQS = [
  { q: "What is your typical lead time for custom production lines?", a: "Depending on complexity, custom solutions typically ship within 12-16 weeks including initial site assessment and logic programming." },
  { q: "Do you offer international onsite support?", a: "Yes, our engineering teams are located globally. We provide 24/7 remote diagnostics and 48-hour onsite response guarantees." },
  { q: "Is Bevco equipment compatible with standard IoT platforms?", a: "Our proprietary FlowAware OS integrates with majority MQTT, OPC-UA, and REST API based monitoring platforms." }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="contact" className="py-24 bg-bev-paper border-t border-bev-navy/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/2">
            <span className="text-bev-gold font-semibold uppercase tracking-[0.2em] text-xs">Technical Support</span>
            <h2 className="text-5xl font-serif text-bev-navy mt-4 mb-12">Let&apos;s Connect</h2>
            
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-bev-navy/10 pb-6">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-lg font-serif text-bev-navy group-hover:text-bev-gold transition-colors">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-bev-navy/50 text-sm leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-12 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.03)]">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-bev-navy/40">Full Name</label>
                  <input type="text" className="w-full bg-bev-paper/50 rounded-xl px-6 py-4 outline-none border border-transparent focus:border-bev-gold/30 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-bev-navy/40">Company</label>
                  <input type="text" className="w-full bg-bev-paper/50 rounded-xl px-6 py-4 outline-none border border-transparent focus:border-bev-gold/30 transition-all" placeholder="Distillery Inc" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-bev-navy/40">Email Address</label>
                <input type="email" className="w-full bg-bev-paper/50 rounded-xl px-6 py-4 outline-none border border-transparent focus:border-bev-gold/30 transition-all" placeholder="contact@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-bev-navy/40">Technical Inquiry</label>
                <textarea rows={4} className="w-full bg-bev-paper/50 rounded-xl px-6 py-4 outline-none border border-transparent focus:border-bev-gold/30 transition-all" placeholder="Tell us about your production goals..." />
              </div>
              <button className="w-full flex items-center justify-center gap-3 bg-bev-navy text-bev-paper py-5 rounded-full font-semibold hover:bg-bev-gold hover:text-bev-navy transition-all">
                Send Inquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
