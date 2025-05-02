const customers = [
  { name: 'Steve Jobs', city: 'San Francisco' },
  { name: 'Bill Gates', city: 'Medina' },
  { name: 'Mark Zuckerberg', city: 'Palo Alto' },
  { name: 'Lucy the Samoyed', city: 'Governador Valadares' },
  { name: 'William Oliveira', city: 'Governador Valadares' },
  { name: 'Juliana Oliveira', city: 'Governador Valadares' },
];

/**
 * Returns a list of customers.
 * @returns {Array} Array of customer objects.
 */
export const getCustomers = () => {
  return customers;
};
