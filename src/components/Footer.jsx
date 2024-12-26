import { Favorite } from '@mui/icons-material'
import { BottomNavigation, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import  Link from '@mui/material/Link'

export default function Footer() {
  return (
        <Box>
            <Stack direction={"row"}>
                  <Box sx={{justifyContent:'baseline',pl:5,display:'flex',alignItems:'center'}}>
                    <Typography sx={{fontSize:18}}>© 2024, made with <Favorite sx={{fontSize:15,ml:0.3,mr:0.4}}/>by Creative Tim for a better web.</Typography>
                  </Box>

                <Box sx={{pl:10}}>
                    <Link variant='span'  underline="hover" sx={{pl:3,pr:3,cursor:'pointer',color:'black',}}>Creative team</Link>
                    <Link variant='span' sx={{pl:3,cursor:'pointer'}}>About Us</Link>
                    <Link variant='span' sx={{pl:3,cursor:'pointer'}}>Blog</Link>
                    <Link variant='span' sx={{pl:3,pr:3,cursor:'pointer'}}>License</Link>
                    </Box>
            </Stack>

        </Box>
  )
}
