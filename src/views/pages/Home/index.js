import React, { useState } from 'react'
import { homeContent } from '../../../assets/data'
import { ICChevronUp } from '../../../assets/icons'
import { Contact, Footer, Header, Section } from '../../components'
import { motion } from 'framer-motion'
const Home = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <>
            <motion.button initial={{ opacity: showScroll ? 1 : 0, y: showScroll ? '200%' : 0 }} animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : '200%', transition: { duration: 0.3 } }} onClick={scrollTop} className={'w-12 h-12 rounded-full shadow-md bg-red-500 flex justify-center items-center fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-20 hover:shadow-xl hover:bg-red-600'}>
                <div style={{ content: `url(${ICChevronUp})` }} className=' w-1/2' />
            </motion.button>
            <Header id={'home'} />

            <main className=' py-20 px-8 xl:px-24 space-y-12'>
                {homeContent.map((item, index) => (
                    <Section id={item.id} key={index} title={item.title} contents={item.contents} reverse={index % 2 !== 0} image={item.image} />
                ))}
            </main>
            <div id='contact'>
                <Contact />
                <Footer />
            </div>

        </>
    )
}

export default Home
