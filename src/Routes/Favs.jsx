import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Favs = () => {
  const [favoritos, setFavoritos] = useState([]);

  const obtenerFavoritosDesdeLocalStorage = () => {
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosGuardados);
  };

  useEffect(() => {
    obtenerFavoritosDesdeLocalStorage();
  }, []);

  const delFav = (e, id) => {
    e.preventDefault();
    
    const nuevosFavoritos = favoritos.filter((doctor) => doctor.id !== id);
    setFavoritos(nuevosFavoritos);
    
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };
  
  
  return (
    <div className="fondo-cards">
      <h1>Dentistas Favoritos</h1>
        <div className="card-grid">
          {favoritos.map((doctor) => (
            <div key={doctor.id} className="card">
              <Link to={`/detail/${doctor.id}`}>
                <img className="img-card" src="./images/doctor.jpg" alt="Foto Doctor Generica" />
                <h3>{doctor.username}</h3>
                <h4>{doctor.name}</h4>
              </Link>
              <button onClick={(e) => 
                delFav(e, doctor.id)
                }>❌ Eliminar
              </button>
            </div>
          ))}
        </div>
    </div>
  );
};


export default Favs;
