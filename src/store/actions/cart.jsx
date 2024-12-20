export function addProductsToCart(product) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: product
  }
}

export function removeProductsFromCart(product) {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: product
  }
}