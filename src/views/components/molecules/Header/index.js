import React from 'react'
import { IMGHeader } from '../../../../assets/images'

const Header = () => {
    return (
        <header>
            <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(${IMGHeader})` }}>
                <div className='px-8 py-6 xl:px-24 xl:pb-24 min-h-screen flex flex-1' >
                    <div className=' self-end space-y-14'>
                        <h1 className='text-4xl text-white max-w-xl font-semibold'>Di Desa Di Kota Semua Bisa Internetan</h1>
                        <p className='text-lg text-white xl:max-w-2xl'>
                            Web i-RURAL ini memfasilitasi pertemuan antara calon pengguna layanan internet di area rural (pedesaan/pegunungan/area yang belum terjangkau akses kabel fiber optik) dengan Telkom yang akan bekerjasama dengan ISP lain dalam memenuhi permintaan akses internet di area rural tersebut.
                </p>
                        <div className='flex xl:flex-row flex-col xl:space-x-6 items-center'>
                            <button className='px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md mb-6 xl:mb-0 w-full'>
                                <p className='text-xl text-white'>
                                    Daftar Sebagai Pengguna
                </p>
                            </button>
                            <button className='px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md w-full'>
                                <p className='text-xl text-white'>
                                    Daftar Sebagai ISP
                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
