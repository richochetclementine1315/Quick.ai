import {  Scissors, Sparkles } from 'lucide-react';
import React, {useState} from 'react'

const RemoveObject = () => {
    
    
    const [input, setInput] = useState('')
    const [object, setObject] = useState('')
                
                const onSubmitHandler = async (e) => {
                    e.preventDefault();
               
               
             }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
        {/* left col */}
        <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
            <div className='flex items-center gap-3'>
                <Sparkles className='w-6 text-[#4A7AFF]'/>
                <h1 className='text-xl font-semibold'>AI Object Removal</h1>
            </div>
            <p className='mt-6 text-sm font-medium'>Upload Image</p>
            <input onChange={(e)=>setInput(e.target.files[0])} accept='image/*' type='file' className='w-full p-2 px-3 mt-2
             outline-none text-sm rounded-md border border-gray-300 test-gray-600'
              required/>

              <p className='mt-6 text-sm font-medium'>Describe Object to Remove...</p>
              
              <textarea  onChange={(e)=>setObject(e.target.value)} rows={4} value={object} 
              className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300'
             placeholder='Describe the object you want to remove' required/>
             
             <button className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB]
              text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
                <Scissors className='w-5'/>
                Remove Object
             </button>
             
             

        </form>
        {/* right col */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border
         border-gray-200 min-h-96'>
            <div className='flex items-center gap-3'>
                <Scissors className='w-5 h-5 text-[#417DF6]'/>
                <h1 className='text-xl font-semibold'>Processed Image</h1>

            </div>
            <div className='flex-1 flex justify-center items-center'>
                <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                    <Scissors className='w-9 h-9'/>
                    <p>Upload Image and remove Object</p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default RemoveObject