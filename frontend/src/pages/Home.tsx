import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '../components/Tabs'
import Graph from '../components/Graph';

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
        <Graph></Graph>
      </Container>
    </React.Fragment>
  );
}

export default HomePage;