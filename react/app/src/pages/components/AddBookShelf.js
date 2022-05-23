import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  OutlinedInput,
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
          padding: 5,
          paddingTop: 7,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <FormControl>
          <InputLabel
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <LocalOffer sx={{paddingRight: 1}}/>
            Tag
          </InputLabel>
          <Input
            sx={{
              width: 300
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel
            sx={{
              paddingRight: 1,
              paddingLeft: 1,
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'white'
            }}
          >
            <Edit sx={{paddingRight: 1}}/>
            Description
          </InputLabel>
          <OutlinedInput 
            multiline={true}
            rows={7}
            sx={{
              width: 300
            }}
          />
        </FormControl>
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
            sx={{height: 40, width: 100}}
          >
            Create
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}