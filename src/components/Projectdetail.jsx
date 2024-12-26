import { ArrowBack, ArrowUpward, Chair, Check, CreditCard, Fastfood, More, MoreVert, NotificationAdd, NotificationAddRounded, Rowing, ShoppingBag, ShoppingBagSharp, ShoppingCart, VpnKey } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Grid, IconButton, LinearProgress, Menu, MenuItem, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography, iconButtonClasses } from '@mui/material'
import { Timeline,TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineOppositeContentClasses } from '@mui/lab'
import React, { useState } from 'react'
import appdev from '../assets/image/app_developer.jpg'
import appdeveloper from '../assets/image/appdeveloper.jpg'
import headofgrowth from '../assets/image/headofgrowth.jpg'
import videoeditor from '../assets/image/vidio.jpg'

export default function Projectdetail() {

  const [anchorE1,SetEnchorE1] = useState(null)
  const open= Boolean(anchorE1);
  const HandelClick = (event)=>{
    SetEnchorE1(event.currentTarget)

  }
  const HandelClose = ()=>{
    SetEnchorE1(null)
  }
  const TimeLineData = [
    {
      icon:<NotificationAddRounded/>,
      description:"$2400, Design changes",
      time:"22 DEC 7:20 PM",
      color:"#4caf50"
    },
    {
      icon:<ShoppingBagSharp/>,
      description:"New order #1832412",
      time:"21 DEC 11 PM",
      color:"#f44336"
    },
    {
      icon:<ShoppingCart/>,
      description:"Server payments for April",
      time:"21 DEC 9:34 PM",
      color:"#2196f3"
    },
    {
      icon:<CreditCard/>,
      description:"New card added for order #4395133",
      time:"20 DEC 2:20 AM",
      color:"#ff9800"
    },
    {
      icon:<VpnKey/>,
      description:"New card added for order #4395133",
      time:"18 DEC 4:54 AM",
      color:"#e91e63"
    },
   
  ]
  const TableData = [
    {
   
      photo:"Material UI XD Version",
      Member:<AvatarGroup max={4}> 
      <Tooltip title="Ryan Thomson" sx={{backgroundColor:'green'}}>
       <Avatar src={appdev}  sx={{width:20,height:20,cursor:'pointer'}} />
       </Tooltip>
       <Tooltip title="Jessica Doe" sx={{backgroundColor:'green'}}>
        <Avatar src={appdeveloper} sx={{width:20,height:20,cursor:'pointer'}}/>
        </Tooltip>
        <Tooltip title="Alaxednder Smith" sx={{backgroundColor:'green'}}>
        <Avatar src={headofgrowth} sx={{width:20,height:20,cursor:'pointer'}} />
        </Tooltip>
        <Tooltip title="Romina Hadid" sx={{backgroundColor:'green'}}>
        
       <Avatar src={videoeditor} sx={{width:20,height:20,cursor:'pointer'}}/>
       </Tooltip>
       
      </AvatarGroup>,
      budget:"$14,000",
      progress:<LinearProgress variant='determinate' color='primary' sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  value={50}/>
 
      
    },
    {
       photo:"Add Progress Track",
      Member:<AvatarGroup max={4}> 
      <Tooltip title="Alaxednder Smith" sx={{backgroundColor:'green'}}>
          <Avatar src={headofgrowth} sx={{width:20,height:20,cursor:'pointer'}} />
          </Tooltip>
        <Tooltip title="Romina Hadid" sx={{backgroundColor:'green'}}>

         <Avatar src={videoeditor} sx={{width:20,height:20,cursor:'pointer'}}/>
         </Tooltip>
      </AvatarGroup>,
      budget:"	$3,000",
      progress:<LinearProgress variant='determinate' color='primary' sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  value={10}/>

    },
    {
      photo:"Fix Platform Errors",
     Member:<AvatarGroup max={4}> 
       <Tooltip title="Ryan Thomson" sx={{backgroundColor:'green'}}>
         <Avatar src={appdev}  sx={{width:20,height:20,cursor:'pointer'}}/>
         </Tooltip>
         <Tooltip title="Jessica Doe" sx={{backgroundColor:'green'}}>
        <Avatar src={appdeveloper} sx={{width:20,height:20,cursor:'pointer'}}/>
        </Tooltip>
     </AvatarGroup>,
     budget:"	Not set",
      progress:<LinearProgress variant='determinate' color='success' sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  value={100}/>
      
   },
   {
    photo:"material xd virsion",
   Member:<AvatarGroup max={4}> 
<Tooltip title="Romina Hadid" sx={{backgroundColor:'green'}}>
        
        <Avatar src={videoeditor} sx={{width:20,height:20,cursor:'pointer'}}/>
        </Tooltip>
        <Tooltip title="Jessica Doe" sx={{backgroundColor:'green'}}>
        <Avatar src={appdeveloper} sx={{width:20,height:20,cursor:'pointer'}}/>
        </Tooltip>
        <Tooltip title="Alaxednder Smith" sx={{backgroundColor:'green'}}>
        <Avatar src={headofgrowth} sx={{width:20,height:20,cursor:'pointer'}} />
        </Tooltip>
    
   </AvatarGroup>,
   budget:"	$20,500",
 progress:<LinearProgress variant='determinate' color='success' sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  value={100}/>
  
 },
 {
  photo:"Add the New Pricing Page",
 Member:<AvatarGroup max={4} > 

       <Tooltip title="Jessica Doe" sx={{backgroundColor:'green'}}>
        <Avatar src={appdeveloper} sx={{width:20,height:20,cursor:'pointer'}}/>
</Tooltip>
<Tooltip title="Ryan Thomson" sx={{backgroundColor:'green'}}>
       <Avatar src={appdev}  sx={{width:20,height:20,cursor:'pointer'}} />
       </Tooltip>
 </AvatarGroup>,
 budget:"$500",
 progress:<LinearProgress variant='determinate' color='primary' sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  value={30}/>

},
{
  photo:"Redesign New Online Shop",
 Member:<AvatarGroup max={4} > 
 <Tooltip title="Alaxednder Smith" sx={{backgroundColor:'green'}}>
        <Avatar src={headofgrowth} sx={{width:20,height:20,cursor:'pointer'}} />
        </Tooltip>
<Tooltip title="Ryan Thomson" sx={{backgroundColor:'green'}}>
       <Avatar src={appdev}  sx={{width:20,height:20,cursor:'pointer'}} />
       </Tooltip>

 </AvatarGroup>,
 budget:"$500",
 progress:<LinearProgress variant='determinate' color='primary' sx={{height:7, borderRadius:0.6,width:150,backgroundColor:'#eeeeee'}}  value={40}/>

},

    ]

    const Options = ["None","Pyaxis","Umbrelia","Phobos","Sedna"]
    
  return (
   <Box sx={{}}>
        <Grid container>

          {/* Table */}

              <Grid item  xs={12} md={8} xl={6}>
              <Box sx={{m:5,backgroundColor:'white',height:'auto',
                 width: {
                 // 60% width on extra-large screens
                },
              
            boxShadow:3,borderRadius:5}}>
                 <Stack direction="row" spacing={{md:30,lg:30,sm:10}}  sx={{p:3}}>
                        <Box sx={{fontWeight:500}}>
                        <Typography variant='h6'  sx={{fontWeight:600}}>Projects</Typography>
                         <Stack direction="row" sx={{mt:1}}>
                        <Check sx={{display:'inline',color:'blue',mr:1}}/>
                        <Box sx={{display:'inline'}}> 30 done <Box sx={{color:'gray',display:'inline'}}>this month</Box></Box>
                        </Stack>
                         </Box>

                      <IconButton sx={{width:50,height:50}} onClick={HandelClick} id='long-button'
                                                                                  aria-label="more"
                                                                                  aria-controls={open ? 'long-menu' : undefined}
                                                                                  aria-haspopup="true"
                                                                                  aria-expanded={open? 'true':undefined}
                                                                                  >
                          <MoreVert/>
                      </IconButton>

                      {/* Menu Itme */}
                      
                      <Menu open={open}
                      sx={{}}

                     
                      onClose={HandelClose}
                          id="long-menu"
                          MenuListProps={{
                            'aria-labelledby': 'long-button',
                          }}
                          paper
                  >
                        {Options.map(((option)=>
                        <MenuItem onClick={HandelClose}>
                          {option}
                        </MenuItem>
                        ))}
                      </Menu>
                    </Stack>

                    
                  
                   
                   <Box  sx={{overflowX:'auto'}}>
                    <TableContainer component={Paper}>
                      <Table sx={{minWidth:600}} >

                            <TableHead >
                              <TableRow >
                                <TableCell  >companies</TableCell>
                                <TableCell sx={{}}>members</TableCell>
                                <TableCell>budget</TableCell>
                                <TableCell>completion</TableCell>
                                                          
                              </TableRow>
                            </TableHead>
      {TableData.map((data)=>(
                            <TableBody sx={{p:2}} >
                              <TableRow >
                                <TableCell >{data.photo }</TableCell>
                                <TableCell  sx={{alignItems:'left' ,p:3}}>{data.Member}</TableCell>
                                <TableCell>{data.budget}</TableCell>
                                <TableCell>{data.progress}</TableCell>
                              </TableRow>
                            </TableBody>
                            ))}
                      </Table>
                    </TableContainer>
                    </Box>
                    </Box>
              </Grid>

             {/* second box */}

             <Grid item   xs={12} md={4} xl={4} sx={{pr:5,mx:'auto'}}>
              <Box   sx={{mt:5,backgroundColor:'white',height:'auto',boxShadow:3,borderRadius:5}}>
              <Stack direction="row" spacing={{md:10,lg:10,sm:10}}  sx={{p:3
                
              }}>
                        <Box sx={{fontWeight:500}}>
                        <Typography variant='h6'  sx={{fontWeight:600}}>Orders overview</Typography>
                         <Stack direction="row" sx={{mt:1}}>
                        <ArrowUpward sx={{display:'inline',color:'green',mr:1}}/>
                        <Box sx={{display:'inline'}}>  24%<Box sx={{color:'#757575',display:'inline',ml:1}}>this month</Box></Box>
                        </Stack>
                         </Box>
                         </Stack>  
               <Box sx={{padding:3,pt:3}}>

                {TimeLineData.map((index)=>(
                         <Timeline   sx={{
                       [` & .MuiTimelineItem-root::before`]:{
                        display:'none',
                        padding:0
                        
                       } ,
                      
                        padding:0,
                        margin:0
        
      }}>

                          <TimelineItem sx={{padding:0,
                          margin:0
                    }}>
                            <TimelineSeparator sx={{padding:0,
                          margin:0
                     }} >
                         
                           
                              <TimelineDot  sx={{
                          margin:0,
                          backgroundColor:index.color
                     }} > 
                            {index.icon }
                              </TimelineDot>
                              <TimelineConnector sx={{height:40}}/>
                            </TimelineSeparator>
                            
                            <TimelineContent  sx={{ py: '12px', px: 2 }}>
                              <Typography sx={{fontWeight:'bold'}}>
                            {index.description}
                              </Typography>
                              <Typography sx={{fontWeight:'normal'}}>
                             {index.time}
                              </Typography>
                            </TimelineContent>
                          </TimelineItem>
                           
                         
                        </Timeline>
                        ))}
                        </Box>
                
              </Box>
             </Grid>
        </Grid>
       
   </Box>
  )
}
