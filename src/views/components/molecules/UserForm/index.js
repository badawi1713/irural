import React, { useContext } from 'react'
import { provinceList } from '../../../../assets/data'
import { ICCard, ICEmail, ICGps, ICLocation, ICPerson, ICPhone } from '../../../../assets/icons'
import { FormContext } from '../../../../context'
import { Input, Label, Select } from '../../atoms'

const UserForm = () => {
    const value = useContext(FormContext)
    const showSubmitHandler = value[5]
    const scrollTop = () => {
        window.scrollTo({ top: 100, behavior: 'smooth' });
    };
    return (
        <form className='w-full'>
            <Label title='Data Diri' />
            <div className='grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4'>
                <Input label='Nama Lengkap' type='text' icon={ICPerson} />
                <Input label='Nomor KTP' type='text' icon={ICCard} />
                <Input label='Nomor Telepon' type='text' icon={ICPhone} />
                <Input label='Email' type='email' icon={ICEmail} />
            </div>
            <div className=' mb-14' />
            <Label title='Alamat' />
            <div className='grid grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-4'>
                <Select label='Provinsi' data={provinceList} />
                <Input label='Kelurahan' type='text' />
                <Input label='Kode Pos' type='text' />
                <Input label='Alamat Lengkap' type='textarea' icon={ICLocation} fullwidth />
                <Input label='Bagikan Lokasi' type='button' placeholder='Bagikan Lokasi' icon={ICGps} fullwidth info={
                    '*Bagikan lokasi kamu supaya tim I-RURAL bisa mengetahui titik koordinat lokasi kamu secara detail'
                } />
            </div>
            <div className=' mb-24' />
            <div className='flex w-full lg:justify-end'>
                <button onClick={() => {
                    showSubmitHandler()
                    scrollTop()
                }} type='submit' className='w-full lg:w-auto px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900'>
                    <p className='text-xl text-white'>Daftar Sebagai Pengguna</p>
                </button>
            </div>
        </form>
    )
}

export default UserForm
