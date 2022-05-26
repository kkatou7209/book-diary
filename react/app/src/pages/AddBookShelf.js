import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Paper,
} from '@mui/material';

import {
  LocalOffer,
  Edit,
} from '@mui/icons-material';

export default function AddBookShelf() {
  return (
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
          width: 400,
          height: 400,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <TextField
          label={<LocalOffer />}
          sx={{
            width: 300,
            marginTop: 4,
          }}
        />
        <TextField
          label='Description'
          multiline={true}
          rows={6}
          sx={{
            width: 300,
            marginTop: 4
          }}
        />
        <Box
          sx={{
            width: '100%',
            height: 70,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'flex-end'
          }}
        >
          <Button
            href='/'
            variant='contained'
            sx={{
              height: 40,
              width: 100,
              marginRight: 3
            }}
          >
            Create
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}