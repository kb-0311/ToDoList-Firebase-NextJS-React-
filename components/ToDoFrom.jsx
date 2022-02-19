import { Button, TextField } from '@mui/material'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useContext, useState , useRef ,useEffect } from 'react'
import { db } from '../firebase';
import  {ToDoContext} from '../pages/ToDoContext';
const ToDoFrom = () => {


     const inputAreaRef  = useRef();

    //const [todo, setTodo] = useState({title : "" , details : ""});

    const {showAlert ,todo , setTodo} = useContext(ToDoContext);
    const onSubmit = async () =>{
        if(todo?.hasOwnProperty("timestamp"))
        {
            //Updating the added docs in the database


            //getting the collection reference
            // getting and updating the document refernce to Update
            const DocRefToBeUpdated = doc(db , "todos" , todo.id); 
            
            //Geting the data of the new changed doc 
            const updatedDoc = {...todo ,  timestamp: serverTimestamp()}


            //finally replacing the document to be updated with a new document 
            updateDoc(DocRefToBeUpdated , updatedDoc)

            //Resetting the state of 'todo'  
            setTodo({title: "" , details : ""});


            //Displaying alert
            showAlert( "success"  ,`Todo with title ${todo.title} Updated successfully`);

        }


        else
        {
            //getting the collection reference
            const collectionRef =  collection(db, "todos")

            // getting and adding the document refernce to add
            const docRef = await addDoc(collectionRef ,{...todo , timestamp : serverTimestamp()  })

            //Resetting the state of 'todo'  
            setTodo({title: "" , details : ""});


            //Displaying alert
            showAlert( "success"  ,`Todo with title ${todo.title} added successfully`);
        }

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
        <Button sx={{mt : 3}}  variant="contained"  onClick={onSubmit }   >
            {todo?.hasOwnProperty("timestamp") ? "Update previous To do" :"Add new To do"}
            </Button>
    </div>

  )
}

export default ToDoFrom