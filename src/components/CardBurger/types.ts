import { MenuItem } from '../../api/menuApi';

export interface CartBurgerProps {
  burger: MenuItem;
  setBurgerSelected: (burger: MenuItem) => void;
  setModalIsOpen: (isOpen: boolean) => void;
}

interface CardState {
  currentCart: any[];
}

export interface RootState {
  cartReducer : CardState;
}