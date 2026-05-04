import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialMarquee from './components/SocialMarquee';
import Features from './components/Features';
import Stats from './components/Stats';
import CategoryGrid from './components/CategoryGrid';
import CatalogFull from './components/CatalogFull';
import Testimonials from './components/Testimonials';
import GoldCTA from './components/GoldCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-bev-paper flex flex-col">
      <Navbar />
      <Hero />
      <SocialMarquee />
      <Features />
      <Stats />
      <CategoryGrid />
      <CatalogFull />
      <Testimonials />
      <GoldCTA />
      <Contact />
      <Footer />
    </main>
  );
}



