import React, { Component } from 'react';
import styles from './App.css';

export default class CharacterInfo extends Component {
  render() {
    const { status, species, gender, origin, lastLocation } = this.props;

    return (
      <>
        <div className="infowrapper">
          <span>STATUS</span>
          <p>{status}</p>
          <span>SPECIES</span>
          <p>{species}</p>
          <span>GENDER</span>
          <p>{gender}</p>
          <span>ORIGIN</span>
          <p>{origin}</p>
          <span>LAST LOCATION</span>
          <p>{lastLocation}</p>
        </div>
      </>
    );
  }
}
