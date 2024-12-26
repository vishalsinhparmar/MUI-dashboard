import { Avatar, Box, Button, Container, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Switch, Tab, Tabs, Toolbar, Typography, colors } from '@mui/material'
import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebarapp from './Sidebarapp'
import backgroundimage from '../assets/image/26182.jpg'
import headofgrowth from '../assets/image/headofgrowth.jpg'
import { Home, Message, Settings } from '@mui/icons-material'
export default function Profile() {
  const Detail = [
    {
      details1:`Email me when someone ${<br/>}follows me`
    },
    {
      details2:`Email me when someone ${<br/>}answers on my post`
    },
    {
      details2:`Email me when someone ${<br/>}mentions me`
    }
  ]
    const [data,setdata]= useState(0);
    const sethandelingTabs = (name,value)=>{

        if(name==="maintabs"){
          setdata(value)

        }
    }
    const drawerwidth = 300;
  return (
     <>

    <Box sx={{display:'flex', flexDirection:'column',backgroundColor: '#fafafa',height:'auto'}}>

          <Sidebarapp/>
          <Navbar/>
      
        <Box sx={{ml:`${drawerwidth}px`}}>
               <Toolbar/>
            
            <Box sx={{}}>

         
            <Box sx={{width:'95%',height:300,m:2,position:'relative',    borderRadius:8}}>
                <Box component='img'
                     src={backgroundimage}  
                     sx={{
                       
                        height:'100%',
                        width:'100%',
                        
                        position:'absolute',
                       borderRadius:8,
                        top:0,
                        left:0,
                        objectFit:'cover',
                       

                        // background:'linear-gradient(to bottom right,rgba(34,55,50,0.5),rgba(0,0,0,0.5))',
                     }} 
                        />
                                          
                            <Box sx={{position:'absolute',
                                     borderRadius:8,
                                      top:0,
                                      left:0,
                                      width:"100%",
                                      height:"100%",
    
                                      background: 'linear-gradient(to bottom right, rgba(0, 150, 255,0.3), rgba(0, 71, 171,0.8))',
                                     
                                        }}/>
                            
          
                           

                         </Box>     
                         <Container    sx={{width:'85%',height:'auto',backgroundColor:'white',
                         borderRadius:5,boxShadow:4,position:'relative',bottom:50,left:-10,right:0,zIndex:200}}>
                                
                              <Grid container gap={19}>

                                <Grid item>
                                        <List>
                                            <ListItem disableGutters>
                                                <ListItemAvatar >
                                                 <Avatar  src={headofgrowth} sx={{width:60,height:60,mr:3,boxShadow:3 }}/>
                                                </ListItemAvatar>
                                                <ListItemText>
                                                    <Typography variant='h6'  sx={{fontWeight:600}}>Richard Davis</Typography>
                                                    <Typography sx={{fontSize:12}}>CEO / Co-Founder</Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                </Grid>

                                <Grid item >
                               
                                           <Tabs value={data} 
                                                onChange={(e,newvalue)=>sethandelingTabs("maintabs",newvalue)} 
                                                sx={{backgroundColor:"white",m:2,p:0,borderRadius:5, color:'white', backgroundColor:'white',
                                                [`MuiTabs-scroller`]:{
                                                       backgroundColor:'lightgreen'
                                                }
                                                }}
                           
                                                TabIndicatorProps={{
                                                  style:{
                                                    // display:'none',
                                                    // backgroundColor:'lightblue'
                                                  },
                                                }}>
                                                  
                                                 <Tab color='#' sx={{color:'black'}}  icon={<Home /> } iconPosition='start' label="App"/>
                                                 
                                                 <Tab  sx={{color:'black'}} icon={<Message/> } iconPosition='start' label="Message"/>
                                                 <Tab sx={{color:'black'}} icon={<Settings/> } iconPosition='start' label="Setting"/>
                                           </Tabs>
                                </Grid>
                              </Grid>

                              <Box>
                                  <Typography component="h1" sx={{color:'black',fontWeight:500}}>Platform settings</Typography>
                                  <Grid container>
                                          <Grid item>
                                               <Typography sx={{color:'black',p:1,fontWeight:600}}>account</Typography>
                                                 <List disablePadding>
                                                    <ListItem disableGutters>
                                                       <ListItemIcon>
                                                          <Switch/>
                                                       </ListItemIcon>
                                                       <ListItemText>
                                                       Email me when someone <br/>follows me
                                                      </ListItemText>
                                                    </ListItem>
                                                 </List>
                                          </Grid>
                                  </Grid>
                              </Box>
                         </Container>


                            
                        
                         </Box>


{/* this is box of toolbar after */}
            </Box>
    
     
</Box>

          </>
  )
}
