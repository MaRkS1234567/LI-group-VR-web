import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../../components/ui/Button/Button';
import './Home.scss';

const Home = () => {
  const { t } = useLanguage();

  const handleCtaClick = () => {
    const element = document.getElementById('request');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home section">
      <div className="home__container container">
        <div className="home__content">
          <h1 className="home__motto">
            {t('home.motto')}
          </h1>
          <p className="home__description">
            {t('home.description')}
          </p>
          <div className="home__cta">
            <Button variant="primary" size="lg" onClick={handleCtaClick}>
              {t('home.cta')}
            </Button>
          </div>
        </div>

        <div className="home__stats">
          <div className="home__stat">
            <span className="home__stat-value">{t('home.stats.experience')}</span>
            <span className="home__stat-label">{t('home.stats.experienceLabel')}</span>
          </div>
          <div className="home__stat">
            <span className="home__stat-value">{t('home.stats.clients')}</span>
            <span className="home__stat-label">{t('home.stats.clientsLabel')}</span>
          </div>
          <div className="home__stat">
            <span className="home__stat-value">{t('home.stats.projects')}</span>
            <span className="home__stat-label">{t('home.stats.projectsLabel')}</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="home__decoration">
          <div className="home__circle home__circle--1" />
          <div className="home__circle home__circle--2" />
          <div className="home__line home__line--1" />
          <div className="home__line home__line--2" />
        </div>
      </div>
    </section>
  );
};

export default Home;
