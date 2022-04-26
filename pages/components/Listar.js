import React from "react";
import { useEffect, useState } from "react";
import styles from "../../styles/listar.module.css";
import Agregar_Tarea from "./Agregar_Tarea";

const Listar = ({ url }) => {
  const [data, setData] = useState([]);
  const [id, setid] = useState(Number);
  const [editar, setEditar] = useState("");

  // useEffect(() => {
  //   <Agregar_Tarea idEditar={editar} />
  //   console.log('componente editar',editar);
  // }, [editar]);

  //Peticion GET
  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, [url, data]);

  //Metodo DELETE datos

  useEffect(() => {
    fetch(`${url}` + "/" + `${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => console.log("Se elimino", res))
      .catch((error) => console.log("no funca", error));
  }, [id, url]);

  return (
    <div className={styles.container_datos}>
      <h1>Tareas Pendientes</h1>

      {data.map((datos, index) => (
        <div key={`tarea-${index}`}>
          <div className={styles.ContainerData}>
            <h2>{datos.id}.</h2>
            <h2>{datos.titulo}</h2>
          </div>
          <div className={styles.containerTarea}>
            <h3 className={styles.tarea}>{datos.tarea}</h3>
            <div className={styles.containerBtn}>
              <button
                className={styles.btnEliminar}
                onClick={() => {
                  setid(datos.id);
                }}
              >
                ✖
              </button>
              <button
                className={styles.btnEditar}
                onClick={() => {
                  setEditar(datos.id);
                  <Agregar_Tarea idEditar={editar} />;
                }}
              >
                ✎
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listar;
