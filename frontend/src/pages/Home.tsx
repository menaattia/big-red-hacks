import * as React from 'react';
import { CssBaseline, Box, Container, Grid } from '@mui/material';
import Profile from '../components/Profile';
import Tabs from '../components/Tabs'
import Graph from '../components/Graph';

const HomePage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid >
        <Grid item>
          <Profile username="user" first="Test" last="User"/>
        </Grid>
      </Grid>
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