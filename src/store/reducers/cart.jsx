export default function reducer(state = [], action) {
  if (action.type === 'ADD_PRODUCT_TO_CART') {
    return [ ...state, action.payload ];
  } else if (action.type === 'REMOVE_PRODUCT_FROM_CART') {
    return state.filter(
      (product) => product.name !== action.payload.name || product.price !== action.payload.price
    );
  }

  return state;
}