
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import { useTheme } from './GlobalContext';   


function Navbar ()  {
  const { theme, toggleTheme} = useTheme();
    
  return (
      <div>
           <nav>
            <div className='sf'>
                <h3 className='smile'> Smile Medicine </h3>
                <img className='logo' src='/images/logo.jpg' alt='Logo'/>
            </div>
            <div>
                <ul>          
                    <li>
                      <Link className='nav-a' to="/">Home</Link>
                    </li>
                    <li>
                      <Link className='nav-a' to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link className='nav-a' to="/favs">Favs</Link>
                    </li>
                </ul>
            </div>
            <button
             onClick={toggleTheme}>
             <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} /> 
             </button>
          </nav>
      </div>
    );
  }

  export default Navbar;