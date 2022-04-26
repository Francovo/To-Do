import React from 'react'
import Agregar_Tarea from './components/Agregar_Tarea'
import Listar from './components/Listar'
import styles from "../styles/index.module.css";


const index = () => {
  const url = "https://backendtudu.herokuapp.com/tareas";


  return (
    <div className={styles.container}>
      <Agregar_Tarea url={url}/>
      <Listar url={url}/>
    </div>
  )
}

export default index