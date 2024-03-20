const products = {
  "frango": 10.00,
  "grão de bico": 8.00,
  "massa": 5.00,
  "iogurte": 7.50,
  "leite": 3.49,
}

function consultPrice() {
  const productInput = document.getElementById('product').value.toLowerCase()
  if (products.hasOwnProperty(productInput)) {
    const price = products[productInput]
    document.getElementById('result').innerText = `O preço do produto "${productInput}" é R$ ${price.toFixed(2)}`
  } else {
    document.getElementById('result').innerText = `Produto "${productInput}" não encontrado.`
  }
}

