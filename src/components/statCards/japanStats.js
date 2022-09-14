import React from 'react'
import Advanced from '../statFunctions/jStats.js'

import Card from '@mui/material/Card';
import { Container } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'


export default function JapanStats() {
  return (
    <>   
      <Card sx={{ minWidth: 275, minHeight: 550, borderRadius: 15, alignItems: 'center', justifyContent: 'top', flexDirection: 'column', margin: '30px 0', display: 'flex' }}>
        
        <Container>
            <AppBar position="static"  sx={{ maxWidth:'500px', maxHeight:'50px', flexGrow: 1, borderRadius: 15, alignItems: 'center', margin: '30px 0', display: 'flex', justifyContent: 'center' }}>
              <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, alignItems: 'center'  }}>
                  Japanese Stats
                </Typography>
              </Toolbar>
          </AppBar>
        </Container>

        <Advanced />

      </Card>
    </>
  )
}