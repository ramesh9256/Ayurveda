import React from 'react'

import Home from './Home'
import AyurvedaCards from './Card'
import FilterClick from './FilterClick'
import ReadCard from './ReadCard'
import OurStory from './OurStory'

const Body = () => {
  return (
    <div className='w-full'>
      <Home/>
      <FilterClick/>
      <AyurvedaCards/>
      <ReadCard/>
      <OurStory/>
    </div>
  )
}

export default Body
