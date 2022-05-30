 const initialState = {
  users: {
    isSignedIn: false,
    uid: "",
    uname: "",
    bookshelves: [
      {
        bookshelfId: "",
        category: "",
        books: [
          {
            bookId: "",
            title: "",
            description: "",
            comment: "",
          }
        ],
      }
    ],
  }
}

export default initialState