import { 
  useState,
} from 'react';

import {
  Container, 
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  AddBookShelf,
  BookDetail,
  BSContents,
  EditBookDetail,
  Header,
  Home,
  SignIn,
  SignUp,
} from './pages/index';

import {
  bookshelves_data,
} from './pages/components/dataset';

export default function App() {
  const [bookshelves, setBookshelves] = useState(bookshelves_data);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#DEA057',
        bg: '#E0D8B0',
        content: '#F9EBC8'
      },
    }
  })

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container
          maxWidth={false}
          color='primary'
          sx={{height: '100vh', bgcolor: 'primary.bg'}}
        >
          <Header />
          <Router>
            <Routes>
              <Route path='/' element={<Home bookshelves={bookshelves}/>}/>
              <Route path='/sign-in' element={<SignIn />}/>
              <Route path='/sign-up' element={<SignUp />}/>
              <Route path='/add-book-shelf' element={<AddBookShelf />} />
              {bookshelves.map((bookshelf) => {
                return (
                  bookshelf.books.map((book) => {
                    return (
                      <Route
                        key={`route to BookDetail of ${book.title}`}
                        path={`/book-detail/${bookshelf.id}/${book.id}`}
                        element={<BookDetail key={book.title} book={book} path={`/edit-book-detail/${bookshelf.id}/${book.id}`}/>}
                      />
                    )
                  })
                )
              })}
              {bookshelves.map((bookshelf) => {
                return (
                  bookshelf.books.map((book) => {
                    return (
                      <Route
                        key={`route to EditBookDetail of ${book.title}`}
                        path={`/edit-book-detail/${bookshelf.id}/${book.id}`}
                        element={<EditBookDetail key={book.title} book={book} path={`/book-detail/${bookshelf.id}/${book.id}`}/>}
                      />
                    )
                  })
                )
              })}
              {bookshelves.map((bookshelf) => {
                return (
                  <Route
                    key={`route to BSContent of ${bookshelf.category}`}
                    path={`/bs-contents/${bookshelf.id}`}
                    element={<BSContents key={bookshelf.category} books={bookshelf.books} path={`/book-detail/${bookshelf.id}`}/>}
                  />
                )
              })}
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
}


