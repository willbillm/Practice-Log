import React, { useState } from 'react'
import axios from 'axios';
import Alert from './alert';

import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Create() {

  const [message, setMessage] = useState('')
  
  const [guitarStat, setGuitarStat] = useState({

    guitarH: '',
    guitarS: 1,
    japanH: 0,
    japanS: 0


  });

  const [japanStat, setJapanStat] = useState({

    guitarH: 0,
    guitarS: 0,
    japanH: '',
    japanS: 1


  });
  
  const createGuitarStat = () => {

    if (guitarStat.guitarH === 0) {
      setMessage('Please enter a number greater than 1')
      return
    }

    axios.post('http://localhost:5000/stats', guitarStat).then( () => {
      window.location.reload(false);
    })
  }

  const createJapanStat = () => {
    axios.post('http://localhost:5000/stats', japanStat).then( () => {
      window.location.reload(false);
    })
  }

return(
<>
    <Stack  direction='column' spacing={4}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <FormControl sx={{ m: 2, width: '15ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">hrs</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              value={guitarStat.guitarH} onChange={(event) => {
                setGuitarStat({ ...guitarStat, guitarH: event.target.value})
              }}/>
             <FormHelperText id="outlined-weight-helper-text">Guitar</FormHelperText>
        </FormControl>
      </Box>

      <Button variant="contained" m='2' onClick={createGuitarStat}>Submit</Button>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <FormControl sx={{ m: 2, width: '15ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">hrs</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              value={japanStat.japanH} onChange={(event) => {
                setJapanStat({ ...japanStat, japanH: event.target.value})
              }}/>
            <FormHelperText id="outlined-weight-helper-text">Japanese</FormHelperText>
        </FormControl>
      </Box>
      
      <Button variant="contained" m='2' onClick={createJapanStat}>Submit</Button>
     
    </Stack>
</>
)

}