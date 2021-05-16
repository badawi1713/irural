import React from 'react'
import { ICFacebook, ICInstagram, ICLinkedin, ICTwitter } from '../../../../assets/icons'
import { IMGLogo } from '../../../../assets/images'

const Footer = () => {
    return (
        <footer className=' py-12 bg-white flex justify-center items-center flex-col flex-1 space-y-12'>
            <img style={{ content: `url(${IMGLogo})` }} alt='logo-img' />
            <div className='flex items-center space-x-6'>
                <img style={{ content: `url(${ICFacebook})` }} className='cursor-pointer' alt='social-logo' />
                <img style={{ content: `url(${ICTwitter})` }} className='cursor-pointer' alt='social-logo' />
                <img style={{ content: `url(${ICLinkedin})` }} className='cursor-pointer' alt='social-logo' />
                <img style={{ content: `url(${ICInstagram})` }} className='cursor-pointer' alt='social-logo' />
            </div>
            <p className='text-black text-sm font-semibold'>
                &copy; 2020 I-RURAL - All right reserved
            </p>
        </footer>
    )
}

export default Footer
