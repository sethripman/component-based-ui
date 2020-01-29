import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Footer />
        <Character
          name="Baby Legs"
          imgSrc="https://rickandmortyapi.com/api/character/avatar/29.jpeg"
          status="Alive"
          species="Human, Human with baby legs"
          gender="Male"
          origin="unknown"
          lastLocation="Interdimensional Cable"
        />
      </>
    );
  }
}
