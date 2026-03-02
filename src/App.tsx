import Perfil from './components/Perfil/Perfil'
import './App.css'
import Tarjeta from './components/Tarjeta/Tarjeta'

const App = () => {

  return (
    <>
      <h1>Mis Tareas</h1>
      <Tarjeta title='Pagar Hacienda' priority='urgent' />
      <Tarjeta title='Reponer Azucar' priority='normal'/>
    </>
  )
}

export default App
