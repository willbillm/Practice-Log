import React from 'react'
import CreateStats from './components/statCards/createStats.js'
import TotalStats from './components/statCards/guitarStats.js'
import AdvStats from './components/statCards/japanStats.js'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Grow, Grid } from '@material-ui/core';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth='sm'>
        <AppBar position="static"  sx={{ flexGrow: 1, borderRadius: 15, alignItems: 'center', margin: '30px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1, alignItems: 'center'  }}>
              Practice Log
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>

      <Grow in>
        <Container>
          <Grid container justifyContent='space-evenly' alignItems='stretch' flexDirection='row'>
              
              <CreateStats />
    
              <TotalStats/>
            
              <AdvStats/>
               
          </Grid>
        </Container>
      </Grow>
    </Box>

  );
}

export default App;