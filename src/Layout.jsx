import React from 'react'
import Navbar from './components/Navbar'

import Sidebarapp from './components/Sidebarapp'
import DashboardCards from './components/DashboardCards'
import { Box, Stack, Toolbar } from '@mui/material'
import Chartcomponents from './components/Chartcomponents'
import Projectdetail from './components/Projectdetail'
import Footer from './components/Footer'

export default function Layout() {
  const drawerWidth = 280;
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column',backgroundColor: '#fafafa'}}>

 <Sidebarapp/>
<Navbar/>
   <Box sx={{
 

    ml:`${drawerWidth}px`,
  
  
   }}>
      <Toolbar/>
  <DashboardCards/>
  <Toolbar/>
  <Chartcomponents/>
  <Projectdetail/>
  <Footer/>
   </Box>
  </Box>

  </>
  )
}
