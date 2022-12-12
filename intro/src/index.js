const getImage = async()=> {
    try {
        const apiKey = 'Xp1NOWWZK1014524bGGFhgLaSrZFaNml'

        const giphy_request = await fetch (`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await giphy_request.json();
        const {url} = data.images.original;
        const img = document.createElement('img')
        img.src = url
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }

}

getImage()
