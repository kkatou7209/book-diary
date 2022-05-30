export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: SIGN_IN,
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      uname: userState.uname,
    }
  }
}

// export const ADD_BOOKSHELF = "ADD_BOOKSHELF";
// export const addBookshelvesAction = (userState) => {
//   return {
//     type: "ADD_BOOKSHELF",
//     payload: {
//       bookshelves: [
//         {
//           bookshelfId: userState.bookshelfId
//         }
//       ]
//     }
//   }
// }