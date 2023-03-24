import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe ('testes para evaluar mi componete AddCategory',()=>{
    test('debe de cambiar el valor de la caja de texto ', () => { 
        render(<AddCategory nuevoValor={()=>{}}/>)
        const input = screen.getByRole('textbox')
        fireEvent.input(input,{target:{value: 'JULIAN'}})
        expect(input.value).toBe('JULIAN')
    })

    test ('debe de llamar el nuevoValor si el input tiene un valor ',()=>{

        const inputValue='JULIAN'
        const nuevoValor= jest.fn()

        render (<AddCategory nuevoValor={nuevoValor}/>)
        const input= screen.getByRole('textbox');
        const form = screen.getByRole('form')

        fireEvent.input(input,{target:{value:inputValue}})
        fireEvent.submit(form)
        // screen.debug()
        expect (input.value).toBe('')
        expect(nuevoValor).toHaveBeenCalled()
        expect(nuevoValor).toHaveBeenCalledTimes(1)
        expect(nuevoValor).toHaveBeenCalledWith(inputValue)
    })

    test('no debe ser llamada la funcion por la condicion', () => {
        const nuevoValor= jest.fn()
        
        render (<AddCategory nuevoValor={nuevoValor}/>) 

        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(nuevoValor).toHaveBeenCalledTimes(0)

        

    })

})

