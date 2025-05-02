import React, { useEffect, useState } from 'react';
import { getCustomers } from '../services/CustomerService';

const CustomerList = () => {
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    // Fetch customers from CustomerService
    const customers = getCustomers();
    setCustomerData(customers);
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customerData.map((customer, index) => (
          <li key={index}>
            {customer.name} - {customer.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
