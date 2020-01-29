import React, { Component } from 'react';
import CharacterImage from './CharacterImage';
import CharacterInfo from './CharacterInfo';

export default class Character extends Component {
  render() {
    const { name, imageSrc, status, species, gender, origin, lastLocation } = this.props;

    return (
      <>
        <CharacterImage
          imgSrc=""
        />
        <CharacterInfo

        />
        {/* <dl>
          <DataListElement
            title="Name"
            description={name} />
          <DataListElement
            title="Age"
            description={age} />
          <DataListElement
            title="Weight"
            description={weight} />
        </dl> */}
      </>
    )
  }
}
