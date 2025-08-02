import React, { useState, useEffect } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Sparkles, Gem } from 'lucide-react'
import { useUser } from '@clerk/clerk-react'
import CreationItem from '../components/CreationItem'

const Dashboard = () => {
  const [creations, setCreations] = useState([])
  const { user, isLoaded } = useUser()
  const [plan, setPlan] = useState('')

  useEffect(() => {
    setCreations(dummyCreationData)
  }, [])

  // Update plan when user is loaded
  useEffect(() => {
    if (isLoaded && user) {
      const currentPlan = user.publicMetadata?.plan || 'Free'
      setPlan(currentPlan)
    }
  }, [user, isLoaded])

  return (
    <div className='h-full overflow-y-scroll p-6'>
      <div className='flex justify-start gap-4 flex-wrap'>
        {/* Total Creations */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-gray-500 text-sm'>Total Creations</p>
            <h2 className='text-2xl font-semibold'>{creations.length}</h2>
          </div>
          <div className='bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full'>
            <Sparkles className='w-5 h-5 text-white' />
          </div>
        </div>

        {/* Active Plan */}
        <div className='flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200'>
          <div className='text-slate-600'>
            <p className='text-gray-500 text-sm'>Active Plan</p>
            <h2 className='text-2xl font-semibold'>{plan}</h2>
          </div>
          <div className='bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full'>
            <Gem className='w-5 h-5 text-white' />
          </div>
        </div>
      </div>

      <div className='space-y-3'>
        <p className='mt-6 mb-4 text-slate-700 font-medium'>Recent Creations</p>
        {creations.map((item) => (
          <CreationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard
