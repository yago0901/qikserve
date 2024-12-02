import { combineReducers } from 'redux';

import cartReducer from './cart/reducer';

const rootReducer = combineReducers({cartReducer});

export type RootState = ReturnType<typeof rootReducer>; 
export default rootReducer;