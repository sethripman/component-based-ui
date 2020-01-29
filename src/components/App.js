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
          name
        />
      </>
    );
  }
}
