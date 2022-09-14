import React, {useState, useEffect} from 'react'
import axios from 'axios'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function JapanStats() {

const [statList, setStatList] = useState([])

useEffect(() => {
  axios.get('http://localhost:5000/stats').then( (allStats) => {
    setStatList(allStats.data);
  })
}, []) 

const japanSessionsArray = statList.map((s) => (
  s.japanS
));
const totalS = japanSessionsArray.reduce((previousDay, currentDay, index) =>previousDay+currentDay,0);

const japanArray = statList.map((r) => (
  r.japanH
));
const totalJ = japanArray.reduce((previousHour, currentHour, index) =>previousHour+currentHour,0);

const roundJ = (totalJ/totalS).toFixed(2);

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
          <Typography variant="h7" component="div" sx= {{ maxLength: '4'}}>
              {totalJ}
          </Typography>
          </Toolbar>
      </AppBar>
  </Stack>

  <Stack alignItems='center' justifyContent='center' flexDirection='column'> 
      <Chip label="Session Avg" color='primary'  sx= {{ margin: '10px' }} />
      <AppBar position="static" color='inherit' sx={{ maxWidth:'75px', maxHeight:'50px', flexGrow: 1, borderRadius: 15, alignItems: 'center', margin: '20px', display: 'flex', justifyContent: 'center' }}>
          <Toolbar>
          <Typography variant="h7" component="div" sx= {{ maxLength: '4'}}>
              {roundJ}
          </Typography>
          </Toolbar>
      </AppBar>
  </Stack>
</>

)
}