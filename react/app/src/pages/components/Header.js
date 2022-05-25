import {
  AppBar,
  Box,
  Link,
  Typography,
} from '@mui/material';

export default function Header() {
  return (
    <Box sx={{height: 100}}>
      <AppBar
        elevation={0}
        sx={{
          bgcolor: 'transparent',
          paddingTop: 4,
          paddingLeft: {sm: 4, xs: 0},
          display: {sm: 'block', xs: 'flex'},
          flexDirection: {xs: 'row'},
          justifyContent: {xs: 'center'},
          position: 'static'
        }}
      >
        <Typography variant="h4" sx={{fontWeight: 'bold'}}>
          <Link 
            href='/' 
            color='inherit'
            underline='none'
          >
            BOOK DIARY
          </Link>
        </Typography>
      </AppBar>
    </Box>

  )
}