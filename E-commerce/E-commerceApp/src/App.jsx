import Home from './Pages/Home/Home'
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
         <Footer/> 
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
