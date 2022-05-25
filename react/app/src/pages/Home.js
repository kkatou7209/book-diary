import {
  BookShelf,
  Footer,
} from './index';

import {
  Box,
  Grid,
} from '@mui/material';


export default function Home({bookshelves}) {
  return (
    <>
      <Box 
        sx={{
          height: 700,
          paddingLeft: {lg: 9, sm: 3, xs: 4},
          overflowY: 'scroll', 

        }}
      >
        <Grid 
          container
          spacing={2}
          sx={{
            justifyContent: 'start',
          }}>
            {bookshelves.map((bookshelf) => {
              return (
                <Grid item key={bookshelf.category}>
                  <BookShelf bookshelf={bookshelf} />
                </Grid>
              )
            })}
        </Grid>
      </Box>
      <Footer />
    </>
  )
}