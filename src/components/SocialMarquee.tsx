import { motion } from 'motion/react';

const CLIENTS = [
  "BREW-HOUSE", "VINEYARD CO", "PUREFLOW", "AQUA-CORE", "NECTAR LABS", "ZENITH DISTILLING", "ESTATE RESERVE"
];

export default function SocialMarquee() {
  return (
    <div className="py-12 bg-white border-y border-bev-navy/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center px-8"
        >
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-3xl font-serif font-bold text-bev-navy/20 tracking-tighter hover:text-bev-navy/40 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
