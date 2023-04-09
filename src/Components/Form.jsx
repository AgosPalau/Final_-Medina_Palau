import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState(false)

  const onChangeinput = (event) => {
    setNombre(event.target.value)
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const validarNombre = (name) => {
    return name.length > 5
  }
  const validarEmail = (email) => {
    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return validEmail.test(email)
  }
  const onSubmitForm = (event) => {
    event.preventDefault();
    if (validarNombre(nombre) && validarEmail(email)) {
      setMensaje(true);
      return;
    }
    else {
      setMensaje(false);
    }
  }
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder='ingrese su nombre' onChange={onChangeinput} value={nombre} />
        <input type="email" placeholder='ingrese su email' onChange={onChangeEmail} value={email} />
        <button>Enviar</button>
      </form>
      {mensaje ? <div>Gracias {nombre}, te contactaremos cuando antes vía mail</div> : <div>Por favor verifique su información nuevamente</div>}
    </div>
  );
};

export default Form;
