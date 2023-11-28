import React from 'react';
import Song from './Song';
import styles from '../styles/SongCarousel.module.css';

const SongCarousel = ({ songs }) => {
  return (
    <div id="songCarousel" className={`carousel slide ${styles.carousel}`} data-bs-ride="carousel">
      <div className="carousel-inner">
        {songs.map((song, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <Song title={song.title} year={song.year} />
          </div>
        ))}
      </div>
      {/* Controls... */}
    </div>
  );
};

export default SongCarousel;
