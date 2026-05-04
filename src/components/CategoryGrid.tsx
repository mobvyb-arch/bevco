import { motion } from 'motion/react';

const LOGOS = [
  { name: "Canning Systems", category: "Production", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop" },
  { name: "Carbonation", category: "Processing", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop" },
  { name: "Filtration", category: "Purification", img: "https://images.unsplash.com/photo-1582733711311-bfbe436151f1?q=80&w=800&auto=format&fit=crop" },
  { name: "Packaging", category: "End-of-Line", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" },
];

export default function CategoryGrid() {
  return (
    <section id="catalog" className="py-24 bg-bev-paper">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-bev-gold font-semibold uppercase tracking-[0.2em] text-xs">The Catalog</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-bev-navy">Engineered Categories</h2>
          </div>
          <button className="hidden sm:block text-bev-navy font-semibold uppercase tracking-widest text-xs border-b border-bev-navy pb-1">
            View All Products
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOGOS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden bg-bev-navy cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" 
              />
              <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-bev-navy via-bev-navy/40 to-transparent">
                <span className="text-[10px] uppercase tracking-widest text-bev-gold font-bold">{item.category}</span>
                <h3 className="text-2xl font-serif text-white mt-1">{item.name}</h3>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <span className="text-xs uppercase tracking-widest text-white/60 border border-white/20 rounded-full px-4 py-2">
                    Learn More
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
