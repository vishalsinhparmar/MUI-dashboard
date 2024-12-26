import { AddBusiness, Chair, Equalizer, EventSeat, Gradient, PersonAdd } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Divider, ListItem, ListItemIcon, ListItemText, Typography, rgbToHex } from '@mui/material'
// import { makeStyles } from '@mui/material/styles'
import React from 'react'
import Navbar from './Navbar';
import { green, grey } from '@mui/material/colors';

export default function DashboardCards() {
   const drawerWidth = 280;
   const dashboardName = [
    {
    color:"black",
    icon:<Chair/>,
    type:"Bookings",
    value:281,
    percentage:"+55%",
    time:"than lask week"
   },
   {
    color:"#2196f3",
    icon:<Equalizer/>,
    type:"Today's Users",
    value:"2,300",
    percentage:"+3%",
    time:"than last month"
   },
   {
    color:"#4caf50   ",
    icon:<AddBusiness/>,
    type:"Revenue",
    value:"34k",
    percentage:"+1% ",
    time:"than yesterday"
   },
   {
    color:"#e91e63",
    icon:<PersonAdd/>,
    type:"Followers",
    value:"+91",
    percentage:"",
    time:" Just updated"
   }
  ]
  return (
    <>
    {/* <Navbar /> */}
    {dashboardName.map((name)=>(
  <Card sx={{width:200,
       display:'inline-block',
        mt:6,
        ml:5,
      
        background:'white',
       
        height:'auto',
        zIndex:10,
        overflow :'visible',
        borderRadius:3
 }}>
  
   <Box sx={{  }}>
     <ListItem >  
       <ListItemIcon sx={{background:name.color, 
                      position:'absolute', 
                      zIndex:100,
                      borderRadius:3,
                      p:2,
                      boxShadow:3,
                      color:'white',
                      fontSize:25, 
                      borderRadius:3
                     }}>            
          {name.icon}
        </ListItemIcon> 
      </ListItem>

        <CardContent sx={{padding:0}}>
              <Typography  sx={{textAlign:'right',pr:3,color:'gray'}}>{name.type}</Typography>
              <Typography sx={{textAlign:'right',pr:3, fontWeight:600, fontSize:30}}>{name.value}</Typography>
        <Divider sx={{width:"80%", mx:'auto',
                    //  borderColor: 'linear-gradient(to right, rgba(250, 233, 2, 0.7), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))'
        }}/>
               <Box sx={{pt:2, pl:2}}> 

               <Box sx={{display:'inline', color:'green',mr:0.5}}>{name.percentage}</Box>
               <Box sx={{display:'inline',color:'grey'}}>{name.time}</Box>

              </Box>              
        </CardContent>   
    </Box>
  </Card>
  ))}
 
    </>
    )
}
