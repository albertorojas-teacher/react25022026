import './Perfil.css'

const Perfil = () => {
// TODOS LOS DATOS
    const nameUser:string = "Alberto Rojas"
    const profession:string = "Desarrollador"
    const completedModules:number = 3
    const isActive:boolean=true 


  return (
    <div className='card-profile'>
        <h2 className='name'>{nameUser}</h2>
        <p className='profession'>{profession}</p>

        <p>Modulos restantes para graduarse: {10 - completedModules}</p>

        {isActive ? <span className='tag-state'>En linea</span> : null}
    </div>
  )
}

export default Perfil