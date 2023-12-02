import  { useState, useEffect } from "react";
import { useTheme } from "./GlobalContext";
import { Link } from "react-router-dom";

const Card = () => {
  const { doctores } = useTheme();
  const [favoritos, setFavoritos] = useState([]);

  const obtenerFavoritosDesdeLocalStorage = () => {
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosGuardados);
  };

  useEffect(() => {
    obtenerFavoritosDesdeLocalStorage();
  }, []);

  const addFav = (e, id) => {
    e.preventDefault();
    const doctor = doctores.find((doctor) => doctor.id === id);

    if (doctor && !favoritos.some((fav) => fav.id === doctor.id)) {
      const nuevosFavoritos = [...favoritos, doctor];
      setFavoritos(nuevosFavoritos);

      localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
    } 
    alert ("El profesional " + doctor.name  + " se agrego a favoritos");
  };

  return (
    <div className="card-body">
      {doctores.map((doctor) => (
        <div key={doctor.id} className="card">
          <Link to={`/detail/${doctor.id}`}>
          <img className="img-card" src="./images/doctor.jpg" alt="Foto Generica" />
          <h3>{doctor.username}</h3>
          <h4>{doctor.name}</h4>
          </Link>
          <button onClick={(e) => addFav(e, doctor.id)} 
            className={`favButton  ${favoritos.some((fav) => fav.id === doctor.id) ? "active" : ""}`}>⭐
            </button>
          
        </div>
      ))}
    </div>
  );
};

export default Card;