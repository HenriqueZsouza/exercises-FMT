function changeColor(newColor) {
  let element = document.getElementById('title')
  element.style.color = newColor
}

function changeText(newText) {
  let elements = document.querySelectorAll('.text p')
  elements.forEach(element => {
    element.textContent = newText
  })
}

let newElement = document.createElement('p')

let newText = document.createTextNode('Novo elemento!')
newElement.appendChild(newText)

let container = document.getElementById('container')
container.appendChild(newElement)