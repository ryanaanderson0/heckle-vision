import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { createTheme } from '@mui/material/styles';


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
          <Typography>Hello</Typography>
        </Toolbar>  
    </AppBar>

  )
}

export default Navbar
