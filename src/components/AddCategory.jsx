import { useState } from "react";

export const AddCategory = ({nuevoValor}) => {

  const [estadoInput, setEstadoInput] = useState("");

  const inputChange = ({ target }) => {
    setEstadoInput(target.value);
  };

  const onSubmit = (eventoSubmit) => {
    eventoSubmit.preventDefault();
    if (estadoInput.length <= 1) return;
    nuevoValor(estadoInput.trim());
    setEstadoInput("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder=" Buscar gif"
        value={estadoInput}
        onChange={inputChange}
      ></input>
    </form>
  );
};
