import { Avatar, Box, Button, Container, Icon, LinearProgress, List, ListItem, ListItemAvatar, ListItemText, Stack, Table, TableBody, TableCell, TableContainer, TableHead, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Sidebarapp from './Sidebarapp'
import Footer from './Footer'
import Asana from '../assets/image/Asana.png'
import GitHub from '../assets/image/GitHub.png'

import Atlassian from '../assets/image/Atlassian.png'
import Spotify from '../assets/image/Spotify.jpg'
import slachimg from '../assets/image/Slack.jpg'
import Invision from '../assets/image/Invision.png'



import appdev from '../assets/image/app_developer.jpg'
import appdeveloper from '../assets/image/appdeveloper.jpg'
import headofgrowth from '../assets/image/headofgrowth.jpg'
import videoeditor from '../assets/image/vidio.jpg'
import { lime } from '@mui/material/colors'
import { dark } from '@mui/material/styles/createPalette'
import { MoreVert } from '@mui/icons-material'
export default function MyTableFile() {
  const drawerWidth = 300
  const theme = createTheme({
    palette:{
      primary:{
        main:'#1c1c1c',
        
        
      },
      secondary:{
        main:'#1c1c1c',
      },
      
      
    }
  })
 // table 2 data

  const Tabledata = [
    {
      listItem:<List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={Asana} />
        </ListItemAvatar>
             <ListItemText>
              <Typography sx={{fontWeight:700,padding:0,fontSize:14}}>
              Asana
              </Typography>
              
             </ListItemText>
      </ListItem>
</List> ,
         price:	"$2,500",
         status:"working",
         progress:<Stack direction={"row"} display={'flex'} alignItems={'baseline'}>
                 <Box paddingRight={1}>60%</Box>
                  <LinearProgress variant='determinate'  
                    sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}} 
                     value={70}/>  </Stack> ,
         IconItem:<MoreVert/>                                                
    },
    {
      listItem:<List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={GitHub} />
        </ListItemAvatar>
             <ListItemText>
              <Typography sx={{fontWeight:700,padding:0,fontSize:14}}>
              Github
              </Typography>
              
             </ListItemText>
      </ListItem>
</List> ,
         price:	"$5,000",
         status:"done",
         progress:<Stack direction={"row"} display={'flex'} alignItems={'baseline'}><Box paddingRight={1}>100%</Box> 
         <LinearProgress variant='determinate'  color='success'
                   sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  
                       value={100}/> </Stack>, 
          IconItem:<MoreVert/>                                                 
    },
    {
      listItem:<List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={Atlassian} />
        </ListItemAvatar>
             <ListItemText>
              <Typography sx={{fontWeight:700,padding:0,fontSize:14}}>
              Atlassian
              </Typography>
              
             </ListItemText>
      </ListItem>
</List> ,
         price:	"$3,400",
         status:"canceled",
         progress:<Stack direction={"row"} display={'flex'} alignItems={'baseline'}><Box paddingRight={1}>30%</Box> 
         <ThemeProvider theme={theme}>
          <LinearProgress variant='determinate' color='success'
                   sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee',color:'red'}}  
                       value={30}/></ThemeProvider> </Stack>,
        IconItem:<MoreVert/>                                                                
    },
    {
      listItem:<List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={Spotify} />
        </ListItemAvatar>
             <ListItemText>
              <Typography sx={{fontWeight:700,padding:0,fontSize:14}}>
              Spotify
              </Typography>
              
             </ListItemText>
      </ListItem>
</List> ,
         price:	"$14,000",
         status:"working",
         progress:<Stack direction={"row"} display={'flex'} alignItems={'baseline'}><Box  paddingRight={1}>80%</Box> 
         <LinearProgress variant='determinate'  
                   sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  
                       value={80}/> </Stack> ,
         IconItem:<MoreVert/>                                                                
    },
    {
      listItem:<List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={slachimg} />
        </ListItemAvatar>
             <ListItemText>
              <Typography sx={{fontWeight:700,padding:0,fontSize:14}}>
              Slack
              </Typography>
              
             </ListItemText>
      </ListItem>
</List> ,
         price:	"$1,000",
         status:"canceled",
         progress:<Stack direction={"row"} display={'flex'} alignItems={'baseline'}><Box  paddingRight={1}>0%</Box> 
         <LinearProgress variant='determinate'
                   sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  
                       value={0}/> </Stack> ,
           IconItem:<MoreVert/>                                                                 
    },
    {
      listItem:<List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={Invision} />
        </ListItemAvatar>
             <ListItemText>
              <Typography sx={{fontWeight:700,padding:0,fontSize:14}}>
              Invesion
              </Typography>
              
             </ListItemText>
      </ListItem>
</List> ,
         price:	"$2,300",
         status:"	done",
         progress:<Stack direction={"row"} display={'flex'} alignItems={'baseline'}><Box paddingRight={1}>	
         100%
         </Box> 
         <LinearProgress variant='determinate' color='success' 
                   sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  
                       value={100}/> </Stack>  ,
          IconItem:<MoreVert/>                                                            
    },
  ]

  // table 1 data

  const Tablebody = [
    {
      listItem: <List disablePadding>
                      <ListItem disablePadding>
                        <ListItemAvatar>
                          <Avatar src={appdeveloper} />
                        </ListItemAvatar>
                             <ListItemText>
                              <Typography sx={{fontWeight:600,padding:0,fontSize:14}}>
                              John Michael
                              </Typography>
                              <Typography sx={{fontWeight:300,padding:0,margin:0,fontSize:12}}>
                              john@creative-tim.com
                              </Typography>
                             </ListItemText>
                      </ListItem>
                </List>   ,
        FunctionItem: <List>
        <Typography sx={{fontSize:13,fontWeight:600}}>Manager </Typography>
        <Typography sx={{fontSize:13,fontWeight:300}}>Organization  </Typography>
        </List>,
        status:  
        <ThemeProvider theme={theme}>
        <Button sx={{p:0.9,py:0.2,minWidth:10,fontSize:8}} variant='contained' color='success'>online</Button>
        </ThemeProvider>,
        employed:"23/04/18",
         Action:"Edit"

    },
    {
      listItem: <List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={videoeditor} />
        </ListItemAvatar>
             <ListItemText>
             <Typography sx={{fontWeight:600,padding:0,fontSize:14}}>
              Alexa Liras
              </Typography>
              <Typography sx={{fontWeight:300,padding:0,margin:0,fontSize:12}}>

              alexa@creative-tim.com
              </Typography>
             </ListItemText>
      </ListItem>
</List>   ,
FunctionItem: <List>
        <Typography sx={{fontSize:13,fontWeight:600}}> Programator</Typography>
        <Typography sx={{fontSize:13,fontWeight:300}}>Developer</Typography>
</List>,
status:   <ThemeProvider theme={theme}>
  <Button sx={{p:0.9,py:0.2,minWidth:10,fontSize:8}}  variant='contained' color='primary'>OFFLINE</Button>
</ThemeProvider> ,
  
employed:"11/01/19",
Action:"Edit"
    },
    {
      listItem: <List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={headofgrowth} />
        </ListItemAvatar>
             <ListItemText>
             <Typography sx={{fontWeight:600,padding:0,fontSize:14}}>

              Laurent Perrier
              </Typography>
              <Typography sx={{fontWeight:300,padding:0,margin:0,fontSize:12}}>
              Laurent Perrierlaurent@creative-tim.com
              </Typography>
             </ListItemText>
      </ListItem>
</List>   ,
FunctionItem: <List>
        <Typography sx={{fontSize:13,fontWeight:600}}> Executive</Typography>
        <Typography sx={{fontSize:13,fontWeight:300}}>Projects</Typography>
</List>,
status:  <Button sx={{p:0.9,py:0.2,minWidth:10,fontSize:8}}   variant='contained' color='success'>ONLINE</Button>,
employed:"19/09/17",
Action:"Edit"
    },

    {
      listItem: <List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar >
          <Avatar src={headofgrowth} />
        </ListItemAvatar>
             <ListItemText >
             <Typography sx={{fontWeight:600,padding:0,fontSize:14}}>

              Michael Levi
              </Typography>
              <Typography sx={{fontWeight:300,padding:0,margin:0,fontSize:12}}>
              michael@creative-tim.com
              </Typography>
             </ListItemText>
      </ListItem>
</List>   ,
FunctionItem: <List>
        <Typography sx={{fontSize:13,fontWeight:600}}>Programator</Typography>
        <Typography sx={{fontSize:13,fontWeight:300}}>Developer</Typography>
</List>,
status:  <Button variant='contained' color='success' sx={{p:0.9,py:0.2,minWidth:10,fontSize:8}} >ONLINE</Button>,
employed:"24/12/08",
Action:"Edit"

    },

        
    {
      listItem: <List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={videoeditor} />
        </ListItemAvatar>
             <ListItemText>
             <Typography sx={{fontWeight:600,padding:0,fontSize:14}}>

              Richard Gran
              </Typography>
              <Typography sx={{fontWeight:300,padding:0,margin:0,fontSize:12}}>
              richard@creative-tim.com
              </Typography>
             </ListItemText>
      </ListItem>
</List>   ,
FunctionItem: <List>
        <Typography sx={{fontSize:13,fontWeight:600}}>Manager</Typography>
        <Typography sx={{fontSize:13,fontWeight:300}}>Executive</Typography>
</List>,
status: 
<ThemeProvider theme={theme}> <Button sx={{p:0.9,py:0.2,minWidth:10,fontSize:8}}  variant='contained' color='primary'>offline</Button>
</ThemeProvider>
,
employed:"04/10/21",
Action:"Edit"

    },
    {
      listItem: <List disablePadding>
      <ListItem disablePadding>
        <ListItemAvatar>
          <Avatar src={appdev} />
        </ListItemAvatar>
             <ListItemText>
             <Typography sx={{fontWeight:600,padding:0,fontSize:14}}>

              Miriam Eric
              </Typography>
              <Typography sx={{fontWeight:300,padding:0,margin:0,fontSize:12}}>
              miriam@creative-tim.com
              </Typography>
             </ListItemText>
      </ListItem>
</List>   ,
FunctionItem: <List>
        <Typography sx={{fontSize:13,fontWeight:600}}> Programator</Typography>
        <Typography sx={{fontSize:13,fontWeight:300}}>Developer</Typography>
</List>,
status: 
<ThemeProvider theme={theme}>
 <Button   variant='contained' color='primary' sx={{p:0.9,py:0.2,minWidth:10,fontSize:8}} >offline</Button>
 </ThemeProvider>,
employed:"14/09/20",
Action:"Edit"

    }
  ]
 
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column',backgroundColor: '#fafafa'}}>

    <Sidebarapp/>
    <Navbar/>
       <Box sx={{
     
    
        ml:`${drawerWidth}px`,
      
      
       }}>
          <Toolbar/>
           {/* table 1  */}
                    <Box sx={{mt:0,mr:2,backgroundColor:'white',height:'auto',borderRadius:5,boxShadow:3,position:'relative',zIndex:20}} >
                      <Container sx={{backgroundColor:'#2979ff',p:3.5,borderRadius:5,width:"90%",
                        position:'absolute',top:-30, left:40,zIndex:200,color:'white',fontWeight:600
                      }}>
                      Authors Table
                      </Container>
                       <TableContainer>
                        <Table  sx={{mt:10,minWidth:650}} >
                               <TableHead>
                                   <TableCell sx={{fontSize:16,color:'#424242',fontWeight:600}}>Author</TableCell>
                                   <TableCell sx={{paddingLeft:0,fontSize:16,color:'#424242',fontWeight:600}}>Function</TableCell>
                                   <TableCell  sx={{paddingLeft:0,fontSize:16,color:'#424242'}}>Status</TableCell>
                                   <TableCell  sx={{paddingLeft:0,fontSize:16,color:'#424242'}}>Employed</TableCell>
                                   <TableCell  sx={{paddingLeft:0,fontSize:16,color:'#424242'}}>Action</TableCell>
                                   
                               </TableHead>
{Tablebody.map((tableitem)=>(
                               <TableBody >
                                       <TableCell sx={{ps:3,py:0}}>{tableitem.listItem}</TableCell>
                                       <TableCell  sx={{padding:0,fontSize:""}}>{tableitem.FunctionItem}</TableCell>
                                       <TableCell  sx={{padding:0}}>{tableitem.status}</TableCell>
                                       <TableCell  sx={{padding:0,fontSize:12}}>{tableitem.employed}</TableCell>
                                       <TableCell  sx={{padding:0}}>{tableitem.Action}</TableCell>
                                       

                               </TableBody>
))}
                        </Table>
                        </TableContainer>
                   </Box>

             {/* table 2  */}
 
                   <Box sx={{mt:6,mr:2,mb:3,backgroundColor:'white',height:'auto',borderRadius:5,boxShadow:3,position:'relative',zIndex:20}} >
                      <Container sx={{backgroundColor:'#2979ff',p:3.5,borderRadius:5,width:"90%",
                        position:'absolute',top:-30, left:40,zIndex:200,color:'white',fontWeight:600
                      }}>
          Projects Table
                      </Container>
                       <TableContainer>
                        <Table  sx={{mt:10,mb:5,minWidth:650}} >
                               <TableHead>
                                   <TableCell sx={{fontSize:16,color:'#424242',fontWeight:600}}>project</TableCell>
                                   <TableCell sx={{paddingLeft:0,fontSize:16,color:'#424242',fontWeight:600}}>budget</TableCell>
                                   <TableCell  sx={{paddingLeft:0,fontSize:16,color:'#424242'}}>Status</TableCell>
                                   <TableCell  sx={{paddingLeft:0,fontSize:16,color:'#424242'}}>completion</TableCell>
                                   <TableCell  sx={{paddingLeft:0,fontSize:16,color:'#424242'}}>Action</TableCell>
   
                                   
                               </TableHead>
{Tabledata.map((tabledata)=>(
                               <TableBody >
                                        <TableCell sx={{ps:3,py:0,fontWeight:600}}>{tabledata.listItem}</TableCell>
                                       <TableCell  sx={{padding:0,fontWeight:600}}>{tabledata.price}</TableCell>
                                       <TableCell  sx={{padding:0,fontSize:14,fontWeight:600,color:'gray'}}>{tabledata.status}</TableCell>
                                       <TableCell  sx={{padding:0,fontSize:12}}>{tabledata.progress}</TableCell>
                                       <TableCell  sx={{paddingLeft:0}}>{tabledata.IconItem}</TableCell>
                                       
                                       

                               </TableBody>
))}
                        </Table>
                        </TableContainer >
                   </Box>
                   <Footer />
       </Box>
     
      </Box>
      
      </>
)
}

