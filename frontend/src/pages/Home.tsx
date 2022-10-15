import React, { useState } from 'react';
import { CssBaseline, Box, Container, Grid } from '@mui/material';
import Profile from '../components/Profile';
import Tabs from '../components/Tabs';
import Graph from '../components/Graph';
import Data from '../Data';
import NavBar from '../components/NavBar';
import { routes } from '../App';

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
        <NavBar headersData={routes} shadow={true} position="fixed"/>
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