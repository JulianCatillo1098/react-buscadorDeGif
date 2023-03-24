import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [imagenes, setImagenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const nuevaImagen = await getGifs(category);
    setImagenes(nuevaImagen);
    setIsLoading(false)
  };

  useEffect(() => {
    getImages(category);
  }, []);
  
  return {
    imagenes: imagenes,
    isLoading: isLoading,
  };
};
