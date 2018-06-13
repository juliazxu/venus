import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { callAPI } from '../actions/actions';
import { currProductSelector } from './../selectors/productSelectors';

export class Card extends React.PureComponent {

  componentDidMount() {
    this.props.callAPI();
  }

  render() {
    if (!this.props.currProduct.currProduct) {
      return (<div>Loading...</div>)
    } else {
      const { imageUrl, name, brand } = this.props.currProduct.currProduct;
      return (
        <div className="card flexcontainer">
        <div className="container">
          <img src={imageUrl} alt="beauty-product" />
          <h1>{name}</h1>
          <h2>{brand}</h2>
        </div>
      </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return { 
    currProduct: currProductSelector(state) 
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ callAPI }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Card);

Card.propTypes = {
  currProduct: PropTypes.object,
  counter: PropTypes.number,
};