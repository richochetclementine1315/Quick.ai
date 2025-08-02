import { useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Heart } from 'lucide-react'

const Community = () => {
  const [creations, setCreations] = useState([])
  const { user } = useUser()

  const fetchingCreations = async () => {
    setCreations(dummyPublishedCreationData)
  }

  useEffect(() => {
    if (user) {
      fetchingCreations()
    }
  }, [user])

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h1 className='text-lg font-semibold text-slate-800'>Creations</h1>
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll flex flex-wrap gap-4 p-3'>

        {creations.map((item, index) => (
          <div
            key={index}
            className='relative group w-full sm:max-w-[48%] lg:max-w-[32%] rounded-lg overflow-hidden'
          >
            <img
              src={item.content}
              alt=''
              className='w-full h-64 object-cover rounded-lg'
            />

            <div className='absolute inset-0 flex flex-col justify-end p-4 group-hover:bg-gradient-to-b from-transparent to-black/70 text-white'>
              <p className='text-sm hidden group-hover:block mb-2'>{item.prompt}</p>
              <div className='flex gap-2 items-center justify-between'>
                <p className='text-xs'>{item.likes.length} likes</p>
                <Heart
                  className={`w-5 h-5 hover:scale-110 cursor-pointer transition-all ${
                    item.likes.includes(user?.id)
                      ? 'fill-red-500 text-red-600'
                      : 'text-white'
                  }`}
                />
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Community
