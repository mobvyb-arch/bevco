import { motion } from 'motion/react';
import { ShieldCheck, Zap, Globe2, Settings2 } from 'lucide-react';

const FEATURES = [
  {
    title: "Precision Craft",
    desc: "Achieve industrial-scale efficiency without compromising the delicate flavor profiles of your finest recipes.",
    icon: Settings2
  },
  {
    title: "Global Integration",
    desc: "Seamless connectivity across your entire production line with 24/7 remote monitoring and predictive maintenance.",
    icon: Globe2
  },
  {
    title: "Smart Flow",
    desc: "Automated real-time flow control systems that reduce waste by 18% while increasing output velocity.",
    icon: Zap
  },
  {
    title: "Eco Integrity",
    desc: "Sustainable engineering practices that minimize energy consumption and water waste in high-volume environments.",
    icon: ShieldCheck
  }
];

export default function Features() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="text-bev-gold font-semibold uppercase tracking-[0.2em] text-xs">Our Advantage</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-bev-navy leading-tight">
              Scaling Tomorrow&apos;s <br /> 
              <span className="italic">Beverage Icons.</span>
            </h2>
            <p className="mt-8 text-bev-navy/60 leading-relaxed max-w-md">
              We don&apos;t just build machines; we engineer growth. Our solutions are designed to adapt as your brand grows from a local favorite to a global standard.
            </p>
            <div className="mt-12 p-8 border border-bev-navy/5 rounded-2xl bg-bev-paper/30">
              <div className="text-4xl font-serif text-bev-gold">99.9%</div>
              <div className="text-xs uppercase tracking-widest mt-2 text-bev-navy/40 font-bold">Standard Uptime Guarantee</div>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-2xl border border-bev-navy/5 hover:border-bev-gold/20 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
              >
                <div className="w-12 h-12 rounded-xl bg-bev-paper flex items-center justify-center text-bev-navy group-hover:bg-bev-gold group-hover:text-bev-navy transition-colors mb-8">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif mb-4 text-bev-navy">{feature.title}</h3>
                <p className="text-sm text-bev-navy/50 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
