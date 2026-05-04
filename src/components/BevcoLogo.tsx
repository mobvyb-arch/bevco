import { motion } from 'motion/react';

export default function BevcoLogo({ className = "h-8", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <path
          d="M20 20L80 20M20 50L80 50M20 80L80 80"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="square"
        />
        <path
          d="M50 20L50 80"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="square"
        />
        <circle cx="50" cy="50" r="15" fill={color} />
      </svg>
      <span className="font-serif text-2xl font-semibold tracking-tighter uppercase" style={{ color }}>
        Bevco
      </span>
    </motion.div>
  );
}
