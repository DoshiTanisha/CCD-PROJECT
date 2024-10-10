import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
    const [data, setData] = useState({
        CustomerId: "",
        CustomerName: "",
        OrderName: "",
        OrderType: "",
        Price: ""
    });
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Convert the Price and CustomerId to numbers before sending the request
        const updatedData = {
            ...data,
            CustomerId: parseInt(data.CustomerId, 10),
            Price: parseFloat(data.Price)
        };

        fetch("http://localhost:3010/Customers", { // Make sure the endpoint is correct
            method: "POST",
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(() => {
            navigate('/GetAllOrders'); // Redirect to orders list after successful submission
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    };

    return (
        <div>
            <table align="center">
                <tbody>
                    <tr align="center">
                        <td colSpan={2}><h2>Add Order:-</h2></td>
                    </tr>
                    <tr>
                        <td><h5>Customer Id:</h5></td>
                        <td>
                            <input type="text" onChange={(e) => setData({ ...data, CustomerId: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td><h5>Customer Name:</h5></td>
                        <td>
                            <input type="text" onChange={(e) => setData({ ...data, CustomerName: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td><h5>Order Name:</h5></td>
                        <td>
                            <input type="text" onChange={(e) => setData({ ...data, OrderName: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td><h5>Order Type:</h5></td>
                        <td>
                            <input type="text" onChange={(e) => setData({ ...data, OrderType: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td><h5>Price:</h5></td>
                        <td>
                            <input type="text" onChange={(e) => setData({ ...data, Price: e.target.value })} />
                        </td>
                    </tr>
                    <tr align="center">
                        <td colSpan={2}>
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Submit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AddOrder;