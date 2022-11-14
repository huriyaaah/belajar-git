import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import './css/style.css'
import SkillsPage from './pages/SkillsPage'
import ArticlePage from './pages/ArticlePage'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={ <HomePage/> } />
      <Route path='/about' element={ <AboutPage/> } /> 
      <Route path='/skills' element={ <SkillsPage/> } />
      <Route path='/article' element={ <ArticlePage/> } /> 
    </Routes>
    <Footer/>
    </>
  )
}

export default App
