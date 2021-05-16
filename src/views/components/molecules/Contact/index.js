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

const Contact = ({ id = "" }) => {
    const classes = useStyles()
    return (
        <div id={id} className='relative flex justify-center w-full items-center my-10'>
            <img alt='banner' style={{ content: `url(${IMGBanner})` }} width={'100%'} />
            <div className='absolute flex flex-wrap lg:flex-nowrap items-center justify-center z-10 space-x-4 w-full'>
                <p className='text-white text-sm lg:text-2xl'>Kontak Kami : </p>
                <h3 className='text-white text-lg lg:text-3xl font-semibold'>08112614565</h3>
                <img alt='whatsapp-ic' className={clsx(classes.whatsappButton, 'w-1/4 lg:w-auto cursor-pointer')} />
            </div>

        </div >
    )
}

export default Contact
