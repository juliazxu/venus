import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {callAPI} from '../actions/actions';

export class Card extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    this.props.callAPI();
  }

  render() {
    let currProduct;
    if (this.props.allProducts && this.props.counter !== undefined) {
      currProduct = this.props.allProducts[this.props.counter];
    }
    return (
      !this.props.allProducts
      ? <div>Loading...</div> 
      : <div className="card flexcontainer">
        <div className="container">
          <img src={currProduct.imageUrl} alt="beauty-product" />
          <h1>{currProduct.name}</h1>
          <h2>{currProduct.brand}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allProducts: state.products.allProducts,
    counter: state.products.counter
  }
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ callAPI: callAPI }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Card);

Card.propTypes = {
  allProducts: PropTypes.object,
  counter: PropTypes.number,
};