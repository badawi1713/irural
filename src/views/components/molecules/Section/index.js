import React from 'react'
import { IMGIllustration01 } from '../../../../assets/images'

const Section = ({ image = IMGIllustration01, reverse = false, title = "Title", contents = [], id = "" }) => {
    return (
        <section className={`flex flex-col lg:flex-row justify-between lg:space-x-28 items-center`}>
            {reverse ?
                <React.Fragment>
                    <div className='w-full' id={id} >
                        <h2 className=' text-black font-semibold text-2xl mb-6 leading-normal'>{title}</h2>
                        {contents.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.subtitle && <h3 className='text-black font-semibold text-base mb-2'>{item.subtitle}</h3>}
                                <p className='text-gray-500 text-base mb-4'>{item.content}</p>
                            </React.Fragment>
                        ))}
                    </div>
                    <img style={{ content: `url(${image})` }} alt='illustration' />

                </React.Fragment>
                :
                <React.Fragment >
                    <img style={{
                        content: `url(${image})`
                    }} alt='illustration' />
                    <div className='w-full' id={id}>
                        <h2 className=' text-black font-semibold text-2xl mb-6 leading-normal'>{title}</h2>
                        {contents.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.subtitle && <h3 className='text-black font-semibold text-base mb-2'>{item.subtitle}</h3>}
                                <p className='text-gray-500 text-base mb-4'>{item.content}</p>
                            </React.Fragment>
                        ))}
                    </div>
                </React.Fragment>
            }
        </section>
    )
}

export default Section
