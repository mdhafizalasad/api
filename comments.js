
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/comments') 
        .then(res => res.json())
        .then(data => displayPost(data))
}

loadPosts()

function displayPost (comments){
const ui = document.getElementById('comments')
for(const comment of comments){
    console.log(comment);
    const Div = document.createElement('div');
    Div.classList.add('comment')
    Div.innerHTML = `
        <p>${comment.postId}</P>
        <p>${comment.id}</P>
        <h3 class="title">${comment.name}</h3>
        <p>${comment.email}</p></br>
        <p>${comment.body}</p></br>
        <button class="btn-success">See Details</button>

    `
    ui.appendChild(Div)
    

}

}