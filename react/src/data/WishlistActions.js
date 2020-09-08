import WishlistActionTypes from './WishlistActionTypes';
import WishlistDispatcher from './WishlistDispatcher';

const Actions = {
  addTodo(text) {
    WishlistDispatcher.dispatch({
      type: WishlistActionTypes.ADD_TO_WISHLIST,
      text,
    });
  },
};

export default Actions;