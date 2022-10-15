import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '../components/Tabs'

const HomePage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
        sx={{
            width: 500,
            height: 250
        }}
        />
        <Tabs></Tabs>
      </Container>
    </React.Fragment>
  );
}

export default HomePage;