import {
  Footer
} from '../index';

import {
  Box,
  Paper
} from '@mui/material';


export default function BSContents() {
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
          
        </Paper>
      </Box>
    </>
  );
}