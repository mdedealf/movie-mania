import React from 'react';

import './App.css';
import './normalize.css';
import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Billboard />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
