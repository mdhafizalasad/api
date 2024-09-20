//API = Aplication Programming Interface

// const user = {
//     name: "Al Asad",
//     age: 25,
//     email: "asad@gmail.com"
// }
// console.log(user);

// //JSON = javascript object notation

// const jsonConverted = JSON.stringify(user);
// console.log(jsonConverted);

// const normalObject = JSON.parse(jsonConverted)
// console.log(normalObject);

//console.log('connected');

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then(response => response.json())
//     //   .then(json => console.log(json))
//       .then(json => console.log(json.title))

// first way
// function loadApi(){
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(json => displayInfo(json))

// }

// function displayInfo(data){
//     document.getElementById('data-show').innerText = data.title

// }


// Second way
function loadApi(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => displayInformation(json))
}

function displayInformation(data){
    console.log(data);
    
    const screen = document.getElementById("data-show");
    screen.innerText = data.title
}



// use api load 
function loaduser(){
    fetch('https://jsonplaceholder.typicode.com/users') 
        // .then(res => console.log(res.json))
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayUser(data))
}

loaduser()

function displayUser(users){
    //console.log(users);
    const ui = document.getElementById('user');
    for (const user of users){
        //console.log(user);
        //console.log(user.name);
        //const ui = document.getElementById('user');
        const div = document.createElement('div');
        div.classList.add("user") 

        const p = document.createElement('p');
        p.innerText = user.username;
        //console.log(p);
        const h3 = document.createElement('h3');
        h3.innerText = user.name;

        const e = document.createElement('p');
        e.innerText = user.email;

        const a = document.createElement('p');
        a.innerText = user.phone;

        const w = document.createElement('p');
        w.innerText = user.website;

        // ui.appendChild(p);
        // ui.appendChild(h3);
        div.appendChild(p);
        div.appendChild(h3);
        div.appendChild(e);
        div.appendChild(a);
        div.appendChild(w);
        ui.appendChild(div);


    }

    // for(let i = 0; i > users.length;i++){

    // }
    
}

//displayUser('afal')

