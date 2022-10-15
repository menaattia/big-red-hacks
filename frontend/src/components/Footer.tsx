import React from 'react';
import {Box, Typography} from '@mui/material';

export default function Footer() {
  return <Box sx={{backgroundColor: '#547b63', color: 'white', height:"6vh",textAlign: "center"}}>
  <Typography>
  {`\u00A9 ${new Date().getFullYear()}. Null Pointer Exception @Big Red Hacks, Cornell University.`}
  </Typography>
</Box>
}