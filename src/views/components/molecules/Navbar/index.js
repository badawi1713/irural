import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { HashLink } from 'react-router-hash-link';
import { ICSidebar } from '../../../../assets/icons';
import { IMGLogo } from '../../../../assets/images';
import { FormContext } from '../../../../context';

const useStyles = createUseStyles({
    link: {
        '&:hover': {
            color: 'red'
        }
    }
})

const Navbar = ({ open, openNavHandler, closeNavHandler }) => {
    const classes = useStyles()

    const value = useContext(FormContext)

    const showUserForm = value[3]

    return (
        <>
            <div className='flex flex-row w-full shadow-sm px-8 py-4 xl:px-24 items-center justify-between'>

                <div className='justify-between space-x-12 items-center flex'>
                    <img src={IMGLogo} alt='logo-img' width={130} height={40} />

                    <nav className='hidden xl:block'>
                        <ul className='flex space-x-16'>
                            <li><HashLink className={clsx(classes.link, 'text-xl cursor-pointer')} smooth to='/#home'>Beranda</HashLink></li>
                            <li><HashLink className={clsx(classes.link, 'text-xl cursor-pointer')} smooth to='/#description'>Deskripsi</HashLink></li>
                            <li><HashLink className={clsx(classes.link, 'text-xl cursor-pointer')} smooth to='/#network-config'>Konfigurasi Network</HashLink></li>
                            <li><HashLink className={clsx(classes.link, 'text-xl cursor-pointer')} smooth to='/#contact'>Kontak Kami</HashLink></li>
                        </ul>
                    </nav>
                </div>
                <HashLink to='/register'>
                    <button onClick={showUserForm} className='hidden xl:block px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900'>
                        <p className='text-xl text-white'>
                            Daftar I-RURAL
                </p>
                    </button>
                </HashLink>


                <button onClick={openNavHandler} className='xl:hidden border p-4 rounded-md bg-white hover:bg-gray-50'>
                    <img alt='sidebar-icon' src={ICSidebar} />
                </button>

            </div>
            {
                open && <motion.nav
                    initial={{
                        y: -100,
                    }}
                    animate={{
                        y: 0,
                    }}
                    transition={{ type: 'tween', ease: 'easeInOut', duration: 1 }} className='xl:hidden block bg-white shadow-md px-8 py-4 xl:px-24 items-center justify-between absolute  w-full'>
                    <ul className='flex flex-col space-y-2'>
                        <li><HashLink onClick={closeNavHandler} className={clsx(classes.link, 'text-lg cursor-pointer')} smooth to='/#home'>Beranda</HashLink></li>
                        <li><HashLink onClick={closeNavHandler} className={clsx(classes.link, 'text-lg cursor-pointer')} smooth to='/#description'>Deskripsi</HashLink></li>
                        <li><HashLink onClick={closeNavHandler} className={clsx(classes.link, 'text-lg cursor-pointer')} smooth to='/#network-config'>Konfigurasi Network</HashLink></li>
                        <li><HashLink onClick={closeNavHandler} className={clsx(classes.link, 'text-lg cursor-pointer')} smooth to='/#contact'>Kontak Kami</HashLink></li>
                        <li>
                            <HashLink to='/register'>
                                <button onClick={closeNavHandler} className='px-6 py-2 w-full bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900'>
                                    <p className='text-lg text-white'>
                                        Daftar I-RURAL
                </p>
                                </button>
                            </HashLink>
                        </li>
                    </ul>
                </motion.nav>
            }
        </>
    )
}

export default Navbar
