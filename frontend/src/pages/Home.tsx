import React, { useState } from 'react';
import { CssBaseline, Box, Container, Grid } from '@mui/material';
import Profile from '../components/Profile';
import Tabs from '../components/Tabs';
import Graph from '../components/Graph';
import Data from '../Data'

const HomePage = () => {
    const [tab, setTab] = useState<string>("recycling");

    const handleTab = (tabValue:string) => {
        setTab(tabValue)
    } 

    const getData = () => {
        if (tab === "biking") {
            return Data.biking
        } else if (tab === "walking") {
            return Data.walking
        } else if (tab === "zero-waste") {
            return Data.zero_waste
        } else {
            return Data.recycling
        }
    }

    return (
        <React.Fragment>
        <CssBaseline />
        <Grid >
          <Grid item>
            <Profile username="user" first="Test" last="User"/>
          </Grid>
        </Grid>
        <Container fixed>
            <Tabs handleTab={handleTab}></Tabs>
            <Graph data={getData()}></Graph>
        </Container>
        </React.Fragment>
    );
}

export default HomePage;