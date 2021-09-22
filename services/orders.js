import { calculateOrderTotal } from "../utils/orders";

export async function getOrders() {
  const ordersResponse = await fetch("/data/orders.json");

  if (!ordersResponse.ok)
    throw new Error(ordersResponse.statusText);

  const orderLineItemsResponse = await fetch("/data/orderLineItems.json");

  if (!orderLineItemsResponse.ok)
    throw new Error(ordersResponse.statusText);

  const orders = await ordersResponse.json();
  const orderLineItems = await orderLineItemsResponse.json();

  const ordersWithLineItems = orders.map(order => {
    const lineItems = orderLineItems.filter(orderLineItem => orderLineItem.orderId == order.id);
    const total = calculateOrderTotal(lineItems);
    order.lineItems = lineItems;
    order.amount = total;

    return order;
  });

  return ordersWithLineItems;
}