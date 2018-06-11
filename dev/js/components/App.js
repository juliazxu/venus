import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Buttons from './Buttons';
require('../../scss/style.scss');

export default class App extends React.PureComponent {

  render() {
    return (
      <div>
        <Card />
        <Buttons />
      </div>
    );
  }
}