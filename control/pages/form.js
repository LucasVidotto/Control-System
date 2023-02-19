import {useState} from 'react';
import { User, Password, Book} from "phosphor-react";
import clsx from 'clsx';
import Style from '../styles/Button.module.css';
import { validEmail, validPassword, caracterPass } from '../Components/Regex';
function Form() {
    const [colors, setColors]= useState(0);
    const [nome, setNome] =useState('');
    const [pass, setPass] = useState('');
    function handlerName(){
        console.log(nome)
        setNome('')
    }
    function Passwordverify(){
        if(pass.length >= 6 && validPassword.test(pass)){
            setColors(2)
            alert('Uper + Length')

        }
         else if(pass.length >= 6  || validPassword.test(pass) || caracterPass.test(pass)){
             setColors(1)
             alert('111')
        }
        
        /* if(caracterPass.test(pass)){
            alert('caracter')
            setColors(colors +1)
            setPass('')
        } */
        setPass('')
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
                onChange={(e)=>setPass(e.target.value)}
                placeholder='Senha'
                value={pass}/>
            </div>
            <div className="w-48 h-4 bg-transparent rounded-xl border-solid  border-2 border-white flex justify-start">
                <div className={clsx('h-9/10 rounded-xl m-0',{
                    'bg-red-600 w-2/6' : colors === 1,
                    'bg-green-400 w-full' : colors === 3,
                    'bg-yellow-500 w-2/3' : colors === 2,
                    'bg-transparent' : colors === 0,
                })}>
                    
                </div>
            </div>
        </div>
        <button 
        className={Style.aButton}
        onClick={Passwordverify}>
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