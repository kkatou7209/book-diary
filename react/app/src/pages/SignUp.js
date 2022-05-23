
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
} from '@mui/material';

export default function SignUp() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh'
        }}
      >
        <Paper 
          component='form'
          elevation={5}
          sx={{
            width: {sm: 400, xs: 200},
            height: {sm: 400, xs: 300},
            padding: 5,
            paddingBottom: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <FormControl>
            <InputLabel>Username</InputLabel>
            <Input sx={{width: {sm: 300, xs: 220}}}/>
          </FormControl>
          <FormControl >
            <InputLabel>Password</InputLabel>
            <Input sx={{width: {sm: 300, xs: 220}}}/>
          </FormControl>
          <Box 
            sx={{
              height: 70,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}
          >
            <Button variant='contained'>Sign up</Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}