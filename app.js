const search = document.querySelector("#search-btn");
const remove = document.querySelector("#remove-btn");
const gifs = document.querySelector("#gifs");

search.addEventListener('click', function(e) {
    e.preventDefault();
    let input = document.querySelector("#search-input");
    searchGiphy(input.value);
    input.value = '';
})

remove.addEventListener('click', function(e) {
    e.preventDefault();
    while (gifs.firstChild) {
        gifs.removeChild(gifs.firstChild);
    }
})

async function searchGiphy(search) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=ruUzzltGT2M2nsVUjtj08j8f3schpIop`);
    newGif(res.data);
}

function newGif(response) {
    if (response.data.length > 0) {
        const randomIdx = Math.floor(Math.random() * response.data.length);
        const newGif = document.createElement('img');
        newGif.src = response.data[randomIdx].images.original.url;
        gifs.append(newGif);
    }

    
}