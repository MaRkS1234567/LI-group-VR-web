import React, { useRef } from 'react'
import Button from '../../components/ui/Button/Button'
import Card from '../../components/ui/Card/Card'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'
import './Packages.scss'

const Packages = ({ onSelectPackage }) => {
  const { t } = useLanguage();

  const videoRefs = useRef({}); // { vrStart: HTMLVideoElement, vrPro: HTMLVideoElement }

  const openFullscreen = async (key) => {
    const el = videoRefs.current[key];
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

  const handleSelectPackage = (packageName) => {
    if (onSelectPackage) onSelectPackage(packageName);
    const element = document.getElementById('request');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const packages = [
    {
      key: 'vrStart',
      name: t('packages.vrStart.name'),
      price: t('packages.vrStart.price'),
      description: t('packages.vrStart.description'),
      features: t('packages.vrStart.features'),
      accent: false,
    },
    {
      key: 'vrPro',
      name: t('packages.vrPro.name'),
      price: t('packages.vrPro.price'),
      description: t('packages.vrPro.description'),
      features: t('packages.vrPro.features'),
      accent: true,
    },
  ];

  return (
    <section id="packages" className="packages section section-animate">
      <div className="packages__container container">
        <SectionTitle title={t('packages.title')} subtitle={t('packages.subtitle')} accent />

        <div className="packages__grid">
          {packages.map((pkg) => (
            <Card
              key={pkg.key}
              variant={pkg.accent ? 'accent' : 'elevated'}
              padding="lg"
              hoverable
              className={`packages__card ${pkg.accent ? 'packages__card--featured' : ''}`}
            >
              {pkg.accent && <div className="packages__badge">Выгодно</div>}

              <div className="packages__header">
                <h3 className="packages__name">{pkg.name}</h3>
                <div className="packages__price">
                  <span className="packages__price-value">{pkg.price}</span>
                  <span className="packages__price-period">{t('packages.perYear')}</span>
                </div>
              </div>

              <p className="packages__description">{pkg.description}</p>

              <ul className="packages__features">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="packages__feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="packages__media">
                {/* ВИДЕО 1:1 + POSTER + FULLSCREEN */}
                <button
                  type="button"
                  className="packages__video"
                  onClick={() => openFullscreen(pkg.key)}
                  aria-label={`${t('packages.mediaLabel')} video`}
                >
                  <video
                    ref={(el) => { if (el) videoRefs.current[pkg.key] = el; }}
                    className="packages__video-el"
                    src={`/media/packages/${pkg.key}.mp4`}
                    poster={`/media/packages/${pkg.key}.jpg`}
                    preload="metadata"
                    muted
                    playsInline
                  />
                  <span className="packages__video-play" aria-hidden="true" />
                </button>

                {/* КАРТИНКА как у тебя */}
                <img
                  className="packages__image"
                  src={`/images/packages/${pkg.key}.jpg`}
                  alt={`${pkg.name} preview`}
                  loading="lazy"
                />
              </div>

              <Button
                variant={pkg.accent ? 'primary' : 'outline'}
                size="lg"
                fullWidth
                onClick={() => handleSelectPackage(pkg.name)}
              >
                {t('packages.selectPackage')}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;