
import './Main.css'
import foto from './MiFoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Main = () => {

   
    return(
        <main className='contenedor'>
               
                    <p className='hola'>Hello </p><p className='soy'> I'm</p>
                    <p className='nombre'>Julio Cesar Vera</p>
                    <p className='titulo'>DEV FULLSTACK FRONT/BACKEND REACT</p>
                    <p className='data'>Este es mi portfolio, voy a ir agregando o mejorando cosas con el tiempo...</p>
                    <div className='hexa'>
                                
                    </div>                 
                   

                    <p className='checkOut'>Check Out My</p>

                    <div className='btnlinkedin'>     
                        <FontAwesomeIcon className='btnComu' icon={faLinkedin}/>
                    </div>
                    <div className='btnInsta'>
                        <FontAwesomeIcon className='btnComu' icon={faInstagram}/>
                    </div>
                    <div className='btnGitHub'>
                        <FontAwesomeIcon className='btnComu' icon={faGithub}/>
                    </div>
                   
        </main>
       
    )
}

export {Main} 