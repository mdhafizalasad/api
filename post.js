
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts') 
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => displayPost(data))
}

loadPosts()

function displayPost (posts){
//console.log(posts);
const ui = document.getElementById('posts')
for(const post of posts){
    console.log(post);
    const Div = document.createElement('div');
    //console.log(div);   // <del>${post.body}</del></br>
    Div.classList.add('post')
    Div.innerHTML = `
        <p>${post.id}</P>
        <h3 class="title">${post.title}</h3>
        <p>${post.userId}</P>
        <p>${post.body}</p></br>
        <button class="btn-success">See Details</button>

    `
    ui.appendChild(Div)
    //console.log(div);
    

}

}