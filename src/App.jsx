import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import { item } from './utils/index';
function App() {
  
  const [cartItems, setCartItems] = useState(item)
  const [currentId, setCurrentId] = useState(1);

  const handleAddItem = () => {
    const newItem = { id: currentId, price: 10, quantity: 4, total: 40 };
    setCartItems(prevCartItems => [...prevCartItems, newItem]);
    setCurrentId(prevId => prevId + 1);
  }

  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} handleAddItem={handleAddItem} />
      <Hero cartItems={cartItems} setCartItems={setCartItems} handleAddItem={handleAddItem} />
    </>
  )
}

export default App
