import React from 'react'
import { ICSidebar } from '../../../../assets/icons'
import { IMGLogo } from '../../../../assets/images'

const Navbar = () => {
    return (
        <div className='flex flex-row w-full shadow-sm px-8 py-4 xl:px-24 items-center justify-between sticky top-0 bg-white'>

            <div className='justify-between space-x-12 items-center flex'>
                <img src={IMGLogo} alt='logo-img' width={130} height={40} />
                <nav className='hidden xl:block'>
                    <ul className='flex space-x-16'>
                        <li><p className='text-xl'>Beranda</p></li>
                        <li><p className='text-xl'>Deskripsi</p></li>
                        <li><p className='text-xl'>Konfigurasi Network</p></li>
                        <li><p className='text-xl'>Kontak Kami</p></li>
                    </ul>
                </nav>
            </div>

            <button className='hidden xl:block px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md'>
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
