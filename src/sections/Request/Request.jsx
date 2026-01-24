import React, { useState } from 'react'
import Button from '../../components/ui/Button/Button'
import Card from '../../components/ui/Card/Card'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { useLanguage } from '../../context/LanguageContext'
import './Request.scss'

const Request = ({ selectedPackage }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    contactMethod: 'phone',
    contactDetails: '',
    package: selectedPackage || '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  React.useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, package: selectedPackage }));
    }
  }, [selectedPackage]);

  const contactMethods = [
    { value: 'phone', label: t('request.methods.phone') },
    { value: 'email', label: t('request.methods.email') },
    { value: 'telegram', label: t('request.methods.telegram') },
    { value: 'whatsapp', label: t('request.methods.whatsapp') },
  ];

  const packages = [
    { value: 'VR Start', label: 'VR Start' },
    { value: 'VR Pro', label: 'VR Pro' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.contactDetails.trim()) {
      newErrors.contactDetails = 'Required';
    }
    if (!formData.package) {
      newErrors.package = 'Required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ contactMethod: 'phone', contactDetails: '', package: '' });
      }, 5000);
    }
  };

  const getPlaceholder = () => {
    const placeholders = {
      phone: t('request.placeholders.phone'),
      email: t('request.placeholders.email'),
      telegram: t('request.placeholders.telegram'),
      whatsapp: t('request.placeholders.whatsapp'),
    };
    return placeholders[formData.contactMethod] || '';
  };

  return (
    <section id="request" className="request section section-animate">
      <div className="request__container container">
        <SectionTitle
          title={t('request.title')}
          subtitle={t('request.subtitle')}
          accent
        />

        <div className="request__grid">
          <Card variant="elevated" padding="lg" className="request__form-card">
            {isSubmitted ? (
              <div className="request__success">
                <div className="request__success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="16 10 10 16 8 14" />
                  </svg>
                </div>
                <p className="request__success-text">{t('request.success')}</p>
              </div>
            ) : (
              <form className="request__form" onSubmit={handleSubmit}>
                <div className="request__field">
                  <label htmlFor="contactMethod">{t('request.contactMethod')}</label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                  >
                    {contactMethods.map(method => (
                      <option key={method.value} value={method.value}>
                        {method.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="request__field">
                  <label htmlFor="contactDetails">{t('request.contactDetails')}</label>
                  <input
                    type="text"
                    id="contactDetails"
                    name="contactDetails"
                    value={formData.contactDetails}
                    onChange={handleChange}
                    placeholder={getPlaceholder()}
                    className={errors.contactDetails ? 'error' : ''}
                  />
                </div>

                <div className="request__field">
                  <label htmlFor="package">{t('request.selectPackage')}</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className={errors.package ? 'error' : ''}
                  >
                    <option value="">—</option>
                    {packages.map(pkg => (
                      <option key={pkg.value} value={pkg.value}>
                        {pkg.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  {t('request.submit')}
                </Button>
              </form>
            )}
          </Card>

          <div className="request__steps">
            <h3 className="request__steps-title">{t('request.steps.title')}</h3>
            
            <div className="request__step">
              <div className="request__step-number">1</div>
              <div className="request__step-content">
                <h4>{t('request.steps.step1')}</h4>
                <p>{t('request.steps.step1Desc')}</p>
              </div>
            </div>

            <div className="request__step-connector" />

            <div className="request__step" data-step="2">
              <div className="request__step-number">2</div>
              <div className="request__step-content">
                <h4>{t('request.steps.step2')}</h4>
                <p>{t('request.steps.step2Desc')}</p>
              </div>
            </div>

            <div className="request__step-connector" />

            <div className="request__step">
              <div className="request__step-number">3</div>
              <div className="request__step-content">
                <h4>{t('request.steps.step3')}</h4>
                <p>{t('request.steps.step3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
