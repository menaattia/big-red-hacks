import React, { useState } from 'react';
import { CssBaseline, Container, Grid, Typography } from '@mui/material';
import Profile from '../components/Profile';
import Tabs from '../components/Tabs';
import Graph from '../components/Graph';
import Data from '../Data';
import NavBar from '../components/NavBar';
import ImageGrid from '../components/ImageGrid';
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
        <div style={{paddingTop: "12vh"}}>
        <NavBar headersData={routes} shadow={true} position="fixed"/>
        <CssBaseline />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Profile username="user" first="Test" last="User"/>
          </Grid>
          <Grid item xs={12} md={5}>
            <ImageGrid />
          </Grid>
          <Container fixed>
            <Typography variant="h5">Summary:</Typography>
            <Tabs handleTab={handleTab}></Tabs>
            <Graph data={getData()}></Graph>
        </Container>
        </Grid>
        </div>
    );
}

export default HomePage;