import {
  Card,
  CardContent,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';


export default function Book({book, path}) {

  return (
    <Link
      href={`${path}/${book.id}`}
      underline='none'
    >
      {/* displayed over "sm" */}
      <Card
        className='book__card'
        sx={{
          padding: 1,
          marginBottom: 2,
          bgcolor: 'primary.content',
          display: {xs: 'none', sm: 'block'}
        }}
      >
        <TableContainer className='book__tabel-container'>
          <Table>
            <TableBody >
              <TableRow >
                <TableCell component='th'>Title</TableCell>
                <TableCell>{book.title}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell component='th'>Author</TableCell>
                <TableCell>{book.author}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell component='th'>Description</TableCell>
                <TableCell>{book.description}</TableCell>
              </TableRow>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th'>Comment</TableCell>
                <TableCell>{book.comment}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* displayed under "sm" */}
      <Card
        className='book__card'
        sx={{
          marginBottom: 2,
          bgcolor: 'primary.content',
          display: {xs: 'block', sm: 'none'}
        }}
      >
        <CardContent>
          <Typography variant='h6'>
            Title
          </Typography>
          <Typography sx={{pl: 2, mb: 3}}>
            {book.title}
          </Typography>

          <Typography variant='h6'>
            Author
          </Typography>
          <Typography sx={{pl: 2, mb: 3}}>
            {book.author}
          </Typography>

          <Typography variant='h6'>
            Description
          </Typography>
          <Typography sx={{pl: 2, mb: 3}}>
            {book.description}
          </Typography>
          
          <Typography variant='h6'>
            Comment
          </Typography>
          <Typography sx={{pl: 2, mb: 3}}>
            {book.comment}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}