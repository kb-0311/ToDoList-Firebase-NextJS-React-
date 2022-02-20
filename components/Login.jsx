import { Button, Grid } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
const Login = ({type , color}) => {

    const loginWithGoogle = () =>{
        signInWithPopup(auth , provider);
    }



  return (
    <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight : '100vh'}}>



                <Button variant = "contained" onClick={loginWithGoogle} startIcon={<GoogleIcon/> }>Google Sign in</Button>

    </Grid>
  )
}

export default Login