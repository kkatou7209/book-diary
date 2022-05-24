import {
  useEffect,
  useState,
} from 'react';

import {
  Book,
  Footer
} from '../index';

import {
  Box,
  Paper
} from '@mui/material';

import {
  books as bks,
} from './dataset';



export default function BSContents() {
  const [books, setBooks] = useState(bks);

  return (
    <>
      <Box
        className='bs-contents__outer-box'
        sx={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Paper
          className='bs-contents__paper'
          sx={{
            width: {md: 900, sm: 700, xs: 300},
            height: {md: 600, xs: 550},
            padding: 3,
          }}
        >
          <Box
             sx={{
               width: '100%',
               height: '100%',
               overflowY: 'scroll',
             }}
          >
            {books.map((book, key) => {
              return <Book book={book} key={key}/>
            })}
          </Box>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}