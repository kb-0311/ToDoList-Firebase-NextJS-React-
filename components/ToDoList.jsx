import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

import { collection , onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore'
import ToDo from './toDo';


const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        
        const collectionRef =collection(db , "todos");

        const q = query(collectionRef , orderBy("timestamp" , "desc"));

        const unsubstribe =onSnapshot(q , (querySnapshot)=>{
            setTodos(querySnapshot.docs.map(doc=>({...doc.data() , id : doc.id , timestamp: doc.data().
                timestamp?.toDate().getTime()   }))

            )
        });

        return unsubstribe;






    }, []);

  return (
    <div>
        {todos.map(todo=>
            <ToDo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                details={todo.details}
                timestamp={todo.timestamp}
            
            
            />
        )}
    </div>
  )
}

export default ToDoList