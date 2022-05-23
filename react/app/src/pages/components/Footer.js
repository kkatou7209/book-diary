import {
  BottomNavigation as BtmNav,
  BottomNavigationAction as BtmNavAct,
  Box,
} from '@mui/material';

import {
  AddBox,
} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{height: 70, position: 'fixed', bottom: 0}}>
      <BtmNav sx={{bgcolor: 'primary.bg'}}>
        <BtmNavAct
          label='Add Bookshelf'
          href='/add-book-shelf'
          icon={<AddBox sx={{fontSize: 40}}/>}
        />
      </BtmNav>
    </Box>
  );
}