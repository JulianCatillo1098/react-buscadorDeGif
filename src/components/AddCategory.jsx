import { useState } from "react";
import Proptypes from 'prop-types'

export const AddCategory = ({nuevoValor}) => {

  const [estadoInput, setEstadoInput] = useState("");

  const inputChange = ({target}) => {
    setEstadoInput(target.value);

  };
  
  const onSubmit = (eventoSubmit) => {
    eventoSubmit.preventDefault();
    if (estadoInput.trim().length <= 1) return;
    setEstadoInput('');
    
    nuevoValor(estadoInput.trim());
    
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder=" Buscar gif"
        value={estadoInput}
        onChange={(e)=>inputChange(e)}
      ></input>
    </form>
  );
};

AddCategory.prototype={
  nuevoValor: Proptypes.func.isRequired
}