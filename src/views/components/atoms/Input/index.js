import React from 'react'

const Input = ({ type = 'text', label = 'Label Input', placeholder = 'Title', icon = "", info = "", fullwidth = false }) => {
    return (
        <div className={fullwidth ? 'space-y-4 w-full col-span-full' : 'space-y-4 w-full'}>
            <label className='flex items-center space-x-4'>
                {icon && <img style={{ content: `url(${icon})` }} width={20} height={20} alt='label-icon' />}
                <p className=' text-lg text-gray-500 font-semibold '>{label}</p>
            </label>
            {type === 'textarea' ? <textarea rows={4} className={` px-6 py-4 border border-gray-500 rounded-md w-full`}></textarea> : type === 'button' ?
                <><button className='py-4 px-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded-md hover:from-blue-500 hover:to-blue-700'>
                    <p className=' text-lg text-white'>{placeholder}</p>
                </button>
                    {info &&
                        <p className='text-sm text-red-600'>
                            {info}
                        </p>
                    }
                </> :
                <input type={type} className={` px-6 py-4 border border-gray-500 rounded-md w-full`} />
            }
        </div>
    )
}

export default Input
