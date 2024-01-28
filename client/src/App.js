import React from 'react';
import MainRoute from './routes/MainRoute';
import Header from './components/Header/Header';
import MassageSection from './components/Home/MassageSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <>
        <Header/>
        <MainRoute/>
        <Footer/>
      </>
  );
}

export default App;
