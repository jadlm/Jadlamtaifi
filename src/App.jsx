import { lazy, Suspense, useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Scene3D = lazy(() => import('./components/Scene3D'));

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
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
            
            <div className="relative z-10">
              <Navbar />
              
              <main>
                <Hero />
                
                <Suspense fallback={null}>
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
                </Suspense>
              </main>
              
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
            </div>
          </div>
        </ReactLenis>
      )}
    </>
  );
}

export default App;
