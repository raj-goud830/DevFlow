import React from 'react'
import Navlink from './Navlink'
import ROUTES from '@/constant/route';
// import {isMobileNav} from './Navlink'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const MobileNavigation = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Image src='/icons/hamburger.svg' alt="menu" width={24} height={24} className='invert-color sm:hidden' />
        </SheetTrigger>
        <SheetContent side='left' className='py-5 background-light900_dark300 border-none'>
          <SheetTitle className='hidden'>Navigation</SheetTitle>
          <Link href='/' className='flex items-center gap-1'>
            <Image src='/images/site-logo.svg' alt="Site Logo" width={24} height={24} />
            <p className='h3-bold font-space-grotesk text-dark-100 dark:text-light-900 xs:hidden'>
              Dev<span className='text-primary-500'>Flow</span></p>
          </Link>

          <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-8">
                <Navlink isMobileNav/>
              </section>
            </SheetClose>
            <div>
              <SheetClose asChild>
                <Link href={ROUTES.SIGN_IN}>
                  <Button className='small-medium btn-secondary min-h-10.25 w-[calc(80vw-40px)] rounded-md px-4 py-3 mb-2 ml-1 mr-1 shadow-none '>Log In</Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href={ROUTES.SIGN_UP}>
                  <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10.25 w-[calc(80vw-40px)] ml-1 mr-1 rounded-md border px-4 py-3 shadow-none'>Sign Up</Button>
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default MobileNavigation