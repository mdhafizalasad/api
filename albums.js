function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/albums') 
        .then(res => res.json())
        .then(data => displayPost(data))
}

loadPosts()

function displayPost (albums){
const ui = document.getElementById('albums')
for(const album of albums){
    console.log(album);
    const Div = document.createElement('div');
    Div.classList.add('album')
    Div.innerHTML = `
        <p>${album.userId}</P>
        <p>${album.id}</P>
        <h3 class="title">${album.title}</h3>
        <button class="btn-light">See Details</button>

    `
    ui.appendChild(Div)
    

}

}

