import React from "react";


function Juego(props){
    let [numeroUsuario, setNumeroUsuario] = React.useState(0);
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random()* props.limite)+1);

    function comprobarNumeroUsuario(event){
        setNumeroUsuario(parseInt(event.target.value));
    }

    function ComprobarNumeroMaquina(){
        if(numeroUsuario === numeroMaquina){
            alert("¡Has acertado!");
        }else{
            alert("¡Has fallado! El número era: " + numeroMaquina);
        }
        setNumeroMaquina(Math.floor(Math.random()* props.limite)+1);
    }

    return(
        <div>
            <p>Elige un numero del 1 al 10:</p>
            <input 
            type="number" 
            min={1} 
            max={10} 
            placeholder="Ingresa tu apuesta"
            onChange={comprobarNumeroUsuario}></input>
            <br></br>
            <button onClick={ComprobarNumeroMaquina}>
                Adivinar
            </button>

        </div>
    )
}

export default Juego;