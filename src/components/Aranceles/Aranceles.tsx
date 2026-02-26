function Aranceles() {
    const title = 'Has pagado por los aranceles, pero no recibirás ningún reembolso'
    const paragraph = 'CNN - El Gobierno está obligado a reembolsar US$ 134.000 millones (y la cifra sigue aumentando) en ingresos recaudados por los amplios aranceles del presidente Donald Trump que la Corte Suprema declaró ilegales la semana pasada.'
  return (
    <div>
      <h1 className="title">{title}</h1>
      <p className="paragraph">{paragraph}</p>
    </div>
  )
}

export default Aranceles