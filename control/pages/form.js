import {useState} from 'react';
import { User, Password, Book} from "phosphor-react";
import Style from '../styles/Button.module.css'
function Form() {
    
    const [nome, setNome] =useState('');
    function handlerName(){
        console.log(nome)
        setNome('')
    }
    return (
       <div className='w-full h-screen flex flex-col justify-center items-center '>
         <div className=' w-full h-60 flex flex-col justify-between items-center'>
            <div className="w-68  rounded-lg mt-3 flex flex-row border-solid border-b-2 border-r-2 border-white">
                <User 
                size="20px" 
                color="white"
                className='mt-2 ml-3'/>
                <input 
                className='w-60 bg-transparent p-2 focus:outline-none text-white'
                type="text" 
                onChange={(e)=> setNome(e.target.value)}
                placeholder='Nome '
                value={nome}/>
            </div>
            <div className="w-68  rounded-lg flex flex-row border-solid border-b-2 border-r-2 border-white">
                <Book 
                size="20px" 
                color="white"
                className='mt-2 ml-3'/>
                <input 
                className='w-60 bg-transparent p-2 focus:outline-none text-white'
                type="email" 
                placeholder='Email '/>
            </div>
            
            <div className="w-68  rounded-lg mb-3 flex flex-row border-solid border-b-2 border-r-2 border-white">
                <Password 
                size="20px" 
                color="white"
                className='mt-2 ml-3'/>
                <input 
                className='w-60 bg-transparent p-2 focus:outline-none text-white'
                type="password" 
                placeholder='Senha'/>
            </div>
            
        </div>
        <button 
        className={Style.aButton}
        onClick={handlerName}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Click Button
        </button>
       </div>
    )
}

export default Form;