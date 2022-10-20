import { Banner } from './components/banner'
import { Clientes } from './components/clientes'
import { Sobre } from './components/Sobre'

import logo from './assets/logo-caju.png'

import './App.css'
import { Header } from './components/Header'

export function App() {
  return (
    <div className="App">
      <div className='content'>
        <Header logo={logo} altLogo='Logo Caju' />
        <Banner />
        <Clientes />
        <Sobre />
      </div>
    </div>
  )
}
