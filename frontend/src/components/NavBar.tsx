import React, { ReactElement, useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Hidden,
  Grid,
  Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import LeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import LogoIcon from '../assets/logo.png';
import { useLocation } from 'react-router-dom';
import './NavBar.css';

export type NavbarButton = {
  label: string;
  href: string;

};

type Props = {
  readonly headersData: NavbarButton[];
  readonly position: "fixed" | "absolute" | "sticky" | "static" | "relative" | undefined;
  readonly shadow: boolean
};

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white",
        }
      }
    }
  }
});

const styles = {
  grow: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: 'white',
    paddingBottom: '0.75em',
    margin: '0 0 1vh 0',
    paddingTop: '20px',
    height: '9vh'
  },
  logo: {
    fontWeight: 600,
    '@media only screen and (max-width: 320px) ': {
      fontSize: '1.7em',
    },
    color: 'black',
    textAlign: 'left',
    marginLeft: '10px',
    fontSize: '27px',
    lineHeight: '32px',
  },
  description: {
    color: 'black',
    textAlign: 'left',
    fontSize: '1.125em',
    '@media only screen and (max-width: 425px) ': {
      fontSize: '0.75em',
    },
    lineHeight: '20px',
    paddingTop: '10px',
  },
  toolbar: {
    display: 'flex',
    paddingLeft: 0,
  },
  drawerContainer: {
    padding: '20px 30px',
  },
  menuDrawer: {
    alignSelf: 'right',
    padding: '0px',
    color: '#54627b'
  },
  drawerButton: {
    fontFamily: 'Work Sans, sans-serif',
  },
  search: {
    width: '50%',
    paddingLeft: '3%',
  },
  searchDrawer: {
    marginBottom: '5%',
  },
  link: {
    color: 'black'
  }
};

const NavBar = ({ headersData, position, shadow }: Props): ReactElement => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const {
    header,
    logo,
    toolbar,
    drawerContainer,
    menuDrawer,
    drawerButton
  } = styles;

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  const getDrawerChoices = () => {
    return (
      <ThemeProvider theme={theme}>
        {headersData.map(({ label, href }, index) => {
          return (
            <Link component={RouterLink} to={href}  key={index}>
              <MenuItem key={index} sx={{...drawerButton}}>
                {label}
              </MenuItem>
            </Link>
          );
        })}
      </ThemeProvider>
    );
  };

  const getMenuButtons = () => {
    return (
      <ThemeProvider theme={theme}>
        {headersData.map(({ label, href }, index) => {
          return (
            <button key={index} className="menuButton" style={{color: 'white'}}>
              <RouterLink to={href} className="link">{label.toUpperCase()}</RouterLink>
            </button>
          );
        })}
      </ThemeProvider>
    );
  };

  const homeLogo: ReactElement = (
    <Grid container alignItems="center">
      <Grid item>
        <Typography sx={{...logo}}>
          <Link sx={{color: '#547b63'}} color="textPrimary" underline="none" href="/">
            <LeafIcon/>
            Sustainable Life
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );

  const displayDesktop = (): ReactElement => {
    return (
      <Grid container sx={{...toolbar}} alignItems="center">
        <Grid item md={7}>
          {homeLogo}
        </Grid>
        <Grid item md={5} sx={{height: "100%"}}>
          {getMenuButtons()}
        </Grid>
      </Grid>
    );
  };

  const displayMobile = (): ReactElement => {
    return (
      <Toolbar sx={{...toolbar}}>
        <Grid container>
          <Grid item xs={11}>
            <div>{homeLogo}</div>
          </Grid>
          <Grid item xs={1}>
          <IconButton
          sx={{...menuDrawer}}
          {...{
            edge: 'start',
            color: 'default',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: () => setDrawerOpen(true),
          }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          </Grid>
        </Grid>
        
        
        <Drawer
          {...{
            anchor: 'right',
            open: drawerOpen,
            onClose: () => setDrawerOpen(false),
          }}
        >
          <div style={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar position={position} sx={{...header}} style={!shadow ? {boxShadow: "none"} : {}}>
        <Container maxWidth="lg">
          <Hidden only={['md', 'lg', 'xl']}>{displayMobile()}</Hidden>
          <Hidden only={['sm', 'xs']}>{displayDesktop()}</Hidden>
        </Container>
      </AppBar>
    </header>
  );
};

export default NavBar;