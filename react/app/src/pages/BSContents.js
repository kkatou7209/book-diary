import {
  Book,
  Footer
} from './index';

import {
  Box,
  Paper
} from '@mui/material';


export default function BSContents({books, path}) {

  return (
    <>
      <Box
        className='bs-contents__box--outer'
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
            width: {md: 900, sm: 700, xs: 500},
            height: {md: 630, xs: 650},
            padding: 2,
          }}
        >
          <Box
             sx={{
               padding: 2,
               width: '100%',
               height: '100%',
               overflowY: 'scroll',
             }}
          >
            {books.map((book) => {
              return <Book book={book} key={book.title} path={path}/>
            })}
          </Box>
        </Paper>
      </Box>
      <Footer />
    </>
  );
}