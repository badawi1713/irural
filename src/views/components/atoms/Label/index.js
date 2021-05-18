import React from 'react'

const Label = ({ title = 'Label', center = false }) => {
    return (
        <div className={center ? ' text-center mb-8' : ' mb-8'}>
            <h2 className=' text-black font-semibold text-2xl mb-2 leading-normal'>{title}</h2>
        </div>
    )
}

export default Label
