class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    // Calculate the total price of items in the cart
    // ...
  }
}

// Usage:
// const cart = new ShoppingCart();
// cart.addItem(item1);
// cart.addItem(item2);
// const totalPrice = cart.calculateTotal();
