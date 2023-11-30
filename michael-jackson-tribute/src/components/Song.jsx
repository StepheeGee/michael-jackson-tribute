import React from 'react';

const Song = ({ title, year }) => {
  return (
    <div>
      <h6>{title}</h6>
      <p>{year}</p>
    </div>
  );
};

export default Song;
