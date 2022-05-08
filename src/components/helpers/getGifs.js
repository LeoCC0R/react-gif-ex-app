

    export const getGifs = async( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=r4u1bLZrqCe75NyrAy6Ya4izoIRtyVLR`
        const resp = await fetch (url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url   //El "?" es una condicional por si trae imagenes que aplique esta regla
            }
        })

        return gifs;


    }
