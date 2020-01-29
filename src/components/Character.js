import React, { Component } from 'react';
import styles from './App.css';

export default class Character extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </>
    )
  }
}
