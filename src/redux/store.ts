import {createStore} from 'redux';

import rootReducer from './root-reducer.ts';

const store = createStore(rootReducer);

export default store;