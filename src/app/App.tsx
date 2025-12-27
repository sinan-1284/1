import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { DIYKits } from './components/DIYKits';
import { Courses } from './components/Courses';
import { LabSetup } from './components/LabSetup';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-['Inter'] overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Features />
        <Services />
        <DIYKits />
        <Courses />
        <LabSetup />
        <About />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Smooth Scroll Behavior */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0f;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00d9ff 0%, #8b5cf6 100%);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00e5ff 0%, #9d6fff 100%);
        }
      `}</style>
    </div>
  );
}