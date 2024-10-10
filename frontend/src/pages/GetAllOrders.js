import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetAllOrders = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3010/Customers")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const formattedData = data.map((Customers) => {
    return (
      <li key={Customers.CustomerId}>
        <div>
          <strong>Customer ID:</strong> {Customers.CustomerId}
          <br />
          <strong>Customer Name:</strong> {Customers.CustomerName}
          <br />
          <strong>Order Name:</strong> {Customers.OrderName}
          <br />
          <strong>Order Type:</strong> {Customers.OrderType}
          <br />
          <strong>Price:</strong> {Customers.Price}
        </div>
        <button onClick={() => navigate("/Customers/" + Customers.CustomerId)}>
          View Order
        </button>
      </li>
    );
  });

  return (
    <div>
      <h1>Orders Here!</h1>
      <ol>{formattedData}</ol>
    </div>
  );
};

export default GetAllOrders;
