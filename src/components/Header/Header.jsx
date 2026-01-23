import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useLicense } from '../../context/LicenseContext';
import Button from '../ui/Button/Button';
import Modal from '../ui/Modal/Modal';
import './Header.scss';

const Header = ({ activeSection }) => {
  const { language, setLanguage, t } = useLanguage();
  const { isActivated, activateLicense, logout } = useLicense();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [licenseCode, setLicenseCode] = useState('');
  const [licenseError, setLicenseError] = useState('');

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'packages', label: t('nav.packages') },
    { id: 'request', label: t('nav.request') },
    { id: 'contacts', label: t('nav.contacts') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const success = activateLicense(licenseCode);
    if (success) {
      setIsLoginModalOpen(false);
      setLicenseCode('');
      setLicenseError('');
    } else {
      setLicenseError(t('login.error'));
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  if (isActivated) {
    return (
      <header className={`header header--cabinet ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, 'cabinet')}>
            LI group
          </a>
          <div className="header__actions">
            <button className="header__lang-toggle" onClick={toggleLanguage}>
              {language.toUpperCase()}
            </button>
            <Button variant="secondary" size="sm" onClick={logout}>
              {t('cabinet.logout')}
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, 'home')}>
            LI group
          </a>

          <nav className="header__nav">
            <div className="header__nav-pill">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`header__nav-link ${activeSection === item.id ? 'header__nav-link--active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="header__actions">
            <button className="header__lang-toggle" onClick={toggleLanguage}>
              {language.toUpperCase()}
            </button>
            <Button variant="primary" size="sm" onClick={() => setIsLoginModalOpen(true)}>
              {t('nav.login')}
            </Button>
            <button
              className={`header__burger ${isMobileMenuOpen ? 'header__burger--open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`header__mobile-link ${activeSection === item.id ? 'header__mobile-link--active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => {
          setIsLoginModalOpen(false);
          setLicenseError('');
          setLicenseCode('');
        }}
        title={t('login.title')}
        size="sm"
      >
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <p className="login-form__description">{t('login.description')}</p>
          <div className="login-form__field">
            <label htmlFor="licenseCode">{t('login.label')}</label>
            <input
              type="text"
              id="licenseCode"
              value={licenseCode}
              onChange={(e) => setLicenseCode(e.target.value)}
              placeholder={t('login.placeholder')}
              autoFocus
            />
            {licenseError && <span className="login-form__error">{licenseError}</span>}
          </div>
          <Button type="submit" variant="primary" fullWidth>
            {t('login.submit')}
          </Button>
          <p className="login-form__hint">{t('login.hint')}</p>
        </form>
      </Modal>
    </>
  );
};

export default Header;
