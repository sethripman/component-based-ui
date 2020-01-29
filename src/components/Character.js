import React, { Component } from 'react';
import CharacterImage from './CharacterImage';
import CharacterInfo from './CharacterInfo';

export default class Character extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <CharacterImage
        
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
