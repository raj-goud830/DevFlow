import Image from 'next/image';
import Link from 'next/link';
import Theme from './Theme';
import React from 'react'
 const Navbar = () => {
return (
<div className='flex-between text-2xl h2-bold z-50 fixed w-full background-light900_dark300 p-6 shadow-light-300 dark:shadow-none gap-5 '>
        <Link href="/" className='flex items-center gap-1'>
         <Image src="/images/site-logo.svg" alt="Site Logo" width={23} height={23} />
            <p className='h2-bold font-space-grotesk text-dark-100 dark:text-light-900'>
                Dev<span className='text-primary-500'>Flow</span></p>
        </Link>

        <p>Global Search</p>

        <div className='flex-between gap-5'>
            <Theme/>
    </div>
</div>
);
}
export default Navbar