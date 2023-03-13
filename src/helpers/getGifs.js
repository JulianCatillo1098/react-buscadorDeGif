export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5wpB5paPu1FAqGTz9jKWw48KgevfcY2Z&q=${category}&limit=5`
    const respuesta = await fetch(url)
    const {data}= await respuesta.json()
 

    const gifs = data.map(img =>({
        
            id : img.id,
             title: img.title,
             url: img.images.downsized_medium.url
            }))
            return gifs
        
    
}