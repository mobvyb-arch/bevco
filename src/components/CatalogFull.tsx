import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Filter, Plus } from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "BX-100 Bottling Line", cat: "Production", price: "Contact for Quote", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format" },
  { id: 2, name: "UltraFilter Pro", cat: "Purification", price: "Contact for Quote", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format" },
  { id: 3, name: "C-Spark Carbonator", cat: "Processing", price: "Contact for Quote", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format" },
  { id: 4, name: "FlowManager AI", cat: "Control", price: "Contact for Quote", img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format" },
];

export default function CatalogFull() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = activeFilter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.cat === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="text-4xl font-serif text-bev-navy">Industrial Catalog</h2>
          
          <div className="flex flex-wrap gap-2">
            {['All', 'Production', 'Purification', 'Processing', 'Control'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeFilter === filter ? 'bg-bev-navy text-white' : 'bg-bev-paper text-bev-navy/40 hover:bg-bev-navy/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              layoutId={`card-${product.id}`}
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-bev-paper mb-4">
                <img src={product.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-bev-gold">{product.cat}</p>
              <h3 className="text-xl font-serif text-bev-navy mt-1">{product.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-bev-navy/80 backdrop-blur-sm z-[100]" 
            />
            <motion.div
              layoutId={`card-${selectedProduct.id}`}
              className="fixed inset-10 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[900px] md:h-[600px] bg-white rounded-[2.5rem] z-[101] overflow-hidden flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 bg-bev-paper h-[300px] md:h-auto">
                <img src={selectedProduct.img} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-between">
                <div>
                  <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 text-bev-navy/20 hover:text-bev-navy">
                    <X />
                  </button>
                  <span className="text-xs uppercase tracking-widest text-bev-gold font-bold">{selectedProduct.cat}</span>
                  <h3 className="text-4xl font-serif text-bev-navy mt-4 mb-6">{selectedProduct.name}</h3>
                  <p className="text-bev-navy/60 leading-relaxed font-light mb-8">
                    Fully modular design with integrated IoT monitoring. Built for high-capacity environments that demand 0.01% precision margin. Includes BevCare™ 5-year maintenance suite and on-site training for your engineering team.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="text-2xl font-serif text-bev-navy">Contact for Quote</div>
                  <button className="w-full py-4 bg-bev-navy text-bev-paper rounded-full font-semibold hover:bg-bev-navy/90 transition-all">
                    Add to Quote Request
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
