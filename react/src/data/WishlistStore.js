import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import WishlistActionTypes from './WishlistActionTypes';
import WishlistDispatcher from './WishlistDispatcher';

class WishlistStore extends ReduceStore {
  constructor() {
    super(WishlistDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case WishlistActionTypes.ADD_TO_WISHLIST:
        // Do nothing for now, we will add logic here soon!
        return state;

      default:
        return state;
    }
  }
}

export default new WishlistStore();