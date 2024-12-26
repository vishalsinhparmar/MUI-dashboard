import { AppBar, Box, CssBaseline, Dialog, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Table, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from './Navbar'

import { AccountCircle, BarChart, Calculate, Camera, Dashboard, FormatTextdirectionLToR, HowToReg, Login, Notifications, Receipt, RequestQuote, TableBar, TableBarSharp, TableBarTwoTone, TableChart, TableChartSharp } from '@mui/icons-material'
// import { Link } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Sidebarapp() {
  const drawerWidth = 280;


  const [selectIndex, setSelectIndex]=useState(1);
  const HandelListClickitem = (event,index)=>{
    setSelectIndex(index)
  }
  const iconMap =[
    { 
      number:1,
      Linkitem:'/dashboard',
      name:"Dashboard",
      icon:<Dashboard/>
    },
    {
      number:2,
      Linkitem:'/tables',
      name:"Tables",
      icon:<TableChartSharp/>
    },
    {
      number:3,
      Linkitem:'/billing',
      name:"Billing",
      icon:<Receipt/>
    },
    {
      number:4,
      Linkitem:'rtl',
      name:"RTL",
      icon:<FormatTextdirectionLToR/>
    },
    {
      number:5,
      Linkitem:'/notification',
      name:"Notification",
      icon:<Notifications/>
    },
    {
      number:6,
      Linkitem:'/profile',
      name:"Profile",
      icon:<AccountCircle/>
    },
    {
      number:7,
      Linkitem:'/signin',
      name:"Sign In",
      icon:<Login/>
    },
    {
      number:8,
      Linkitem:'/signup',
      name:"Sign Up",
      icon:<HowToReg/>
    },
  ]


  
  return (
    
   <Box sx={{display:{xs:'none',md:'flex'}, blorderRadius:"5px"}} >
    
    <Dialog >
     <Dashboard />
     </Dialog>
     <Drawer  sx={{
           
         width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left">
      {/* <Toolbar/> */}
      
      <List  sx={{backgroundColor:"black", color:"white",borderRadius:"13px", margin:"2px", marginTop:'10', marginRight:"4"}} >
      
         
                  
            
           <ListItem >
                 <ListItemButton disableGutters >
                <ListItemIcon>
              <Camera sx={{color :'white',cursor:'pointer', fontSize:36}} />
              </ListItemIcon>
              <ListItemText sx={{padding:'15px 0'}} > Material Dashboard2
      </ListItemText>
      </ListItemButton>
      </ListItem>
              
            
            <Divider sx={{backgroundColor:'rgb(200, 200, 200,0.4)',width:"75%",mx:'auto',mb:2}}/>

        {iconMap.map((routes)=>(
          
            <Link  to={routes.Linkitem}  sx={{textDecoration:'none'}}>
          <ListItem sx={{color:'white',}} >
                    
                     <ListItemButton sx={{width:"100%",borderRadius:4, '&.Mui-selected': {
            backgroundColor: 'rgba(28, 128, 210, 0.9)', // Change to your desired color
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.9)', 
              // Change to your desired hover color
              textDecoration:'none'
            },
          }}} selected={selectIndex === routes.number} 
                                                onClick={(event)=>HandelListClickitem(event,routes.number)}>
                     <ListItemIcon  sx={{fontSize:30,color:'white'}}>
                            {/* <Dashboard sx={{fontSize:30,color:'white'}}/> */}
                            {routes.icon}
                       </ListItemIcon>
                     <ListItemText>{routes.name}</ListItemText>
                    </ListItemButton>
                
                    </ListItem>
                    </Link>
        ))}
             
           

                

      </List>
      </Drawer>
   </Box>

  
  )
}
