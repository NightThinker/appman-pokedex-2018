import React, { useState, useEffect, useRef } from 'react'

import Navbar from './shared/theme/navBar/NavBar'
import Footer from './shared/theme/Footer/Footer'
import Modal from './shared/components/Modal/Modal'
import Card from './shared/container/Card/Card'

import { onGetCards, onSearchCards } from './shared/api/api'

import './App.css'
import './shared/styles/tailwind.css'

const onResultData = (card) => {
  return card.cards.map(i => {
    const hp = i.hp >= 100 ? 100 : 0;
    const attacks = i.attacks ? i.attacks.length * 50 : 0;
    const weaknesses = i.weaknesses ? i.weaknesses.length * 100 > 100 ? 100 : 100 : 0;
    const damage = i.attacks ? i.attacks.reduce((acc, cur) => acc + (cur.damage ? parseInt(cur.damage) : 0), 0) : 0;
    const happiness = Math.round(Math.abs(((hp / 10) + (damage / 10) + 10 - (weaknesses)) / 5))
    return {
      id: i.id,
      name: i.name,
      img: i.imageUrl,
      hp: `${hp}%`,
      strength: `${attacks}%`,
      weaknesses: `${weaknesses}%`,
      damage,
      happiness
    }
  })
}

const App = () => {

  const [isOpen, setIsOpen] = useState(false)
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
    setList(list.concat(item))
  }

  const onDeleteCard = (id) => {
    const result = list.filter(i => i.id !== id)
    setList(result)
  }

  const onChangeInput = async () => {
    const { data } = await onSearchCards(inputRef.current.value);
    const newData = onResultData(data);
    setCards(newData)
  }

  return (
    <div className="flex flex-col relative">
      <Modal isOpen={isOpen} item={cards} onClose={onCloseModal} onAddCard={onAddCard} inputRef={inputRef} onChangeInput={onChangeInput} />
      <Navbar />
      <main className='h-552 overflow-scroll grid grid-cols-2 p-3 gap-3'>
        {list.map(({ id, img, name, hp, strength, weaknesses, happiness }) => (
          <Card
            key={id}
            id={id}
            img={img}
            name={name}
            hp={hp}
            str={strength}
            weak={weaknesses}
            happiness={happiness}
            onDeleteCard={onDeleteCard}
          />
        ))}
      </main>
      <Footer onClickBtn={() => setIsOpen(true)} />
    </div>
  )
}

export default App
