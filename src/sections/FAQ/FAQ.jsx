import React from 'react'
import Accordion from '../../components/ui/Accordion/Accordion'
import Card from '../../components/ui/Card/Card'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'
import './FAQ.scss'

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
                  <img
                  key={num}
                  src={`/images/faq/${num}.png`}   // ← если у тебя .png, поменяй на .png
                  alt={`${t("faq.screenshotLabel")} ${num}`}
                  className="faq__screenshot"
                  loading="lazy"
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
