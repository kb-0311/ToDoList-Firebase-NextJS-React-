import { ModeComment } from '@mui/icons-material'
import { ListItem, ListItemText } from '@mui/material'
import moment from 'moment'
import React from 'react'

const ToDo = ({id , timestamp , title , details}) => {


  return (
      <ListItem 
      sx={{mt:3 , boxShadow : 7 }}
      style={{backgroundColor : '#FAFAFA'}}
      >
            <ListItemText
                primary={title}
                secondary={moment(timestamp).format("MMMM dd , yyyy")}
            
            />
      </ListItem>
  )
}

export default ToDo