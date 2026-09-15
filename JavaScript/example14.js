// A function that calculates the total cost of items including tax
function calculateTotal(price, quantity, taxRate) {
    let subtotal = price * quantity;
    let total = subtotal + (subtotal * taxRate);

    return total;
}

// Saving the returned result into a variable
let orderTotal = calculateTotal(25, 3, 0.08);

console.log(orderTotal); // Output: 81