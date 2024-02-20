import React from 'react'
import Banner from '../Components/Banner'
import BlogPage from '../Components/BlogPage'

const Home = () => {
    return (
        <div>
            <Banner />

            <div className='max-w-7xl m-auto'>
                <BlogPage />
            </div>
        </div>
    )
}

export default Home