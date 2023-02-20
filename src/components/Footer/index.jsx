import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJava, faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
   

    return(
        <div className='footer'>  
        
            <div className='txtFooter'>
            
                <p className='txtUno'> My </p><p className='txtres'> services</p>
                <p className='txtDos'>What I Do</p>
            </div>  
                <button className='btn-izq'>
                        <FontAwesomeIcon className='btnComunFo' icon={faCss3} />
                        <FontAwesomeIcon className='btnComunFo2' icon={faHtml5} />
                        <FontAwesomeIcon className='btnComunFo3' icon={faJs} />
                        
                </button>

                <button className='btn-med'>
                        <FontAwesomeIcon className='btnComunFoo' icon={faJava} />
                </button>

                <button className='btn-der'>
                        <FontAwesomeIcon className='btnComunFoo' icon={faReact}/>
                
                </button>
               
        </div>
    )
}

export { Footer }