import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ICSuccess } from '../../../../assets/icons'
import { FormContext } from '../../../../context'
import { Label } from '../../atoms'

const SuccessRegistration = () => {
    const value = useContext(FormContext)
    const showSubmitHandler = value[5]
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className='w-full space-y-6 flex-col flex items-center'>
            <img alt='ic-illustration' style={{ content: `url(${ICSuccess})` }} width={150} height={250} />
            <Label center title='Terimakasih Telah Mendaftar I-RURAL' />
            <p className='text-gray-400 text-center w-5/6'>Permintaan anda sedang diproses, customer service kami akan menghubungi anda setelah proses selesai</p>
            <Link onClick={() => {
                showSubmitHandler()
                scrollTop()
            }} className='w-full lg:w-auto' to='/'><button className='w-full py-4 px-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md hover:from-blue-500 hover:to-blue-700'>
                    <p className=' text-lg text-white'>Kembali ke Beranda</p>
                </button>
            </Link>
        </div>
    )
}

export default SuccessRegistration
