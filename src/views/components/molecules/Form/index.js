import React from 'react'
import { SuccessRegistration } from '..'

const Form = () => {

    return (
        <main className='py-20 px-8 xl:px-64 space-y-12'>
            <SuccessRegistration />
            {/* <div>
                <Label title='Daftar I-RURAL' />
                <div className='lg:space-x-6 space-y-4 lg:space-y-0 flex flex-col lg:flex-row'>
                    <button type='submit' className='w-full lg:w-auto px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900'>
                        <p className='text-xl text-white'>Daftar Sebagai Pengguna</p>
                    </button>
                    <button type='submit' className='w-full lg:w-auto px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900'>
                        <p className='text-xl text-white'>Daftar Sebagai ISP</p>
                    </button>
                </div>
            </div>

            <ISPForm /> */}
        </main>
    )
}

export default Form
