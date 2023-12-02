import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams(); 
  const [doctor, setDoctor] = useState(null);

  const fetchData = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error("Error al obtener datos de la API");
      }
      const dato = await response.json();
      setDoctor(dato);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(id);
  },[id]); 

  return (
    <div>
      <h1>Detalle del Dentista</h1>
      {doctor && (
        
        <div>
          
          <h4>{doctor.name}</h4>
          <h4>{doctor.email}</h4>
          <h4>{doctor.phone}</h4>
          <h4>{doctor.website}</h4>
        </div>
      )}
      {/* aquí deberán renderizar la información en detalle de un usuario en específico */}
      {/* Deberán mostrar el name - email - phone - website por cada usuario en específico */}
    </div>
  );
};

export default Detail;
