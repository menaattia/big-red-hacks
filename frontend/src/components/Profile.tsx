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
      width: "100px",
      height: "100px",
      float: "right",
      margin: "15%"
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
      <Avatar {...stringAvatar(`${first} ${last}`)} ></Avatar>
      </Grid>
      <Grid item xs={8}>
          <Typography sx={{fontWeight: "bold", fontSize: "20px"}}>{`${first} ${last}`}</Typography>
          <Typography sx={{paddingBottom: "10px"}}>{`@${username}`}</Typography>
        <Grid container>
          <Grid item xs={4}>
            <Typography sx={{textAlign: "center"}}>Followers</Typography>
            <Typography sx={{textAlign: "center"}}>46</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{textAlign: "center"}}>Following</Typography>
            <Typography sx={{textAlign: "center"}}>30</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography sx={{textAlign: "center"}}>Posts</Typography>
            <Typography sx={{textAlign: "center"}}>9</Typography>
          </Grid>
          <Grid item>
          <Button
              variant="contained"
              component="label"
              sx={{marginTop: "20px", backgroundColor: "green"}}
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