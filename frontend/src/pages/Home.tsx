import * as React from 'react';
import {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '../components/Tabs'
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
        <Container fixed>
            <Box
            sx={{
                width: 500,
                height: 250
            }}
            />
            <Tabs handleTab={handleTab}></Tabs>
            <Graph data={getData()}></Graph>
        </Container>
        </React.Fragment>
    );
}

export default HomePage;