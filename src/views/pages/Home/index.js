import React from 'react'
import { homeContent } from '../../../assets/data'
import { Header, Section } from '../../components'
const Home = () => {
    return (
        <div>
            <Header />
            <main className=' py-20 px-8 xl:px-24 space-y-12'>
                {homeContent.map((item, index) => (
                    <Section key={index} title={item.title} contents={item.contents} reverse={index % 2 !== 0} image={item.image} />
                ))}
            </main>
        </div>
    )
}

export default Home
