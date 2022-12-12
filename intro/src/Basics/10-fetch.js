const apiKey = 'Xp1NOWWZK1014524bGGFhgLaSrZFaNml'

const giphy_request = fetch (`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

giphy_request
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img);
    })
    .catch(console.warn);