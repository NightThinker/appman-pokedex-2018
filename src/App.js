import React, { Component } from 'react'

import Navbar from './shared/theme/navBar/NavBar'
import Footer from './shared/theme/Footer/Footer'
import './App.css'
import './shared/styles/tailwind.css'


const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <Navbar />
        <main className='h-552 overflow-scroll'>kkk</main>
        <Footer />
      </div>
    )
  }
}

export default App
