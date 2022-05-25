import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";

import {
  ArrowForward,
  LocalOffer,
} from '@mui/icons-material';

export default function BookShelf() {
  
  return (
    <Link href='/bs-contents' underline='none'>
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
              Philosophy
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>

  );
}