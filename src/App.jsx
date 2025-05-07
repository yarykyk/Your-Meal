import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import Footer from './Components/Footer';


class App extends React.Component{
  render(){
    return (
      <>
        <Header />
        <MainSection />
        <Footer />
      </>
    );
  }
}

export default App;
