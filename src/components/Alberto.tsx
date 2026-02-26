import React from 'react'
import reactSVG from '../assets/react.svg'
const Alberto = () => {
    //  DATOS PERSONALES
    const name:string = "Alberto"
    const edad:number = 38
    const jobs:string[] = ["Portero", "Barrendero", "Profesor"]
  return (
    <>
    <div className='text-blue-600/100 dark:text-sky-400/100'>{name} que tiene {edad} años de edad</div>
    <div>{jobs[1]}</div>
    <img src={reactSVG} alt="Algo" />
    </>
  )
}

export default Alberto