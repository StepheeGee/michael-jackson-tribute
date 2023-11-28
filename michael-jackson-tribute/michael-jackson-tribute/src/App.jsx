import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Albums from './components/Albums';
import albumsData from './data/albumsData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Simulating data fetching from JSON
    setAlbums(albumsData);
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Albums albums={albums} />
      </div>
      <Footer />
    </div>
  );
};

export default App;

