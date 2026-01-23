import React from 'react';
import './PlaceholderMedia.scss';

const PlaceholderMedia = ({
  label = 'Media',
  type = 'video',
  aspectRatio = '16/9',
  className = ''
}) => {
  const classNames = [
    'placeholder-media',
    `placeholder-media--${type}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} style={{ aspectRatio }}>
      <div className="placeholder-media__content">
        <div className="placeholder-media__icon">
          {type === 'video' ? (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          ) : (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          )}
        </div>
        <span className="placeholder-media__label">{label}</span>
      </div>
    </div>
  );
};

export default PlaceholderMedia;
