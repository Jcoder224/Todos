const input = document.getElementById('main')
const output = document.getElementById('output')
const imageURL = document.getElementById('url')
const imageText = document.getElementById('text')

function search() 
{
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo') 

    const image = document.createElement('img')
    image.src = imageURL.value;
    image.alt = imageText.value ;
    image.height = "200" ;
    image.style.border ="2px solid black"


    const para = document.createElement('p')
    para.textContent = imageText.value ;

    const deletebtn = document.createElement('button')
    deletebtn.textContent= "❌";


    todoDiv.append(image , para, deletebtn);
    input.appendChild(todoDiv);
    imageURL.value = ""
    imageText.value = ""
    
    
}