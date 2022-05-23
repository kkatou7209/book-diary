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
        sx={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Paper
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