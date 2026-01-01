import Image from 'next/image';
import React from 'react'
import { ReactNode } from 'react';
import SocialAuthForm from '../component/navigation/navbar/forms/SocialAuthForm';
const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (

        <main className='flex min-h-screen items-center justify-center 
        background-image-light dark:background-image-dark bg-cover bg-center px-5 py-10 '>
                
            <section className='min-w-full light-border background-light700_dark200 shadow-light100_dark100
            rounded-[10px] border px-4 py-10 shadow-md sm:min-w-130 sm:px-8'>
                <div className='flex items-center justify-center gap-2'>
                    <div className='space-y-2.5'>
                        <h1 className='h2-bold text-dark100_light900 mr-3'>Join DevFlow</h1>
                        <p className='paragraph-regular text-dark500_light400'>To get your questions answered</p>
                    </div>
                    <Image src="/images/site-logo.svg" alt="site logo" width={40} height={40} className='object-contain' />
         
           </div>
                {children}
                <SocialAuthForm/>
            </section>
        </main>
    );
}
export default AuthLayout