import { ModeComment } from '@mui/icons-material'
import { Icon, IconButton, ListItem, ListItemText } from '@mui/material'
import moment from 'moment'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { ToDoContext } from '../pages/ToDoContext';


const ToDo = ({id , timestamp , title , details}) => {


  const {showAlert} = useContext(ToDoContext);

  const deleteToDo = async (id ,e) =>{
    e.stopPropagation();
    

    const deleteDocRef = doc(db , "todos" , id);
    await deleteDoc(deleteDocRef);


    showAlert('error' , `TO DO with id --> ${id} deleted successfully`)





  }


  return (
      <ListItem 
      sx={{mt:3 , boxShadow : 7 }}
      style={{backgroundColor : '#FAFAFA'}}
      secondaryAction ={
        <>
          <IconButton onClick={ e=> deleteToDo(id ,e) }  >
              <DeleteIcon />

          </IconButton>

          <IconButton>
              <MoreVertIcon/>

          </IconButton>
        </>
      }
      >
            <ListItemText
                primary={title}
                secondary={moment(timestamp).format("MMMM dd , yyyy")}
            
            />
      </ListItem>
  )
}

export default ToDo