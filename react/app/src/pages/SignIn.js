import {
   Header,
} from './index';
import {
  AppBar,
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Link,
  Paper,
  Typography,
} from "@mui/material";


export default function SignIn() {
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
      }}>
        <Paper 
          component='form'
          elevation={5}
          sx={{
            width: 400,
            height: 400,
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
            <Input sx={{width: 300}}/>
          </FormControl>
          <FormControl >
            <InputLabel>Password</InputLabel>
            <Input sx={{width: 300}}/>
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
            <Button variant='contained'>Sign in</Button>
            <Link href='/sign-up'>You are new here? Sign up!</Link>
          </Box>
        </Paper>
    </Box>
    </>
  );
}