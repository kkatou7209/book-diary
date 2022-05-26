import {
  Box,
  IconButton,
  Paper,
  Typography
} from '@mui/material';

import {
  Edit as EditIcon,
} from '@mui/icons-material';

export default function BookDetail({book, path}) {
  return (
    <Box
      className='book-detail__box--outer'
      sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        className='book-detail__paper'
        sx={{
          width: {md: 900, sm: 700, xs: 300},
          height: {md: 600, xs: 550},
          padding: 3,
          position: 'relative'
        }}
      >
        <IconButton href={path} sx={{position: 'absolute', top: 20, right: 20, bgcolor: 'white'}}>
          <EditIcon />
        </IconButton>
        <Box
          sx={{
            height: '100%',
            overflowY: 'scroll',
            paddingRight: 4,
            '& .book-detail__title': {
              marginBottom: 1
            },
            '& .book-detail__passage': {
              marginBottom: 5,
              paddingLeft: 2,
            },
          }}
        >
          <Typography variant='h6' className='book-detail__title'>
            Title
          </Typography>
          <Typography className='book-detail__passage'>
            {book.title}
          </Typography>
          <Typography variant='h6' className='book-detail__title'>
            Author
          </Typography>
          <Typography className='book-detail__passage'>
            {book.author}
          </Typography>
          <Typography variant='h6' className='book-detail__title'>
            Description
          </Typography >
          <Typography className='book-detail__passage'>
            {book.description}
          </Typography>
          <Typography variant='h6' className='book-detail__title'>
            Comment
          </Typography>
          <Typography className='book-detail__passage'>
            {book.comment}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}