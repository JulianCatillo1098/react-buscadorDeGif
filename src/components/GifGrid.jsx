import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import Proptypes from 'prop-types'

export const GifGrid = ({ category }) => {
  const{ imagenes,isLoading} = useFetchGifs (category)

  return (
    <>
    {isLoading && <h2>Cargando...</h2>}
      <h3>{category}</h3>
      <div className="card-grid">
        {imagenes.map((imagen) => {
          return <GifItem key={imagen.id} 
          // title={imagen.title} url={imagen.url}
          {...imagen}
          />
        })}
      </div>
    </>
  );
};

GifGrid.protoType={
  category : Proptypes.string.isRequired
}