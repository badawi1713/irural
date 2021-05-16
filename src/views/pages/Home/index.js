import React from 'react'
import { homeContent } from '../../../assets/data'
import { Contact, Footer, Header, Section } from '../../components'
const Home = () => {
    return (
        <div>
            <Header id={'section1'} />
            <main className=' py-20 px-8 xl:px-24 space-y-12'>
                {homeContent.map((item, index) => (
                    <Section id={item.id} key={index} title={item.title} contents={item.contents} reverse={index % 2 !== 0} image={item.image} />
                ))}
            </main>
            <Contact id={"section4"} />
            <Footer />
        </div>
    )
}

export default Home
