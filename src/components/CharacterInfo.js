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
              <span className={styles.left} >Status</span>
              <span className={styles.right} >{status}</span>
            </li> <br />
            <li>
              <span className={styles.left} >Species</span>
              <span className={styles.right} >{species}</span>
            </li> <br />
            <li>
              <span className={styles.left} >Gender</span>
              <span className={styles.right} >{gender}</span>
            </li> <br />
            <li>
              <span className={styles.left} >Origin</span>
              <span className={styles.right} >{origin}</span>
            </li> <br />
            <li>
              <span className={styles.left} >Last Location</span>
              <span className={styles.right} >{lastLocation}</span>
            </li> <br />
          </ul>
        </div>
      </>
    );
  }
}
