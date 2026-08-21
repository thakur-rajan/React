import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Home  from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

export default function App(){

  return (
    <>
     <div className="app">
       <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
     </div>

    </>
  )
}