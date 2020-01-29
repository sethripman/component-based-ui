import React, { Component } from 'react';
import styles from './App.css';

export default class CharacterInfo extends Component {
  render() {
    const { weight } = this.props;

    return (
      <>
        <dt>Weight</dt>
        <dd>{weight}</dd>
      </>
    )
  }
}
