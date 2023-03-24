import { render,screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"
jest.mock("../../src/hooks/useFetchGifs")

describe('prueba del compunente GifFrid',()=>{
    
    const category = 'dragon ball'
    
    
    test('debe mostrar el loading inicialmente ', () => {


        useFetchGifs.mockReturnValue({
            imagenes: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })

    test("debe de mostrar items cuando se carga las imagenes useFetchGifs", () => {
        const gifs = [
          {
            id: "ABC",
            title: "Dragon ball",
            url: "https/dragoBall/Goku.com",
          },
          {
            id: "ABC",
            title: "padrinos",
            url: "https/padrinos/Goku.com",
          },
        ];
    
        useFetchGifs.mockReturnValue({
          imagenes: gifs,
          isLoading: false,
        });
        render(<GifGrid category={category} />);
    
        expect(screen.getAllByRole("img").length).toBe(2);
      });
})