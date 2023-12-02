import { createContext, useContext, useReducer, useMemo, useState, useEffect } from "react";
import { themeReducer, initialState } from "./themeReducer";


const ThemeContext = createContext();

export const ThemeProvider = ( {children} )  => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const [doctores, setDoctores] = useState([]);
  

   // Función asincrónica para obtener datos de la API
   const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error("Error al obtener datos de la API");
      }
      const convert = await response.json();
      setDoctores(convert);
     
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, []);

    // Función para alternar el tema
  const toggleTheme = () => {
      dispatch({type: "TOGGLE_THEME"});
    };


    const value = useMemo(() => ({ theme: state.theme, toggleTheme, doctores }), [state.theme, doctores]);
  
    return (
      <ThemeContext.Provider value={value}>
        <div className={state.theme}>{children}</div>
      </ThemeContext.Provider>
    );
  };

    //  contexto global
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un proveedor de temas');
  }
  return context;
};



      export default ThemeContext;