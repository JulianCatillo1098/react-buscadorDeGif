import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe("Pruebas en el hook useFetchGifs", () => {

  test("debede regresar el estado inicial", () => {

    const { result } = renderHook(() => useFetchGifs("dragon"));
    const { imagenes, isLoading } = result.current;

    expect(imagenes.length).toBe(0);
    expect(isLoading).toBeTruthy();

  });

  test("debede regresar un arreglo de imagenes y isLoading en false",async () => {

    const { result } = renderHook(() => useFetchGifs("dragon"));
    
    await waitFor(
        ()=>expect(result.current.imagenes.length).toBeGreaterThan(0)
    )
    
    const { imagenes, isLoading } = result.current;

    expect(imagenes.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
    
  });
});
