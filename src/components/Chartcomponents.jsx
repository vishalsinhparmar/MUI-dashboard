import {BarChart } from '@mui/x-charts/BarChart'
import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { AccessTime, Visibility } from '@mui/icons-material'
import { green } from '@mui/material/colors'
import { Gauge, LineChart, gaugeClasses } from '@mui/x-charts'

export default function Chartcomponents() {
  const MyChart = [
    {
      barchart:<LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      width={300}
      height={200}
      sx={{
        borderRadius:3,     
        background:'#64ffda',
        }} />,            
               view:"website views",
               performance:"Last Campaign Performance",
               time:"campaign sent 2 days ago"

    },
    
    {
    barchart:<LineChart
    xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
    series={[
      {
        data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
        showMark: ({ index }) => index % 2 === 0,
      },
    ]}
    width={300}
    height={200}
    sx={{
      borderRadius:3,
      width:300,height:200,
      
      background:'#e3f2fd',
      }} 
  />,
  view:"daily sales",
  performance:"(+15%) increase in today sales.",
  time:"updated 4 min ago"
  },
{
  barchart:
  <Gauge
    value={70}
    startAngle={-110}
    endAngle={110}
    width={300}
    height={200}
    sx={{
      [`& .${gaugeClasses.valueText}`]: {
        fontSize: 40,
        transform: 'translate(0px, 0px)',
        background:'#76ff03',
        
      },
    }}
    text={
       ({ value, valueMax }) => `${value} / ${valueMax}`
    }/>,
  view:"completed tasks",
  performance:"Last Campaign Performance",
  time:"just updated"
}
]

  return (
  <Box sx={{display:'flex',justifyContent:'center',mt:1,ml:5}}>
         <Grid container spacing={3}>
                    {MyChart.map((charts)=>( 
                       <Grid item>
                           <Card  sx={{  
                                       width:300,
                                       background:'white',
                                       boxShadow:3,
                                       zIndex:10, 
                                       overflow :'visible',
                                       borderRadius:3}} >

               <CardMedia sx={{width:300,height:200,position:'relative'} }>
                       <Box sx={{   
                                  position:'absolute',
                                  top:0,
                                  left:0,
                                  bottom:60,
                                  right:0,
                                  display:'flex',
                                  justifyContent:'center',
                                  alignItems:'center',
                                  p: 1.8}}>
                      {charts.barchart }         
                        </Box>
                </CardMedia>
 
         <CardContent sx={{pl:4, pt:0}}>
                 <Typography variant='h6'  sx={{ fontWeight:500}}>{charts.view}</Typography>
                   <Typography   sx={{color:'#616161',pb:2}}>{charts.performance}</Typography>
                     <Divider/>
                <Box sx={{display:'flex',mt:1}}>
                     <AccessTime  />
                       <Typography   sx={{color:'#616161',ml:1}}>{charts.time}</Typography>
                 </Box>
         </CardContent>

                            </Card>
             
              </Grid>
    ))}
  
  

        </Grid>
   </Box>
    
  )
}
