import { createStructuredSelector } from 'reselect';

export const currProductSelector = createStructuredSelector({
  currProduct: state => state.products.allProducts[state.products.counter]
});