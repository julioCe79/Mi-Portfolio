import './Form.css'

import  { useForm } from "react-hook-form"
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Form = () => {
    const { register, handleSubmit } = useForm();
     const form = useRef();

     const miSubmit = (datos, e) => {
        if (isNaN(datos.user_name) === false || datos.user_phone.length > 10 ) {
            
            return alert('no es un telefono valido. ejemplo: 1122334455 o nombre no es texto')
            
        }
        e.target.reset()    
        emailjs.sendForm('service_334t0yd', 'template_lr3tdud', form.current, 'BC0R3TQPyrKdLNAKG')
       
     }

     function mostraForm() {
        const valForm = document.getElementById('idForm').style.display
        console.log(valForm)
        if (valForm === 'none' || valForm === '') {
            document.getElementById('idForm').style.display = 'block'
        } else {
            document.getElementById('idForm').style.display = "none"
        }
     }

    return(

        <div className ='contieneForm'>

            <form id='idForm'  ref={form} onSubmit={handleSubmit(miSubmit)}>    
               
                <div className='grpInput'>
                    <p className='tag'><span color='white'>HABLEMOS</span></p>
                    <label>Tu Nombre</label>
                    <input placeholder='Nombre' required {...register('user_name')}></input> 
                    
                </div>
                <div className='grpInput'>
                    <label>Tu Telefono</label>
                    <input type={'number'} placeholder='Telefono' required {...register('user_phone')}></input>
                </div>
                <div className='grpInput'>
                    <label>Tu Email</label>
                    <input type={'email'} placeholder='email' required {...register('user_email')}></input> 
                </div>

                <div className='grpInput'>
                    
                    <textarea cols={'22'} rows={'8'} placeholder='Tu Mensaje' required {...register('message')}></textarea>
                    
                </div>
                <button className='btnSubmit' type='submit'>Enviar</button>
                

             </form>

             <button id='btnId' className='btnHablar' onClick={mostraForm}>Let's Talk</button>
           
        </div>
       
    )
}

export { Form }