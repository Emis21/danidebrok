//TYPES
const product_list = "product_list";
const add_cart = "add_cart";
const delete_cart = "delete_cart";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case product_list:
      return { ...state, products: payload };

    case add_cart:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.products.filter((ite) => ite.id === parseInt(payload)),
        ],
      };

    case delete_cart:
      return {
        ...state,
        cart: [state.cart.filter((items) => items[0].id !== payload)],
      };
  }
  
}
