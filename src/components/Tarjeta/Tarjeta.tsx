import './Tarjeta.css'
interface TarjetaProps {
    title: string;
    priority: 'urgent' | 'normal';
}

const Tarjeta = (props:TarjetaProps) => {
    // LÓGICA: Si la prioridad es 'urgente', usamos la clase 'urgente', si no, 'normal'
    const classPriority = props.priority === 'urgent' ? 'urgent' : 'normal'
  return (
    <div className={`card ${classPriority}`}>
        <h3>{props.title}</h3>
        <p>Level Priority: {props.priority} </p>
    </div>
  )
}

export default Tarjeta