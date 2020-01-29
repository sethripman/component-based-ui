import React, { Component } from 'react';
import styles from './App.css';

export default class CharacterImage extends Component {
  render() {
    const { imgSrc, name } = this.props;

    return (
      <>
        <div className="imagewrapper">
          <img src={imgSrc} />
          <h2>{name}</h2>
        </div>
      </>
    );
  }
}
