import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { CssBaseline, Box, Container, Grid, Typography } from '@mui/material';


type TabsProps = {
    handleTab: (tabValue:string) => void
}

const ScrollableTabsButtonAuto = (props:TabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      const text = event.currentTarget.textContent;
      if (text != null) props.handleTab(text);
      setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Typography variant="h6">SUMMARY</Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="recycling" />
        <Tab label="zero-waste" />
        <Tab label="biking" />
        <Tab label="walking" />
      </Tabs>
    </Box>
  );
}

export default ScrollableTabsButtonAuto;
