import { Grid } from '@mui/material'
import { color } from '@mui/system'
import React from 'react'
import ReactLoading from "react-loading"

const Loading = ({type , color}) => {
  return (
      <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight : '100vh'}}>
          <ReactLoading type={type} color = {color} height={"5%"} width = {"5%"}/>
      </Grid>
  )
}

export default Loading