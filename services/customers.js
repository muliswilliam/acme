export async function getCustomers() {
  const response = await fetch("/data/customers.json");

  if (response.ok)
    return response.json();

  throw new Error(response.statusText);
}