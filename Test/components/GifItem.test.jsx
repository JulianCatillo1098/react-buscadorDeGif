import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('pruebas en GifItem', () => {

    const title='JULIAN'
    const url ='https://one-punch.com/julian.jpg' 

    test('debe de hacer match con el snapsho',() => {

        const { container } = render (<GifItem title={title} url = {url}/>)
        expect (container).toMatchSnapshot()
        
    
    })

    test('la img debe ter el src y el atl que estoy wnviando',()=>{
        render (<GifItem title={title} url={url}/>)
        // screen.debug() ----srive para ver que vamos a evaluar ---
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        // --- destructuramos las dos lineas anteriores ---
        const { src, alt} = screen.getByRole('img')
        expect (src).toBe(url)
        expect(alt).toBe(title)
        
    })

    test ('debe mostrar el tituko en el componente',()=>{
        render (<GifItem title={title} url={url}/>)
        expect (screen.getByText(title)).toBeTruthy()

    })

    test


})