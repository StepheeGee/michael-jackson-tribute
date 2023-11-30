import React from 'react';
import SongCarousel from './SongCarousel';
import styles from '../styles/Album.module.css';

const Album = ({ album }) => {
  return (
    <div className={`card ${styles.albumCard}`}>
      <img src={album.image} className="card-img-top" alt={album.title} />
      <div className="card-body">
        <h5 className="card-title">{album.title}</h5>
        <SongCarousel songs={album.songs} />
      </div>
    </div>
  );
};

export default Album;
