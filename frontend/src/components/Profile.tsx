import React from 'react';
import { Avatar, Grid, Container, Typography } from '@mui/material';

type Props = {
  username: string,
  first: string,
  last: string
}


const Profile = ({username, first, last}: Props) => {
  return <>
  <Container sx={{margin: "7%"}}>
    <Grid container>
      <Grid item xs={4}>
      <Avatar>{username[0].toUpperCase()}</Avatar>
      </Grid>
      <Grid item xs={8}>
        <Typography>{`${first} ${last}`}</Typography>
        <Typography>{`@${username}`}</Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography>Followers</Typography>
            <Typography>46</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Following</Typography>
            <Typography>30</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  </Container>
  </>
}

export default Profile;