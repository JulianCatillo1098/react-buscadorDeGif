import { useState } from "react";



export const SorteoApp = () => {
    const [equipos, setEquipos] = useState(["pescara","merseyside red","juevntus","atletico","benfica","olympique de marcella","man blue","flamnego","tedloghec","north london","manchester united","barcelona","sc internacional","psv","atletico mineiro","bayer munich",]);
    const [equiposd, setEquiposd] = useState(["bosnia","colombia","brasil","suiza","chile","italia","serbia","bulgaria","costa rica ","francia","holanda","iran","inglaterra","argentina","polonia","venezuela",]);
      
  function generarPosicionesAleatorias(n) {
    const posiciones = Array.from(Array(n).keys());
    posiciones.sort(() => Math.random() - 0.5);
    return posiciones;
  }

  function generarPosicionesAleatoriasd(n) {
    const posicionesd = Array.from(Array(n).keys());
    posicionesd.sort(() => Math.random() - 0.5);
    return posicionesd;
  }

  function cambiarPosiciones() {
    const posiciones = generarPosicionesAleatorias(equipos.length);
    const nuevoArreglo = posiciones.map((posicion) => equipos[posicion]);
    setEquipos(nuevoArreglo);
  }
  function cambiarPosicionesd() {
    const posicionesd= generarPosicionesAleatoriasd(equiposd.length);
    const nuevoArreglod= posicionesd.map((posicion) => equiposd[posicion]);
    setEquiposd(nuevoArreglod);
  }

  return (
    <>
      <div>
        <button onClick={cambiarPosiciones}>Cambiar posiciones</button>
        <button onClick={cambiarPosicionesd}>Cambiar posiciones</button>
      </div>
      <div className="row d-flex">
        <h3>Grupo A</h3>
        <input value={equipos[0]} />
        <input value={equipos[1]} />
        <input value={equiposd[0]} />
        <input value={equiposd[1]} />
      </div>
      <div className="row d-flex">
        <h3>Grupo B</h3>
        <input value={equipos[2]} />
        <input value={equipos[3]} />
        <input value={equiposd[2]} />
        <input value={equiposd[3]} />
      </div>
      <div className="row d-flex">
        <h3>Grupo C</h3>
        <input value={equipos[4]} />
        <input value={equipos[5]} />
        <input value={equiposd[4]} />
        <input value={equiposd[5]} />
      </div>
      <div className="row d-flex">
        <h3>Grupo D</h3>
        <input value={equipos[6]} />
        <input value={equipos[7]} />
        <input value={equiposd[6]} />
        <input value={equiposd[7]} />
      </div>
      <div className="row d-flex">
        <h3>Grupo E</h3>
        <input value={equipos[8]} />
        <input value={equipos[9]} />
        <input value={equiposd[8]} />
        <input value={equiposd[9]} />
      </div>
      <div className="row d-flex">
        <h3>Grupo F</h3>
        <input value={equipos[10]} />
        <input value={equipos[11]} />
        <input value={equiposd[10]} />
        <input value={equiposd[11]} />
      </div>
      <div className="row d-flex">
        <h3>Grupo G</h3>
        <input value={equipos[12]} />
        <input value={equipos[13]} />
        <input value={equiposd[12]} />
        <input value={equiposd[13]} />
      </div>
      <div className="row d-flex">
        <h3>Grupo H</h3>
        <input value={equipos[14]} />
        <input value={equipos[15]} />
        <input value={equiposd[14]} />
        <input value={equiposd[15]} />
      </div>
    </>
  );
};
