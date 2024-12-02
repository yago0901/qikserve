export interface IcartItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  amount: number;
}

interface IPayload {
  cartItem: IcartItem;
}

interface IAction {
  type: string;
  payload: IPayload;
}

const initialState = {
  currentCart: [] as IcartItem[],
}

const cartReducer = (state = initialState, action:IAction) => {
  switch (action.type) {
    case 'cart/add':
      return {
        ...state,
        currentCart: [...state.currentCart, action.payload.cartItem]
      };

    case 'cart/updateAmount':
      return {
        ...state,
        currentCart: state.currentCart.map((item) =>
          item.id === action.payload.cartItem.id
            ? { ...item, amount: action.payload.cartItem.amount }
            : item
        )
      };

    default:
      return state;
  }
};

export default cartReducer;