// import styles from './Navbar.module.css';
import Link from 'next/link';


const Navbar = () => {
    return (
        <header>
            <nav>
                <p>Next.js</p>

                <ul>
                    <Link href='/'>
                        <li>Home 🏠</li>
                    </Link>
                    <Link href='/about'>
                        <li>Home 🏠</li>
                    </Link>
                    <Link href='/'>
                        <li>Home 🏠</li>
                    </Link>
                    <Link href='/'>
                        <li>Home 🏠</li>
                    </Link>


                </ul>
            </nav>
        </header>
    )
}

export default Navbar
