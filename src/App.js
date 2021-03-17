import React, { useState, useEffect, useRef } from 'react'

import Navbar from './shared/theme/navBar/NavBar'
import Footer from './shared/theme/Footer/Footer'
import Modal from './shared/components/Modal/Modal'

import { onGetCards, onSearchCards } from './shared/api/api'

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

const onResultData = (card) => {
  return card.cards.map(i => {
    const hp = i.hp >= 100 ? 100 : 0;
    const attacks = i.attacks ? i.attacks.length * 50 : 0;
    const weaknesses = i.weaknesses ? i.weaknesses.length * 100 > 100 ? 100 : 100 : 0;
    const damage = i.attacks ? i.attacks.reduce((acc, cur) => acc + (cur.damage ? parseInt(cur.damage) : 0), 0) : 0;
    const happiness = ((hp / 10) + (damage / 10) + 10 - (weaknesses)) / 5
    return {
      id: i.id,
      name: i.name,
      img: i.imageUrl,
      hp: `${hp}%`,
      attacks: `${attacks}%`,
      weaknesses: `${weaknesses}%`,
      damage,
      happiness
    }
  })
}

const App = () => {

  const [isOpen, setIsOpen] = useState(true)
  const [cards, setCards] = useState([])
  const [list, setList] = useState([])

  const inputRef = useRef()

  useEffect(() => {
    (async () => {
      const { data } = await onGetCards()
      const newData = onResultData(data)
      setCards(newData)
    })()
  }, [])


  const onCloseModal = () => {
    setIsOpen(false)
  }

  const onAddCard = (item) => {
    const newCards = cards.filter(i => i.id !== item.id)
    setCards(newCards)
  }

  const onChangeInput = async () => {
    console.log('onChangeInput', inputRef.current.value);
    const { data } = await onSearchCards(inputRef.current.value);
    const newData = onResultData(data);
    setCards(newData)
  }

  return (
    <div className="flex flex-col">
      <Modal isOpen={isOpen} item={cards} onClose={onCloseModal} onAddCard={onAddCard} inputRef={inputRef} onChangeInput={onChangeInput} />
      <Navbar />
      <main className='h-552 overflow-scroll'>
      </main>
      <Footer />
    </div>
  )
}

export default App
