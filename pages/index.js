import { Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import ToDoFrom from '../components/ToDoFrom'
import ToDoList from '../components/ToDoList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Container maxWidth="sm">
      <ToDoFrom/>
      <ToDoList/>

    </Container>
  )
}
