import React from 'react'
import Featured from '../../components/Featured'
import Trusted from '../../components/Trusted'
import Card from '../../components/Card'
import { Slider } from 'infinite-react-carousel'

const Home = () => {
  return (
    <div>
    <Featured/>
    <Trusted/>
    <Card/>
    <Slider/>
    </div>
  )
}

export default Home