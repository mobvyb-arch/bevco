import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import BevcoLogo from './BevcoLogo';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bev-navy text-bev-paper pt-20">
      {/* Particle Background Simulation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: ["-10%", "110%"],
              opacity: [0, 0.4, 0],
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-bev-gold rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase border border-bev-gold/30 rounded-full text-bev-gold">
              Precision Engineering for Every Pour
            </span>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[0.9] tracking-tight">
              Liquid Excellence. <br />
              <span className="text-bev-gold italic">Engineered.</span>
            </h1>
            <p className="text-lg md:text-xl text-bev-paper/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Bevco pioneers industrial beverage solutions that unify technical precision with artisanal quality. Scaling the world&apos;s finest drinks, one drop at a time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative px-8 py-4 bg-bev-gold text-bev-navy font-semibold rounded-full overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10 transition-all group-hover:mr-2">Explore Solutions</span>
                <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-bev-paper/20 rounded-full hover:bg-white/5 transition-all flex items-center gap-2">
                View Catalog <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical rail */}
      <div className="absolute left-6 bottom-12 hidden lg:flex flex-col items-center gap-8">
        <div className="h-24 w-px bg-bev-gold/30" />
        <span className="vertical-rail text-[10px] uppercase tracking-widest text-bev-gold/60 font-semibold">
          EST. 1984
        </span>
      </div>
    </section>
  );
}
