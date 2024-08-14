import React from 'react'
import Comm from './components/Comm/Comm'
import Section from './components/Section/Section'
import Commanda from './components/Commanda/Commanda'
import Packet from './components/Packet/Packet'
import Map from './components/Map/Map'
import Bid from './components/Bid/Bid'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
        <Comm></Comm>
        <Section></Section>
        <Commanda></Commanda>
        <Packet></Packet>
        <Map></Map>
        <Bid></Bid>
        <Footer></Footer>
    </div>
  )
}

export default App