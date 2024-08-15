import Bid from "./components/Bid/Bid"
import Commanda from "./components/Commanda/Commanda"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main_1 from "./components/Main/Main_1/Main_1"
import Main_2 from "./components/Main/Main_2/Main_2"
import Main_3 from "./components/Main/Main_3/Main_3"
import Main_4 from "./components/Main/Main_4/Main_4"
import Map from "./components/Map/Map"
import Packet from "./components/Packet/Packet"
import Section from "./components/Section/Section"

function App() {
  return (
    <div className="App">
      {/* Ernest part */}
      <Header/>
      <Main_1/>
      <Main_2/>
      <Main_3/>
      <Main_4/>
      {/*  */}
      {/* Erik part */}
      <Section/>
      <Commanda/>
      <Packet/>
      <Map/>
      <Bid/>
      <Footer/>
      {/*  */}
    </div>
  )
}

export default App