import React from "react";
import { useEffect, useState } from "react";
import styles from "../../styles/index.module.css";
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
    <div className={styles.container}>
      <div className={styles.container_datos}>
        <h1>Tareas Pendientes</h1>

        {data.map((datos, index) => (
          <div key={`tarea-${index}`}>
            <h1>
              {datos.id}

              {datos.titulo}
            </h1>
            {datos.tarea}
            <button
              onClick={() => {
                setid(datos.id);
              }}
            >
              Eliminar
            </button>
            <button
              onClick={() => {
                setEditar(datos.id);
                <Agregar_Tarea idEditar={editar} />;
              }}
            >
              Editar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listar;
