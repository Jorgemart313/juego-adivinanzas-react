import imagen from './imagen.png';

function Titulo() {
  return (
    <div className="titulo">
      <h1>Juego de Adivinanzas</h1>
       <hr></hr>
      <img src={imagen} alt="Imagen de adivinanza" />
    </div>
  );
}

export default Titulo;