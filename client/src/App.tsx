import React from 'react';
import './App.scss';
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Search from './components/search/Search';
import Slider from './components/slider/Slider';

function App() {

  return (
    <div className='app'>
      <Header />
      <Search />
      <div className='app__main'>
        <Slider />
        <Catalog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
