  import { AccountCircle, Home,Notifications,Rowing,Search, Settings} from '@mui/icons-material'
  import { AppBar, Badge, Box, Button, CssBaseline, Grid, IconButton, InputBase, TextField, Toolbar, Tooltip, Typography, colors } from '@mui/material'
  // import { dark, light } from '@mui/material/styles/createPalette'
  // import {} from '@mui/material/colors'
  import React from 'react'

  // import {styled,alpha} from '@mui/material/styles'


  
  export default function Navbar() {
  const drawerWidth= 280;


    return (
        <>
        
        <Box >
          <CssBaseline/>
          <Grid container direction='row'>
        <AppBar sx={{ position:'fixed', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, pb:2, borderRadius:3
       
          }}>
      <Toolbar>
       
          <Grid item xs direction=''>
            <IconButton 
            size='large'
            edge="start"
            aria-label="open drawer"
            fontWeight={500}
            >
              <Home color={'dark'} />
              </IconButton >
              <Typography color={'#1c1c1c'}  sx={{display:'inline-block ' ,p:0}} >
              /Dashboard
            </Typography >
            <Typography color={'#1c1c1c'}  sx={{display:'block'}} fontWeight={600}>
              Dashboard
            </Typography >
           
           
         
            </Grid>

            <Grid item xl={6} >
            <TextField sx={{ display:'flex',alignItems:'center'}}
            label="Search here"
           variant="outlined"
           size="small"
            />
          
          </Grid >
          <Tooltip title="Account Setting">
             <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
             
              aria-haspopup="true"
              
              color="black"
            >
            
              
              <AccountCircle />
            </IconButton>
            </Tooltip>

            <Tooltip title="Setting">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="black"
            >
              <Settings />
            </IconButton>
            </Tooltip>

            <Tooltip title="Manage Notification">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="black"
            >
              <Badge badgeContent={5} color='primary'>
              <Notifications />
              </Badge>
            </IconButton>
            </Tooltip>
            </Toolbar>
           
        </AppBar>
               </Grid>
               <Button>
      </Button>
          
          </Box>
    


        
     
        </>
    )
  }
