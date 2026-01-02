import { signOut } from '@/auth';
import React from 'react'
import ROUTES from '@/constant/route';
import { Button } from '@/components/ui/button';
import { auth } from '@/auth';

const Home = async () => {
  const session = await auth();
  console.log(session)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>welcom to the next project</h1>

      <form className='px-10 pt-25' action={async () => {
        "use server";
        await signOut({ redirectTo: ROUTES.SIGN_IN });
      }}>
        <Button type='submit'>Sign Out</Button>
      </form>
    </div>
  )
}

export default Home

