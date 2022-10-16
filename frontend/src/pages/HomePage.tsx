import React, {useRef} from 'react';
import { Box,
  Button, 
  Container, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  Typography } from '@mui/material';
import HomeImg from '../components/HomeImg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { routes } from '../App';
// import { Link as RouterLink } from 'react-router-dom';
import InsightsIcon from '@mui/icons-material/Insights';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import './HomePage.css';


export default function Home() {
  const sectionRef = useRef(document.createElement('div'));
  
  const executeScroll = () => sectionRef.current.scrollIntoView()    

  return <>
        
          <section style={{minHeight: "82vh", padding: "7vh 2vw 7vh 0", overflow: "auto"}}>
          <NavBar headersData={routes} shadow={false} position="fixed"/>
          <Container>
              <Grid container sx={{position: "relative"}}>
                <Grid item xs={12} sm={6}>
                  <div style={{marginLeft: "1em"}}>
                    <HomeImg />
                  </div>
                  
                </Grid>
                <Grid item  xs={12} sm={6}>
                  <Box style={{position: "absolute"}}>
                    <div className="home">
                    <Typography variant="h3" color="#547b63">
                      Together for a More Sustainable World
                    </Typography>
                    <Typography variant="h5" color="#547b63">
                      Join thousands of other people to do your part in creating a more sustainable world by keeping track of your progress and taking part in challenges.
                    </Typography>
                    <Button onClick={executeScroll} variant="contained" style={{backgroundColor: "#547b63", color: "white", margin: "2em 0"}}>
                      Learn more
                    </Button>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section>
          <section ref={sectionRef} style={{backgroundColor: "#547b63", minHeight: "82vh", padding: "6vh 0"}}>
          <Container maxWidth="md" sx={{ 
              paddingTop: "2em",
            }}>
            <Grid container sx={{color: "rgb(25, 29, 63)"}}>
              <Grid item sm={7}>
              <List sx={{textAlign: "left"}}>
                <ListItemIcon >
                  <InsightsIcon sx={{paddingLeft: "0.5em", fontSize: "50px", color: "white"}}/>
                </ListItemIcon>
                <ListItem sx={{color: "white"}}>
                  <Typography sx={{fontSize: "26px"}}>Keep track of your weekly progress on activities that are more sustainable for the environment</Typography>
                </ListItem>
              </List>
              </Grid>
              <Grid item sm={5}>

              </Grid>
              <Grid item sm={5}>
                
              </Grid>
              <Grid item sm={7}>
              <List sx={{textAlign: "left"}}>
                <div className="home2">
                  <ListItemIcon>
                    <EmojiEventsIcon sx={{paddingLeft: "0.5em", fontSize: "50px", color: "white"}}/>
                  </ListItemIcon>
                </div>
                <ListItem sx={{color: "white"}}>
                  <Typography sx={{fontSize: "26px"}}>Take part in challenges and win cash prizes</Typography>
                </ListItem>
              </List>
              </Grid>
              <Grid item sm={7}>
                <List sx={{textAlign: "left"}}>
                  <ListItemIcon>
                    <PeopleIcon sx={{paddingLeft: "0.5em", fontSize: "50px", color: "white"}}/>
                  </ListItemIcon>
                  <ListItem sx={{color: "white"}}>
                    <Typography sx={{fontSize: "26px"}}>Find a community to support your efforts and motivate you to do better</Typography>
                  </ListItem>
              </List>
              </Grid>
              <Grid item sm={5}>
                
              </Grid>
            </Grid>
            </Container>
          </section>
          <section>
            <Footer />
          </section>
          
        
      </>
}