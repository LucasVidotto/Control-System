import { useState } from 'react';
import Head from 'next/head'
import { ArrowFatDown, ArrowFatUp} from "phosphor-react";


export default function Home() {
  const [verify, setverify] = useState(false);
  const [type, setType]=useState({
    one: false,
    two: false,
  })
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keyworkds" content="Roupas, calçados"></meta>
      <meta name="description" content="Next-Reactjs-TailWind"></meta>
    </Head>
      <div className='w-full h-full flex flex-col items-center'>
        <div className="max-w-xs w-72 h-9 mt-4 bg-neutral-800 text-violet-200 flex border-solid border-3 border-stone-900 rounded-xl" >
          <span className='ml-2 mt-1'>{verify.toString()}</span>
          <button 
          type='button' 
          className='absolute left-59/100 mt-2'  
          onClick={()=> setverify(!verify)}>{verify ? <ArrowFatUp size="20px"/> : <ArrowFatDown size="20px"/>}</button>
          
        </div>
        
        {verify ? 
        <div className='w-72 h-32 bg-neutral-700 rounded-md flex flex-col justify-between items-center'>
          <div className='mt-1 border-b-2'>
            <span className='text-white '>Lucas Domingos Vidotto</span>
          </div>
          <div className=' border-b-2'>
            <span className='text-white '>lucasvidotto3@gmail.com</span>
          </div>
          <div className='mb-1 border-b-2'>
            <span className='text-white '>******************** </span>
          </div>
        </div> : 
        null}
        <div className="max-w-xs w-72 h-9 mt-4 bg-neutral-800 text-violet-200 flex border-solid border-3 border-stone-900 rounded-xl" >
          <span className='ml-2 mt-1'>{type.one ? <span>{type.one.toString()}</span> : <span>{type.one.toString()}</span>}</span>
          <button 
          type='button' 
          className='absolute left-59/100 mt-2'  
          onClick={()=> setType(prevState => ({
             ...prevState, one: !type.one
          }))}>
            {type.one ? <ArrowFatUp size="20px"/> : <ArrowFatDown size="20px"/>}</button>
        </div>
        {type.one ? 
        <div className='w-72 h-32 bg-neutral-700 rounded-md flex flex-col justify-between items-center'>
          <div className='mt-1 border-b-2'>
            <span className='text-white '>Lucas Domingos Vidotto</span>
          </div>
          <div className=' border-b-2'>
            <span className='text-white '>lucasvidotto3@gmail.com</span>
          </div>
          <div className='mb-1 border-b-2'>
            <span className='text-white '>******************** </span>
          </div>
        </div> : 
        null}
      </div>
    </>
  )
}
