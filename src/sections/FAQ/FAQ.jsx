import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Accordion from '../../components/ui/Accordion/Accordion';
import PlaceholderMedia from '../../components/ui/PlaceholderMedia/PlaceholderMedia';
import Card from '../../components/ui/Card/Card';
import './FAQ.scss';

const FAQ = () => {
  const { t } = useLanguage();

  const faqItems = t('faq.items');

  return (
    <section id="faq" className="faq section section-animate">
      <div className="faq__container container">
        <SectionTitle
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          accent
        />

        <div className="faq__grid">
          <div className="faq__questions">
            <Accordion items={faqItems} />
          </div>

          <div className="faq__cabinet-preview">
            <Card variant="elevated" padding="lg">
              <h3 className="faq__cabinet-title">{t('faq.cabinetTitle')}</h3>
              <p className="faq__cabinet-desc">{t('faq.cabinetDescription')}</p>
              
              <div className="faq__screenshots">
                {[1, 2, 3, 4].map((num) => (
                  <PlaceholderMedia
                    key={num}
                    label={`${t('faq.screenshotLabel')} ${num}`}
                    type="screenshot"
                    aspectRatio="4/3"
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
