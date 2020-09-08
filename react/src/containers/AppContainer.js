import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import WishlistStore from '../data/WishlistStore';

function getStores() {
  return [
    WishlistStore,
  ];
}

function getState() {
  return {
    wishlist: WishlistStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);