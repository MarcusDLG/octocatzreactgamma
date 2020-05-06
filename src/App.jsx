import React from 'react'
import CatCard from './components/CatCard'
import Footer from './components/Footer'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <CatCard />
      </main>
      <Footer />
    </>
  )
}

export default App
