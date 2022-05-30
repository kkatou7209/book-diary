import { signInAction } from "./actions";
import { push } from 'connected-react-router';

export const signIn = (email, password) => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      // const userData = await emailSignIn(email, password)
      dispatch(signInAction({
        isSignedIn: true,
        uid: "00001",
        uname: "katoken"
      }))
      dispatch(push('/'))
    }
  }
}