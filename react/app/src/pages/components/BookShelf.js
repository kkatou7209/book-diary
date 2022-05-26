import {
  Box,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

import {
  LocalOffer,
} from '@mui/icons-material';

export default function BookShelf({bookshelf}) { 

  return (
    <>
      <Link href={`/bs-contents/${bookshelf.id}`} underline='none'>
        <Card
          sx={{
            width: 300,
            height: 300,
          }}
        >
          <CardContent
            sx={{
              height: 268,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              fontSize={30}
              sx={{
                display: 'inline-flex',
                textAlign: 'center',
                alignItems: 'center',
                marginBottom: 2
              }}
            >
              <LocalOffer sx={{marginRight: 2}}/>
              {bookshelf.category}
            </Typography>
            <Typography fontSize={20}>
              Volume {bookshelf.books.length}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>

  );
}