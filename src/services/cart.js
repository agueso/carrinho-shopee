//quais ações o meu carrinho pode fazer
//CASOS DE USO
// ->adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ->calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nShopee Cart total is:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: ${result}`);
}

// ->deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// ->remover um item - diminui um item
async function removeItem(userCart, index) {
  // transforma o index visual do usuário para o index do backend
  const deleteIndex = index - 1;
  //é maior do que zero e se é maior que o tamanho do carrinho
  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

async function displayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      } | Subtotal = ${item.subtotal()}`
    );
  });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
