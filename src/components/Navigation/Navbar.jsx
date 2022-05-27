import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { createTheme } from '@mui/material/styles';
import Raleway from '../../assets/fonts/Raleway-VariableFont_wght.ttf';

const theme = createTheme({
  typography: {
    fontFamily: {
      fontFamily: 'Raleway',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 500;
            src: local('Raleway'), local('Raleway-Regular'), url(${Raleway}) format('ttf');
          }
        `,
      },
    },
  },
});

const Navbar = () => {
  return (
    <AppBar >
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
        </IconButton>
          <Typography
            sx={{
              fontFamily: 'Raleway',
              fontSize: '2rem'
            }}
            variant="h3"
            my={1}>Heckle Vision</Typography>
        </Toolbar>  
    </AppBar>

  )
}

export default Navbar
