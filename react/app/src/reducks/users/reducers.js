import * as Actions from './actions';
import initialState from '../store/initialState';

export default function UsersReducer(state = initialState.users, action) {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      }
    // case Actions.ADD_BOOKSHELF:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   }
      default:
        return state
  }
}

