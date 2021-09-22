export function calculateOrderTotal(orderLineItems) {
  let total = 0;

  for (let i in orderLineItems) {
    const item = orderLineItems[i];
    const subtotal = item.price * item.quantity;
    total += subtotal;
  }

  return total;
}