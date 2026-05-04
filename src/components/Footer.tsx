import BevcoLogo from './BevcoLogo';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bev-navy text-bev-paper pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          <div className="max-w-xs">
            <BevcoLogo color="white" className="mb-8" />
            <p className="text-bev-paper/50 text-sm leading-relaxed mb-8">
              Pioneering the future of liquid engineering through technical rigor and artisanal respect since 1984.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-bev-paper/10 flex items-center justify-center hover:bg-white/10 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <h5 className="text-[10px] uppercase tracking-widest font-bold text-bev-gold mb-6">Solutions</h5>
              <ul className="space-y-4 text-sm text-bev-paper/60 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Carbonation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Filtration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bottling</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kegging</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-widest font-bold text-bev-gold mb-6">Company</h5>
              <ul className="space-y-4 text-sm text-bev-paper/60 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Our Origin</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Client Log</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h5 className="text-[10px] uppercase tracking-widest font-bold text-bev-gold mb-6">Contact</h5>
              <ul className="space-y-4 text-sm text-bev-paper/60 font-light">
                <li>Geneva, Switzerland</li>
                <li>London, United Kingdom</li>
                <li>service@bevco.engineering</li>
                <li>+41 (0) 22 555 1234</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-bev-paper/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-bev-paper/20 font-bold">
          <p>© 2026 Bevco Engineering Gmbh. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-bev-paper/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bev-paper/40 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-bev-paper/40 transition-colors">Legal Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
