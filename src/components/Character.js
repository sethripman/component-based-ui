import React, { Component } from 'react';
import CharacterImage from './CharacterImage';
import CharacterInfo from './CharacterInfo';

export default class Character extends Component {
  render() {
    const { name, imgSrc, status, species, gender, origin, lastLocation } = this.props;

    return (
      <>
        <CharacterImage
          name={name}
          imgSrc={imgSrc}
        />
        <CharacterInfo
          status={status}
          species={species}
          gender={gender}
          origin={origin}
          lastLocation={lastLocation}
        />
      </>
    );
  }
}
