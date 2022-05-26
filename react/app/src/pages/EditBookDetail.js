import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

export default function EditBookDetail({book, path}) {
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
        <Box
          sx={{
            height: {md: 500, xs: 500},
            overflowY: 'scroll',
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
          <FormControl className='book-detail__passage' sx={{width: '20rem'}}>
            <TextField
              defaultValue={book.title}
              InputProps={{maxLength: 100, pattern: "^[a-zA-Z]"}}
            />
          </FormControl>
          <Typography variant='h6' className='book-detail__title'>
            Author
          </Typography>
          <FormControl className='book-detail__passage' sx={{width: '20rem'}}>
            <TextField
              defaultValue={book.author}
              InputProps={{maxLength: 100, pattern: "^[a-zA-Z]"}}
            />
          </FormControl>
          <Typography variant='h6' className='book-detail__title'>
            Description
          </Typography >
          <FormControl className='book-detail__passage' sx={{width: '52rem'}}>
            <TextField
              defaultValue={book.description} 
              multiline={true}
              rows={3}
              sx={{
                overflowY: 'scroll'
              }}
            />
          </FormControl>
          <Typography variant='h6' className='book-detail__title'>
            Comment
          </Typography>
          <FormControl className='book-detail__passage' sx={{width: '52rem'}}>
            <TextField
              defaultValue={book.comment}
              multiline={true}
              rows={6}
              sx={{
                overflowY: 'scroll'
              }} 
            />
          </FormControl>
        </Box>
        <Button
          href={path}
          variant='contained'
          sx={{
            position: 'absolute',
            right: 20,
            bottom: 20
          }}
        >
          Complete
        </Button>
      </Paper>
    </Box>
  );
}