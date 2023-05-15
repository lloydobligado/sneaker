import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import { item } from './utils/index';
function App() {
  
  const [cartItems, setCartItems] = useState(item)

  const handleAddItem = () => {
    const newItem = { price: 10, quantity: 4, total: 40 };
    setCartItems(prevCartItems => [...prevCartItems, newItem]);
    console.log(cartItems);
  }

  return (
    <>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} handleAddItem={handleAddItem} />
      <Hero cartItems={cartItems} setCartItems={setCartItems} handleAddItem={handleAddItem} />
    </>
  )
}

export default App
