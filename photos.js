function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/photos') 
        .then(res => res.json())
        .then(data => displayPost(data))
}

loadPosts()

function displayPost (photos){
const ui = document.getElementById('photos')
for(const photo of photos){
    console.log(photo);
    const Div = document.createElement('div');
    Div.classList.add('photo')
    Div.innerHTML = `
        <p>${photo.albumId}</P>
        <p>${photo.id}</P>
        <h3 class="title">${photo.title}</h3>
        <img class="container" style="width: 100%" src="${photo.url}" alt="">
        <img  class="container" src="${photo.thumbnailUrl}" alt=""></br>
        <button class="btn-light">See Details</button>

    `
    ui.appendChild(Div)
    

}

}
