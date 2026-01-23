import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Card from '../../components/ui/Card/Card';
import Button from '../../components/ui/Button/Button';
import PlaceholderMedia from '../../components/ui/PlaceholderMedia/PlaceholderMedia';
import './Packages.scss';

const Packages = ({ onSelectPackage }) => {
  const { t } = useLanguage();

  const handleSelectPackage = (packageName) => {
    if (onSelectPackage) {
      onSelectPackage(packageName);
    }
    const element = document.getElementById('request');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <SectionTitle
          title={t('packages.title')}
          subtitle={t('packages.subtitle')}
          accent
        />

        <div className="packages__grid">
          {packages.map((pkg) => (
            <Card
              key={pkg.key}
              variant={pkg.accent ? 'accent' : 'elevated'}
              padding="lg"
              hoverable
              className={`packages__card ${pkg.accent ? 'packages__card--featured' : ''}`}
            >
              {pkg.accent && <div className="packages__badge">Popular</div>}
              
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
                <PlaceholderMedia
                  label={`${t('packages.mediaLabel')} 1`}
                  type="video"
                  aspectRatio="16/9"
                />
                <PlaceholderMedia
                  label={`${t('packages.mediaLabel')} 2`}
                  type="image"
                  aspectRatio="16/9"
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
