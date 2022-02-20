import { ModeComment } from '@mui/icons-material'
import { Icon, IconButton, ListItem, ListItemText } from '@mui/material'
import moment from 'moment'
import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { ToDoContext } from '../pages/ToDoContext';
import { useRouter } from 'next/router';

const ToDo = ({id , timestamp , title , details}) => {

  const router = useRouter();


  const {showAlert ,todo , setTodo}  = useContext(ToDoContext);

  const deleteToDo = async (id,title ,e) =>{
    e.stopPropagation();
    

    const deleteDocRef = doc(db , "todos" , id);
    await deleteDoc(deleteDocRef);


    showAlert('error' , `To do with title  ${title} deleted successfully`)





  }

  const seeMore = (id , e)=>{
    e.stopPropagation();

    router.push(`todos/${id}`);


  }


  return (
      <ListItem onClick={()=>{setTodo({id  , title , details , timestamp})}}
      sx={{mt:3 , boxShadow : 7 }}
      style={{backgroundColor : '#FAFAFA'}}
      secondaryAction ={
        <>
          <IconButton onClick={ e=> deleteToDo(id , title ,e) }  >
              <DeleteIcon />

          </IconButton>

          <IconButton onClick={e => seeMore(id , e)}>
              <MoreVertIcon/>

          </IconButton>
        </>
      }
      >
            <ListItemText
                primary={title}
                secondary={moment(timestamp).format("DD , MMMM , yyyy")}
            
            />
      </ListItem>
  )
}

export default ToDo