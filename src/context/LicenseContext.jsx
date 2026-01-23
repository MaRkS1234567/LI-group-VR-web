import React, { createContext, useContext, useState, useEffect } from 'react';

const VALID_LICENSE = 'DEMO-LICENSE';
const STORAGE_KEY = 'li_license';

const LicenseContext = createContext();

export const LicenseProvider = ({ children }) => {
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    const storedLicense = localStorage.getItem(STORAGE_KEY);
    if (storedLicense === 'true') {
      setIsActivated(true);
    }
  }, []);

  const activateLicense = (code) => {
    if (code === VALID_LICENSE) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setIsActivated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsActivated(false);
  };

  return (
    <LicenseContext.Provider value={{ isActivated, activateLicense, logout }}>
      {children}
    </LicenseContext.Provider>
  );
};

export const useLicense = () => {
  const context = useContext(LicenseContext);
  if (!context) {
    throw new Error('useLicense must be used within a LicenseProvider');
  }
  return context;
};
