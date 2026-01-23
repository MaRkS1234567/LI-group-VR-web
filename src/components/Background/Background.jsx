import React from 'react';
import './Background.scss';

const Background = () => {
  return (
    <div className="background">
      {/* Gradient orbs */}
      <div className="background__orb background__orb--red" />
      <div className="background__orb background__orb--yellow" />
      
      {/* Grid overlay */}
      <div className="background__grid" />
      
      {/* Diagonal lines */}
      <div className="background__lines">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="background__line" style={{ '--line-index': i }} />
        ))}
      </div>
      
      {/* Noise texture */}
      <div className="background__noise" />
    </div>
  );
};

export default Background;
