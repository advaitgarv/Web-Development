const inventory = [];
function findProductIndex(productName) {
  productName = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) {
      return i;
    }
  }
  return -1;
}
function addProduct(product) {
  let name = product.name.toLowerCase();
  let quantity = product.quantity;

  let index = findProductIndex(name);
  if (index !== -1) {
    inventory[index].quantity += quantity;
    console.log(name + " quantity updated");
  } else {
    inventory.push({ name: name, quantity: quantity });
    console.log(name + " added to inventory");
  }
}
function removeProduct(productName, quantity) {
  let name = productName.toLowerCase();
  let index = findProductIndex(name);

  if (index === -1) {
    console.log(name + " not found");
    return;
  }

  let currentQuantity = inventory[index].quantity;

  if (quantity > currentQuantity) {
    console.log(
      "Not enough " + name + " available, remaining pieces: " + currentQuantity
    );
    return;
  }

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(
      "Remaining " + name + " pieces: " + inventory[index].quantity
    );
  }
}


