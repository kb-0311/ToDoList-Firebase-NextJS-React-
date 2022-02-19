import { Button, TextField } from '@mui/material'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useContext, useState , useRef ,useEffect } from 'react'
import { db } from '../firebase';
import  {ToDoContext} from '../pages/ToDoContext';
const ToDoFrom = () => {


     const inputAreaRef  = useRef();

    //const [todo, setTodo] = useState({title : "" , details : ""});

    const {showAlert ,todo , setTodo} = useContext(ToDoContext);
    const onSubmit = async () =>{

        const collectionRef =  collection(db, "todos")
        
        const docRef = await addDoc(collectionRef ,{...todo , timestamp : serverTimestamp()  })


        setTodo({title: "" , details : ""});

        showAlert( "success"  ,`Todo with title ${todo.title} added successfully`);

    }

    useEffect(() => {
        const checkIfClickedOuside = e =>{
            if(!inputAreaRef.current.contains(e.target)){
                console.log("outside input area");
                setTodo({title:'' ,details : "" })
            }
            else
            {
                console.log("inside input field");
            }

        }
        document.addEventListener("mousedown" ,checkIfClickedOuside )
        return(
            document.addEventListener("mousedown" , checkIfClickedOuside)
        )
        
    }, []);



  return (
    <div ref={inputAreaRef}>
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