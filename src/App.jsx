import React, { useState, useEffect, useCallback } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { LicenseProvider, useLicense } from './context/LicenseContext';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import FAQ from './sections/FAQ/FAQ';
import Packages from './sections/Packages/Packages';
import Request from './sections/Request/Request';
import Contacts from './sections/Contacts/Contacts';
import Cabinet from './sections/Cabinet/Cabinet';
import './App.scss';

const AppContent = () => {
  const { isActivated } = useLicense();
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleSelectPackage = useCallback((packageName) => {
    setSelectedPackage(packageName);
  }, []);

  useEffect(() => {
    if (isActivated) return;

    const sectionIds = ['home', 'about', 'faq', 'packages', 'request', 'contacts'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isActivated]);

  // Section animation observer
  useEffect(() => {
    const animateOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const animateCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const animateObserver = new IntersectionObserver(animateCallback, animateOptions);

    document.querySelectorAll('.section-animate, .stagger-item').forEach((el) => {
      animateObserver.observe(el);
    });

    return () => animateObserver.disconnect();
  }, [isActivated]);

  if (isActivated) {
    return (
      <div className="app app--cabinet">
        <Background />
        <Header activeSection="cabinet" />
        <main className="app__main">
          <Cabinet />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Background />
      <Header activeSection={activeSection} />
      <main className="app__main">
        <Home />
        <About />
        <FAQ />
        <Packages onSelectPackage={handleSelectPackage} />
        <Request selectedPackage={selectedPackage} />
        <Contacts />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <LicenseProvider>
        <AppContent />
      </LicenseProvider>
    </LanguageProvider>
  );
};

export default App;
