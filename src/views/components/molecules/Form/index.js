import React, { useContext } from 'react'
import { SuccessRegistration, UserForm } from '..'
import { ISPForm, Label } from '../../'
import { FormContext } from '../../../../context'
const Form = () => {
    const value = useContext(FormContext)

    const showUserFormHandler = value[3]
    const showISPFormHandler = value[2]
    const showUserForm = value[1]
    const showSubmitView = value[4]

    return (
        <main className='py-20 px-8 xl:px-64 space-y-12'>
            {
                showSubmitView ? <SuccessRegistration /> :
                    <>
                        <div>
                            <Label title='Daftar I-RURAL' />
                            <div className='lg:space-x-6 space-y-4 lg:space-y-0 flex flex-col lg:flex-row'>
                                <button onClick={showUserFormHandler} type='button' className={showUserForm ? 'w-full lg:w-auto px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900' : 'w-full lg:w-auto px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900 opacity-40'}>
                                    <p className='text-xl text-white'>Daftar Sebagai Pengguna</p>
                                </button>
                                <button onClick={showISPFormHandler} type='button' className={!showUserForm ? 'w-full lg:w-auto px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900' : 'w-full lg:w-auto px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-md hover:from-red-700 hover:to-red-900 opacity-40'} >
                                    <p className='text-xl text-white'>Daftar Sebagai ISP</p>
                                </button>
                            </div>
                        </div>

                        {showUserForm ? <UserForm /> : <ISPForm />}
                    </>
            }

        </main>
    )
}

export default Form
