import React from "react";
import styles from "../../styles/index.module.css";
import { useEffect, useState } from "react";

const Agregar_Tarea = ({ url, Editar }) => {
  // const [dataEdicion, setdataEdicion] = useState([]);
  const [envio, setEnvio] = useState({
    titulo: "",
    tarea: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setEnvio({
      titulo: "",
      tarea: "",
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEnvio({
      ...envio,
      [e.target.name]: e.target.value,
    });
  };

  //Metodo POST envio de datos
  const envioPost = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(envio),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Enviado:", response));
  };

  //Edicion de USuario
  useEffect(() => {
    fetch(`${url}` + "/" + `${Editar}`)
      .then((response) => response.json())
      .then((responseData) => {
        setEnvio(responseData);
        console.log("Estado de envio", envio);
        console.log("Prop editar", Editar);
        // ...envio{
        //   titulo(responseData.titulo),
        //   tarea(responseData.tarea)
        // }
      });

    // fetch(`${url}` + "/" + `${idEditar}`, {
    //   method: "PUT",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .catch((error) => console.error("Error:", error))
    //   .then((response) => console.log("Success:", response));
  }, [Editar]);

  return (
    <form onSubmit={onSubmit} className={styles.container_input}>
      <h3>Titulo de la tarea</h3>
      <input
        name="titulo"
        id="titulo"
        value={envio.titulo}
        onChange={handleChange}
      />
      <h1>Ingrese la tarea a realizar</h1>
      <input
        value={envio.tarea}
        name="tarea"
        id="tarea"
        placeholder="No olvides..."
        onChange={handleChange}
      />
      <button onClick={() => envioPost()}>Añadir</button>
    </form>
  );
};

export default Agregar_Tarea;
