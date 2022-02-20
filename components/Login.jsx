import { Button, Grid } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
const Login = ({type , color}) => {
  return (
      <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight : '100vh'}}>



                <Button variant = "contained" startIcon={<GoogleIcon/>}>Google Sign in</Button>





      </Grid>
  )
}

export default Login