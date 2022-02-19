import { Button, TextField } from '@mui/material'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { db } from '../firebase';
import  {ToDoContext} from '../pages/ToDoContext';
const ToDoFrom = () => {
    const [todo, setTodo] = useState({title : "" , details : ""});

    const {showAlert} = useContext(ToDoContext);
    const onSubmit = () =>{

        const collectionRef = collection(db, "todos")
        
        const docRef = addDoc(collectionRef ,{...todo , timestamp : serverTimestamp()  })


        setTodo({title: "" , details : ""});

        showAlert( "success"  ,`Todo with title ${todo.title} added successfully`);

    }



  return (
    <div>
        <TextField fullWidth label="title" margin='normal'  
            value={todo.title}
            onChange={e=>setTodo({...todo , title:e.target.value})}
        />
        <TextField fullWidth label="detail" multiline maxRows={4}  
            value={todo.details}
            onChange={e=>setTodo({...todo , details:e.target.value})}

        />
        <Button sx={{mt : 3}}  variant="contained"  onClick={onSubmit }   >Add A New TODO</Button>
    </div>

  )
}

export default ToDoFrom