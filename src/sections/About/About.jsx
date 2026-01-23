import React from 'react'
import PlaceholderMedia from '../../components/ui/PlaceholderMedia/PlaceholderMedia'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'
import './About.scss'

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      ),
      title: t('about.features.immersive'),
      description: t('about.features.immersiveDesc'),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: t('about.features.analytics'),
      description: t('about.features.analyticsDesc'),
    },
  ];

  return (
    <section id="about" className="about section section-animate">
      <div className="about__container container">
        <SectionTitle
          title={t('about.title')}
          subtitle={t('about.subtitle')}
          accent
        />

        <div className="about__grid">
          <div className="about__text">
            <p className="about__description">{t('about.description')}</p>
            
            <div className="about__features">
              {features.map((feature, index) => (
                <div key={index} className="about__feature stagger-item" style={{ '--stagger': index }}>
                  <div className="about__feature-icon">{feature.icon}</div>
                  <div className="about__feature-content">
                    <h4 className="about__feature-title">{feature.title}</h4>
                    <p className="about__feature-desc">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__media">
            <div className="about__media-grid">
              <PlaceholderMedia 
                label={`${t('about.videoLabel')} #1`} 
                type="video" 
                aspectRatio="16/9"
              />
              <PlaceholderMedia 
                label={`${t('about.videoLabel')} #2`} 
                type="video" 
                aspectRatio="16/9"
              />
              <PlaceholderMedia 
                label={`${t('about.videoLabel')} #3`} 
                type="video" 
                aspectRatio="16/9"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
