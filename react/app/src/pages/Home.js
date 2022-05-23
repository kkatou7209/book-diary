import {
  BookShelf,
  Footer,
} from './index';

import {
  Box,
  Grid,
} from '@mui/material';


export default function Home() {
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
          <Grid item >
            <BookShelf/>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}