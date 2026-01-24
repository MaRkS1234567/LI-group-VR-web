import React, { useRef } from 'react'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'
import './About.scss'

const About = () => {
  const { t } = useLanguage();
  
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const openFullscreen = async (ref) => {
    const el = ref.current;
    if (!el) return;

    // iOS Safari
    if (el.webkitEnterFullscreen) {
      el.play();
      el.webkitEnterFullscreen();
      return;
    }

    try {
      if (el.requestFullscreen) await el.requestFullscreen();
      await el.play();
    } catch (e) {
      el.play();
    }
  };

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
              <button
                  type="button"
                  className="about__video"
                  onClick={() => openFullscreen(videoRef1)}
                  aria-label={`${t('about.videoLabel')} #1`}
                >
                <video
                  ref={videoRef1}
                  poster="/media/about/poster-1.png"
                  className="about__video-el"
                  src="/media/about/video-1.mp4"
                  preload="metadata"
                  muted
                  playsInline
                />
                <span className="about__video-play" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="about__video"
                onClick={() => openFullscreen(videoRef2)}
                aria-label={`${t('about.videoLabel')} #2`}
              >
                <video
                  ref={videoRef2}
                  poster="/media/about/poster-2.png"
                  className="about__video-el"
                  src="/media/about/video-2.mp4"
                  preload="metadata"
                  muted
                  playsInline
                />
                <span className="about__video-play" aria-hidden="true" />
              </button>

              <button
                type="button"
                className="about__video"
                onClick={() => openFullscreen(videoRef3)}
                aria-label={`${t('about.videoLabel')} #3`}
              >
                <video
                  ref={videoRef3}
                  poster="/media/about/poster-3.png"
                  className="about__video-el"
                  src="/media/about/video-3.mp4"
                  preload="metadata"
                  muted
                  playsInline
                />
                <span className="about__video-play" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
