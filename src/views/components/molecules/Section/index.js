import clsx from 'clsx'
import React from 'react'
import { IMGIllustration01 } from '../../../../assets/images'

const Section = ({ image = IMGIllustration01, reverse = false, title = "Title", contents = [], id = "" }) => {
    return (
        <section id={id} className={reverse ? clsx(`flex flex-col-reverse xl:flex-row-reverse justify-between xl:space-x-28 xl:space-x-reverse`) : clsx(`flex flex-col-reverse xl:flex-row justify-between xl:space-x-28`)}>
            <img style={{ content: `url(${image})` }} alt='illustration' className='self-center' />
            <div>
                <h2 className=' text-black font-semibold text-2xl mb-2 leading-normal'>{title}</h2>
                {contents.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.subtitle && <h3 className='text-black font-semibold text-base mb-2'>{item.subtitle}</h3>}
                        <p className='text-gray-500 text-base mb-4'>{item.content}</p>
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default Section
