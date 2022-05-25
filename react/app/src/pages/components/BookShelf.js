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
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{display: 'flex', alignItems: 'center', height: 30}}>
              <LocalOffer sx={{paddingRight: 2}}/>
              <Typography fontSize={20}>
                {bookshelf.category}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>

  );
}