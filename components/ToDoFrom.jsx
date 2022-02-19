import { Button, TextField } from '@mui/material'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase';

const ToDoFrom = () => {
    const [todo, setTodo] = useState({title : "" , details : ""});
    const onSubmit = () =>{

        const collectionRef = collection(db, "todos")
        
        const docRef = addDoc(collectionRef ,{...todo , timestamp : serverTimestamp()  })


        setTodo({title: "" , details : ""});

        alert(`Todo with id ${docRef.id} added successfully`);

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