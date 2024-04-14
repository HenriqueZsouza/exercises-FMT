// function changeColor(newColor) {
//   let element = document.getElementById('title')
//   element.style.color = newColor
// }

// function changeText(newText) {
//   let elements = document.querySelectorAll('.text p')
//   elements.forEach(element => {
//     element.textContent = newText
//   })
// }

// let newElement = document.createElement('p')

// let newText = document.createTextNode('Novo elemento!')
// newElement.appendChild(newText)

// let container = document.getElementById('container')
// container.appendChild(newElement)

// let paragraph = document.getElementById('paragraph')
// var removeText = document.getElementById('container')
// container.removeChild(removeText)

// function changeNewColor(colors) {
//   let elementColors = document.getElementById('newColor')
//   elementColors.style.color = colors
// }

// let newClass = document.getElementById('newClass')
// newClass.classList.add('newClassCreated')

// let removeClass = document.getElementById('removeClass')
// paragrafo.classList.remove('removed-class')

// let image = document.getElementById('image')
// image.setAttribute('titulo', 'Descrição da imagem')

// var imageTwo = document.getElementById('imageTest')
// imageTwo.removeAttribute('title')

function addTask() {
  var taskInput = document.getElementById('taskInput')
  var taskList = document.getElementById('taskList')

  if (taskInput.value.trim() === '') {
    alert('Insira uma tarefa!')
    return
  }

  let listItem = document.createElement('li')
  listItem.textContent = taskInput.value

  let completeButton = document.createElement('button')
  completeButton.textContent = 'Concluir'
  completeButton.onclick = function () {
    listItem.classList.toggle('completed')
  }
  listItem.appendChild(completeButton)

  let removeButton = document.createElement('button')
  removeButton.textContent = 'Remover'
  removeButton.onclick = function () {
    taskList.removeChild(listItem)
  }
  listItem.appendChild(removeButton)

  taskList.appendChild(listItem)

  taskInput.value = ''
}