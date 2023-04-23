import { useEffect, useState } from 'react';
import CardItem from './ui/CardItem';
import Cards from 'api/cards.json'
export default function Card() {
  
  const [cards, setCards] = useState([])

  useEffect(()=>{
    setCards(Cards)
  },[])
  return <>
    <div className='grid mt-4 gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {cards.map((card,index)=><CardItem key={index} card={card}/>)}
    </div>
  </>;
}
