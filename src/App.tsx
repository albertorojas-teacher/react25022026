import Perfil from './components/Perfil/Perfil'
import './App.css'

const App = () => {

  return (
    <>
      <Perfil username='Daniel' profession='Estudiante' completedModules={1} isActive />
      <Perfil username='Alberto' profession='Profe' completedModules={10} isActive />
      <Perfil username='Egle' profession='Profe' completedModules={2} isActive />
      <Perfil username='Jorge' profession='Estudiante' completedModules={1} isActive />
      <Perfil username='Sonia' profession='Estudiante' completedModules={1} isActive />
      <Perfil username='Guilherme ' profession='Estudiante' completedModules={1} isActive />
      <Perfil username='Ana' profession='Estudiante' completedModules={2} isActive />
      <Perfil username='Bouchra' profession='Estudiante' completedModules={3} isActive />
    </>
  )
}

export default App
