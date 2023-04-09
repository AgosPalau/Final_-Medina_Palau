import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentista, setDentista] = useState([]);
  const params = useParams();
  const getDentists = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    console.log(data);
    setDentista(data)
  };
  useEffect(() => {
    getDentists();
  })
  return (
    <>
      <h1>Detail Dentist </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='datos'>
        <p>nombre: {dentista.name}</p>
        <p>email: {dentista.email}</p>
        <p>phone: {dentista.phone}</p>
        <p>website: {dentista.website}</p>
      </div>
    </>
  )
}

export default Detail