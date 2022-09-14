import { React, useState, useEffect } from 'react';
import axios from 'axios';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function GuitarStats() {

  const [statList, setStatList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/stats').then( (allStats) => {
      setStatList(allStats.data);
    })
  }, []) 
  
  const guitarSessionsArray = statList.map((s) => (
    s.guitarS
  ));
  const totalS = guitarSessionsArray.reduce((previousDay, currentDay, index) =>previousDay+currentDay,0);
  
  const guitarHoursArray = statList.map((g) => (
    g.guitarH
  ));
  const totalG = guitarHoursArray.reduce((previousHour, currentHour, index) =>previousHour+currentHour,0);
  
  const roundG = (totalG/totalS).toFixed(2);
  
  
  return (
  <>
  <Stack alignItems='center' justifyContent='center' flexDirection='column'> 
      <Chip label="Practice Sessions" color='primary' sx= {{ margin: '10px' }} />
      <AppBar position="static" color='inherit' sx={{ maxWidth:'75px', maxHeight:'50px', flexGrow: 1, borderRadius: 15, alignItems: 'center', margin: '20px', display: 'flex', justifyContent: 'center' }}>
          <Toolbar>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1, alignItems: 'center'  }}>
                  {totalS}
              </Typography>
          </Toolbar>
      </AppBar>
  </Stack>

  <Stack alignItems='center' justifyContent='center' flexDirection='column'> 
      <Chip label="Total Hours" color='primary'  sx= {{ margin: '10px' }} />
      <AppBar position="static" color='inherit' sx={{ maxWidth:'75px', maxHeight:'50px', flexGrow: 1, borderRadius: 15, alignItems: 'center', margin: '20px', display: 'flex', justifyContent: 'center' }}>
          <Toolbar>
          <Typography variant="h7" component="div">
              {totalG}
          </Typography>
          </Toolbar>
      </AppBar>
  </Stack>
  
  <Stack alignItems='center' justifyContent='center' flexDirection='column'> 
      <Chip label="Session Avg" color='primary'  sx= {{ margin: '10px' }} />
      <AppBar position="static" color='inherit' sx={{ maxWidth:'75px', maxHeight:'50px', flexGrow: 1, borderRadius: 15, alignItems: 'center', margin: '20px', display: 'flex', justifyContent: 'center' }}>
          <Toolbar>
          <Typography variant="h7" component="div">
              {roundG}
          </Typography>
          </Toolbar>
      </AppBar>
  </Stack>
  
  </>
  )
}