import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Card from '../../components/ui/Card/Card';
import './Cabinet.scss';

const Cabinet = () => {
  const { t } = useLanguage();

  const cards = [
    {
      key: 'license',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: t('cabinet.license.title'),
      value: t('cabinet.license.status'),
      subtitle: `${t('cabinet.license.validUntil')} ${t('cabinet.license.date')}`,
      accent: 'success',
    },
    {
      key: 'projects',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: t('cabinet.projects.title'),
      value: t('cabinet.projects.count'),
      subtitle: t('cabinet.projects.description'),
      accent: 'primary',
    },
    {
      key: 'analytics',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: t('cabinet.analytics.title'),
      value: t('cabinet.analytics.users'),
      subtitle: t('cabinet.analytics.description'),
      accent: 'accent',
    },
    {
      key: 'support',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: t('cabinet.support.title'),
      value: t('cabinet.support.status'),
      subtitle: t('cabinet.support.description'),
      accent: 'success',
    },
  ];

  return (
    <section id="cabinet" className="cabinet">
      <div className="cabinet__container container">
        <div className="cabinet__header">
          <h1 className="cabinet__title">{t('cabinet.title')}</h1>
        </div>

        <div className="cabinet__grid">
          {cards.map((card) => (
            <Card
              key={card.key}
              variant="elevated"
              padding="lg"
              hoverable
              className={`cabinet__card cabinet__card--${card.accent}`}
            >
              <div className="cabinet__card-icon">{card.icon}</div>
              <div className="cabinet__card-content">
                <h3 className="cabinet__card-title">{card.title}</h3>
                <p className="cabinet__card-value">{card.value}</p>
                <span className="cabinet__card-subtitle">{card.subtitle}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="cabinet__placeholder">
          <Card variant="glass" padding="lg">
            <div className="cabinet__placeholder-content">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
              </svg>
              <p>Dashboard content placeholder</p>
              <span>Full functionality available in production version</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cabinet;
