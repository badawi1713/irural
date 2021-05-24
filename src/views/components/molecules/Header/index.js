import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IMGHeader } from '../../../../assets/images'
import { FormContext } from '../../../../context'

const Header = ({ id = "" }) => {
    const value = useContext(FormContext)

    const showUserFormHandler = value[3]
    const showISPFormHandler = value[2]

    return (
        <header id={id}>
            <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(${IMGHeader})` }}>
                <div className='px-8 py-6 xl:px-24 xl:pb-24 min-h-screen flex flex-1' >
                    <div className=' self-end space-y-14'>
                        <h1 className='text-4xl text-white max-w-xl font-semibold'>Di Desa Di Kota Semua Bisa Internetan</h1>
                        <p className='text-lg text-white xl:max-w-2xl'>
                            Web i-RURAL ini memfasilitasi pertemuan antara calon pengguna layanan internet di area rural (pedesaan/pegunungan/area yang belum terjangkau akses kabel fiber optik) dengan Telkom yang akan bekerjasama dengan ISP lain dalam memenuhi permintaan akses internet di area rural tersebut.
                </p>
                        <div className='flex xl:flex-row flex-col xl:space-x-6 items-center'>
                            <Link to='/register' className='w-full'>
                                <button type='button' onClick={showUserFormHandler} className='px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md mb-6 xl:mb-0 w-full hover:from-red-700 hover:to-red-900'>
                                    <p className='text-xl text-white'>
                                        Daftar Sebagai Pengguna
                </p>
                                </button></Link>
                            <Link to='/register' className='w-full'>
                                <button type='button' onClick={showISPFormHandler} className='px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md w-full hover:from-red-700 hover:to-red-900'>
                                    <p className='text-xl text-white'>
                                        Daftar Sebagai ISP
                </p>
                                </button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
