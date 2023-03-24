import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import { SorteoApp } from "./components/SorteoApp";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([]);

  const agregagarCategoria = (categoriaEscrita) => {
    if (categorias.includes(categoriaEscrita)) return;
    setCategorias([categoriaEscrita, ...categorias]);
  };

 
  return (
    <>
   
      <h1>Buscador de gif </h1>

      <AddCategory nuevoValor={agregagarCategoria} />

      {categorias.map((cadaElemntoDeLaCategoria) => {
        return  <GifGrid category={cadaElemntoDeLaCategoria} key={cadaElemntoDeLaCategoria} />;
      
      })}
      <p>Julian Castillo </p>
    </>
  );
};
