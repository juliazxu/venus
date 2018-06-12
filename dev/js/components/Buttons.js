import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { swipeRight, swipeLeft } from '../actions/actions';

class Buttons extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  swipeLeft() {
    this.props.swipeLeft();
  }

  swipeRight() {
    this.props.swipeRight();
  }

  render() {
    return (
      <div className="flexcontainer button-container">
        <a className="button red-circle" id="red-button" onClick={ () => this.swipeLeft() }>nah</a>
        <a className="button green-circle" id="green-button" onClick={ () => this.swipeRight() }>like</a>
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ swipeLeft: swipeLeft, swipeRight, swipeRight }, dispatch);
};

export default connect(null, matchDispatchToProps)(Buttons);