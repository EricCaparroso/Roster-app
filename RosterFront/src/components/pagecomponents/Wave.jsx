import React from 'react';


const Wave = () => {
  return (
    <div className="wave-container">
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C300,0 900,200 1200,100 L1200,200 L0,200 Z"
          fill="#113489"
        />
      </svg>
    </div>
  );
};

export default Wave;
