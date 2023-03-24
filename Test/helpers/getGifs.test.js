import { getGifs } from "../../src/helpers/getGifs"

describe ('Prueba de gerGif',()=>{

    test('pruebas de que la url si me este enviandoo el objeto segun la categoria',async() => { 
        const categoria = 'messi'
        const gifs =await getGifs( {categoria})
        expect(gifs.length).toBeGreaterThan(4)
        
    })

})