async function changeBackgroundWhenSearch() {
    try {
        const randomPage = Math.floor(Math.random() * 200) + 1;
        const response = await fetch(`https://api.pexels.com/v1/search?query=landscape&per_page=1&page=${randomPage}`, {
            headers: { Authorization: 'suGmDhtHbnGCBTqiX7mZsgU7iA7cMZ1UPiuv1FX90Ozi2L0coZIUy87P' }
        })
        const res = await response.json();
        console.log(res.photos[0].src.original);
        const body = document.querySelector("body");
        body.style.cssText = `background-image: url('${res.photos[0].src.original}')`;
    } catch (error) {
        alert(error + "!")
    }
}

export { changeBackgroundWhenSearch }