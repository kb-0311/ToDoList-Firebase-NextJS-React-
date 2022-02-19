import { Alert, Container, Snackbar } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import ToDoFrom from '../components/ToDoFrom'
import ToDoList from '../components/ToDoList'
import styles from '../styles/Home.module.css'
import { ToDoContext } from './ToDoContext'

export default function Home() {

  const [todo, setTodo] = useState({title : "" , details : ""});

  const [open, setOpen] = useState(false);
  const [alertType , setAlertType] = useState("success");
  const [alertMessage , setAlertMessage] = useState("");

  const showAlert= (type , msg) =>{
    setAlertType(type);
    setAlertMessage(msg);
    setOpen(true);

  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <ToDoContext.Provider value={{showAlert ,todo , setTodo}}>
          <Container maxWidth="sm">
            <ToDoFrom/>
            <Snackbar 
            anchorOrigin={{vertical: "top" , horizontal:"center"}}
            open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
                    {alertMessage}
                  </Alert>
            </Snackbar>
            <ToDoList/>

          </Container>
    </ToDoContext.Provider>
  )
}
