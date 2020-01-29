import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Character
          name="Baby Legs"
          imgSrc="https://rickandmortyapi.com/api/character/avatar/29.jpeg"
          status="Alive"
          species="Human, Human with baby legs"
          gender="Male"
          origin="unknown"
          lastLocation="Interdimensional Cable"
        />
        <Character
          name="Gibble Snake"
          imgSrc="https://rickandmortyapi.com/api/character/avatar/142.jpeg"
          status="Dead"
          species="Alien"
          gender="Unknown"
          origin="Resort Planet"
          lastLocation="Resort Planet"
        />
        <Character
          name="Jacqueline"
          imgSrc="https://rickandmortyapi.com/api/character/avatar/29.jpeg"
          status="Alive"
          species="Human"
          gender="Female"
          origin="Earth (Replacement Dimension)"
          lastLocation="Earth (Replacement Dimension)"
        />
        <Character
          name="Michael McLick"
          imgSrc="https://rickandmortyapi.com/api/character/avatar/224.jpeg"
          status="Alive"
          species="Human"
          gender="Male"
          origin="unknown"
          lastLocation="Interdimensional Cable"
        />
        <Character
          name="Corn Detective"
          imgSrc="https://rickandmortyapi.com/api/character/avatar/403.jpeg"
          status="Dead"
          species="Corn-Person"
          gender="Male"
          origin="Interdimensional Cable"
          lastLocation="Interdimensional Cable"
        />
        <Character
          name="Trunkphobic Suspenders Guy"
          imgSrc="https://rickandmortyapi.com/api/character/avatar/405.jpeg"
          status="Alive"
          species="Human"
          gender="Male"
          origin="Interdimensional Cable"
          lastLocation="Interdimensional Cable"
        />
        <Character
          name="Rich Plutonian"
          imgSrc="https://rickandmortyapi.com/api/character/avatar/421.jpeg"
          status="Alive"
          species="Plutonian"
          gender="Female"
          origin="Pluto"
          lastLocation="Pluto"
        />
        <Character
        //Phone-person, Alive, Humanoid Phone, Male, , Earth (Phone Dimension)
          name="Phone-Person"
          imgSrc="https://rickandmortyapi.com/api/character/avatar/427.jpeg"
          status="Alive"
          species="Humanoid Phone"
          gender="Male"
          origin="Earth (Phone Dimension)"
          lastLocation="Earth (Phone Dimension)"
        />
        <Footer />

      </>
    );
  }
}
