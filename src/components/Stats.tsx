import { motion, useMotionValue, useSpring, useTransform, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function Stats() {
  const stats = [
    { label: "Years Experience", value: 40, suffix: "+" },
    { label: "Global Clients", value: 1200, suffix: "" },
    { label: "Liters Annual Flow", value: 500, suffix: "M+" },
    { label: "Service Points", value: 85, suffix: "" },
  ];

  return (
    <section className="bg-bev-navy py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-serif text-bev-gold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-bev-paper/40 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
