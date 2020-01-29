import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

export default class CharacterInfo extends Component {
  static propTypes = {
    status:PropTypes.string.isRequired,
    species:PropTypes.string.isRequired,
    gender:PropTypes.string.isRequired,
    origin:PropTypes.string.isRequired,
    lastLocation:PropTypes.string.isRequired
  }

  render() {
    const { status, species, gender, origin, lastLocation } = this.props;

    return (
      <>
        <div className="infowrapper">
          <ul>
            <li>
              <span>STATUS</span>
            <p>{status}</p>
            </li> <br/>
            <li>
            <span>SPECIES</span>
            <p>{species}</p>
            </li> <br/>
            <li>
            <span>GENDER</span>
            <p>{gender}</p>
            </li> <br/>
            <li>
            <span>ORIGIN</span>
            <p>{origin}</p>
            </li> <br/>
            <li>
            <span>LAST LOCATION</span>
            <p>{lastLocation}</p>
            </li> <br/>
          </ul>
        </div>
      </>
    );
  }
}
