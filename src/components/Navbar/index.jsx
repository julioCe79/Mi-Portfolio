import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from "react-router-dom"


const Navbar = () => { 
    return(
        
            <nav className='menu'>
                    <input type={'checkbox'} className='clicHambur' id='clicHambur'></input>
                    <label for={'clicHambur'}className='btnHambur'>
                            <FontAwesomeIcon className='hambur' icon={faBars}/>
                    </label>
                    
                    <ul>           
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>       
                        <li>
                            <NavLink to="/proyects">Proyects</NavLink>
                        </li>                 
                        <li>
                            <NavLink to="/resume">Resume</NavLink>
                        </li>    
                        <li>
                            <input className='inputBuscar' name="search" type="text" placeholder='Buscar...'/>
                                <svg fill="none" stroke="#ffffff" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                                    <circle r="7" cy="10" cx="10"></circle>
                                    <line y2="15" x2="15" y1="21" x1="21"></line>
                                </svg>
            
                        </li>     
                    </ul>            
            </nav>               
         
           
       
    )
}
export { Navbar }  

