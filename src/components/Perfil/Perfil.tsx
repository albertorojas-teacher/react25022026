import './Perfil.css'

interface PerfilProps {
  username: string;
  profession:string;
  completedModules: number;
  isActive: boolean
}

const Perfil = ( props: PerfilProps) => {
  return (
    <div className='card-profile'>
      <h2 className='name'>{props.username}</h2>
      <p className='profession'>{props.profession}</p>
      <p>Modulos restantes: {10 - props.completedModules}</p>

     {props.isActive ? <span className='tag-state'>En linea</span> : null} 
    </div>
  )
}

export default Perfil