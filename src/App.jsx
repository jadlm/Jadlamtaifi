import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Scene3D from './components/Scene3D';

function App() {
  const [loading, setLoading] = useState(true);

  // Scroll to top on load/reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />
      
      {!loading && (
        <ReactLenis root options={{ smoothTouch: false, lerp: 0.1 }}>
          <CustomCursor />
          
          <div className="noise-overlay" />
          
          <div className="relative z-0 min-h-screen selection:bg-cyan-500/30 selection:text-white">
            <Scene3D />
            
            <div className="relative z-10">
              <Navbar />
              
              <main>
                <Hero />
                
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
                </div>
                
                <About />
                
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-10" />
                </div>
                
                <Skills />
                
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-magenta-500/20 to-transparent my-10" />
                </div>
                
                <Projects />
                
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent my-10" />
                </div>
                
                <Experience />
                
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
                </div>
                
                <Services />
                
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent my-10" />
                </div>
                
                <Contact />
              </main>
              
              <Footer />
            </div>
          </div>
        </ReactLenis>
      )}
    </>
  );
}

export default App;
