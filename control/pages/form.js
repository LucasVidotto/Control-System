import React from 'react';
import { User} from "phosphor-react";

function Form() {
    
    
    return (
        <div className=' w-full h-60 flex flex-col justify-between items-center'>
            <div className="w-64  rounded-lg mt-3 flex flex-row border-solid border-b-2 border-r-2 border-white">
                <User 
                size="20px" 
                color="white"
                className='mt-2 ml-3'/>
                <input 
                className='w-56 bg-transparent p-2 focus:outline-none'
                type="text" 
                placeholder='Nome '/>
            </div>
            <div className="w-64  rounded-lg flex flex-row border-solid border-b-2 border-r-2 border-white">
                <input 
                className='w-56 bg-transparent p-2 focus:outline-none'
                type="email" 
                placeholder='Email '/>
            </div>
            
            <div className="w-64  rounded-lg mb-3 flex flex-row border-solid border-b-2 border-r-2 border-white">
                <input 
                className='w-56 bg-transparent p-2 focus:outline-none'
                type="password" 
                placeholder='Senha'/>
            </div>
            
        </div>
    )
}

export default Form;