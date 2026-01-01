import React from 'react'
import { ReactNode } from 'react';
import Navbar from '../component/navigation/navbar/Navbar';
const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}
export default RootLayout