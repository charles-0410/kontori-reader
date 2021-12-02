import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Welcome } from './pages/welcome'
import { Header } from './components/header'
import { Nav } from './components/nav'
import styles from './app.module.css'

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
      <Nav />
    </main>
  )
}

export default App
