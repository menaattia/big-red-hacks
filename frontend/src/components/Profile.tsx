import React from 'react';
import axios from 'axios';
import { Avatar,Button, Grid, Container, Typography } from '@mui/material';

type Props = {
  username: string,
  first: string,
  last: string
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function uploadFile(e: React.FormEvent<HTMLInputElement>) {
  e.preventDefault()
   const result = (e.target as HTMLInputElement).files
   const result1 = result !== null? result[0].name : ""
   console.log(result1)
   axios.post('/', {
    src: result1
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}


const Profile = ({username, first, last}: Props) => {
  return <>
  <Container sx={{margin: "7%"}}>
    <Grid container>
      <Grid item xs={4}>
      <Avatar {...stringAvatar(`${first} ${last}`)} >{username[0].toUpperCase()}</Avatar>
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
          <Grid item>
          <Button
              variant="contained"
              component="label"
            >
              Upload Image
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/jpg"
                hidden
                onChange={uploadFile}
              />
          </Button> 
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  </Container>
  </>
}

export default Profile;