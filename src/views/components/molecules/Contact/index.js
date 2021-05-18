import clsx from 'clsx'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { ICWhatsapp } from '../../../../assets/icons'
import { IMGBanner } from '../../../../assets/images'

const useStyles = createUseStyles({
    whatsappButton: {
        content: `url(${ICWhatsapp})`,
        transition: "0.3s",
        opacity: 1,
        '&:hover': {
            opacity: 0.7
        }
    }
})

const Contact = () => {
    const classes = useStyles()
    return (
        <div className='relative flex justify-center w-full items-center '>
            <img alt='banner' style={{ content: `url(${IMGBanner})` }} width={'100%'} />
            <div className='absolute flex flex-wrap xl:flex-nowrap items-center justify-center z-10 space-x-4 w-full'>
                <p className='text-white text-sm xl:text-2xl'>Kontak Kami : </p>
                <h3 className='text-white text-lg xl:text-3xl font-semibold'>08112614565</h3>
                <img alt='whatsapp-ic' className={clsx(classes.whatsappButton, 'w-1/4 xl:w-auto cursor-pointer')} />
            </div>

        </div >
    )
}

export default Contact
