import React, { useState, useEffect } from 'react'

import Navbar from './shared/theme/navBar/NavBar'
import Footer from './shared/theme/Footer/Footer'
import Modal from './shared/components/Modal/Modal'

import { onGetCards } from './shared/api/api'

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

const App = () => {

  const [isOpen, setIsOpen] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await onGetCards()
      setCards(data.cards)
      console.log('card', data.cards)
    })()
  }, [])

  const onCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <div className="flex flex-col">
      <Modal isOpen={isOpen} item={cards} onClose={onCloseModal} />
      <Navbar />
      <main className='h-552 overflow-scroll'>
      </main>
      <Footer />
    </div>
  )
}

export default App
