function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/todos') 
        .then(res => res.json())
        .then(data => displayPost(data))
}

loadPosts()

function displayPost (todos){
const ui = document.getElementById('todos')
for(const todo of todos){
    console.log(todo);
    const Div = document.createElement('div');
    Div.classList.add('todo')
    Div.innerHTML = `
        <p>${todo.userId}</P>
        <p>${todo.id}</P>
        <h3 class="title">${todo.title}</h3>
        <p>${todo.completed}</P>
        <button class="btn-light">See Details</button>

    `
    ui.appendChild(Div)
    

}

}

