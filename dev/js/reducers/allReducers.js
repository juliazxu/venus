import { combineReducers } from 'redux';
import { products } from './productsReducers';

const allReducers = combineReducers({
  products
});

export default allReducers;