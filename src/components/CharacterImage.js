import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

export default class CharacterImage extends Component {
  static propTypes = {
    imgSrc:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    const { imgSrc, name } = this.props;

    return (
        <div className="imagewrapper">
          <div style={{ position: 'relative' }}>
            <img src={imgSrc} />
            <div className={styles.banner}>
              <h2>{name}</h2><br />
            </div>
          </div>
        </div>
    );
  }
}
