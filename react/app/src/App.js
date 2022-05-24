import { 
  useState,
} from 'react';

import {
  Container, 
  createTheme,
  ThemeProvider,
} from '@mui/material';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  AddBookShelf,
  BSContents,
  Header,
  Home,
  SignIn,
  SignUp,
} from './pages/index';

export default function App() {
  const [login, setLogin] = useState(false);

  

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
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        color='primary'
        sx={{height: '100vh', bgcolor: 'primary.bg'}}
      >
        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sign-in' element={<SignIn />}/>
            <Route path='/sign-up' element={<SignUp />}/>
            <Route path='/add-book-shelf' element={<AddBookShelf />} />
            <Route path='/bs-contents' element={<BSContents />} />
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}


