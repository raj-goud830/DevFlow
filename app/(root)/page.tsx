import React from 'react'
import { auth } from '@/auth';

const Home = async () => {
  const session = await auth();
  console.log(session)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>welcom to the next project</h1>    
    </div>
  )
}

export default Home

