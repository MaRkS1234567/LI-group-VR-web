import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  accent = false,
  className = ''
}) => {
  const classNames = [
    'section-title',
    `section-title--${align}`,
    accent ? 'section-title--accent' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {accent && <span className="section-title__accent-line" />}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
