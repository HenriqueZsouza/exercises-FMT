const products = {
  "frango": 10.00,
  "grão de bico": 8.00,
  "massa": 5.00,
  "iogurte": 7.50,
  "leite": 3.49,
}

let cart = JSON.parse(localStorage.getItem('cart')) || []

function consultPrice() {
  const productInput = document.getElementById('product').value.toLowerCase()
  if (products.hasOwnProperty(productInput)) {
    const price = products[productInput]
    document.getElementById('result').innerText = `O preço do produto "${productInput}" é R$ ${price.toFixed(2)}`
  } else {
    document.getElementById('result').innerText = `Produto "${productInput}" não encontrado.`
  }
}

function buyProduct() {
  const productInput = document.getElementById('product').value.toLowerCase()
  if (products.hasOwnProperty(productInput)) {
    cart.push({ name: productInput, price: products[productInput] })
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`Produto "${productInput}" adicionado ao carrinho.`)
  } else {
    alert(`Produto "${productInput}" não encontrado.`)
  }
}

function calculateTotal() {
  let total = 0
  cart.forEach(item => {
    total += item.price
  })

  if (total > 0) {
    document.getElementById('total').innerText = `Total da compra: R$ ${total.toFixed(2)}`
  } else {
    document.getElementById('total').innerText = 'Carrinho vazio'
  }
}

function updatedAmount() {
  document.getElementById('amount-value').innerText = cart.length
}

function updatedTotal() {
  let total = 0
  cart.forEach(item => {
    total += item.price
  })
  document.getElementById('total-value').innerText = total.toFixed(2)
}

updatedAmount()
updatedTotal() 