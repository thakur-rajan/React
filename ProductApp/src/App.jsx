import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import { ItemContext } from './context/Context';
import { useState } from 'react';
export default function App(){
   const [cartItem,setCartItem]=useState(0);
   return (
    <>
    <ItemContext.Provider value={{cartItem,setCartItem}}>
      <Header/>
      <Body/>
      <Footer/>
    </ItemContext.Provider>  
    </>
   )
}