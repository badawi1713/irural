import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from "react-scroll";
import { ICSidebar } from '../../../../assets/icons';
import { IMGLogo } from '../../../../assets/images';

const useStyles = createUseStyles({
    link: {
        '&.active': {
            color: 'red'
        },
        '&:hover': {
            color: 'red'
        }
    }
})

const Navbar = () => {
    const classes = useStyles()

    return (
        <div className='flex flex-row w-full shadow-sm px-8 py-4 xl:px-24 items-center justify-between sticky top-0 bg-white z-20'>

            <div className='justify-between space-x-12 items-center flex'>
                <img src={IMGLogo} alt='logo-img' width={130} height={40} />
                <nav className='hidden xl:block'>
                    <ul className='flex space-x-16'>
                        <li><Link className={clsx(classes.link, 'text-xl cursor-pointer')} activeClass='active' spy={true} smooth={true} duration={500} offset={-100} to='section1'>Beranda</Link></li>
                        <li><Link className={clsx(classes.link, 'text-xl cursor-pointer')} activeClass='active' spy={true} smooth={true} duration={500} offset={-180} to='section2'>Deskripsi</Link></li>
                        <li><Link className={clsx(classes.link, 'text-xl cursor-pointer')} activeClass='active' spy={true} smooth={true} duration={500} offset={-100} to='section3'>Konfigurasi Network</Link></li>
                        <li><Link className={clsx(classes.link, 'text-xl cursor-pointer')} activeClass='active' spy={true} smooth={true} duration={500} offset={-100} to='section4'>Kontak Kami</Link></li>
                    </ul>
                </nav>
            </div>

            <button className='hidden xl:block px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900'>
                <p className='text-xl text-white'>
                    Daftar I-RURAL
                </p>
            </button>

            <button className='xl:hidden border p-4 rounded-md'>
                <img alt='sidebar-icon' src={ICSidebar} />
            </button>

        </div>
    )
}

export default Navbar
