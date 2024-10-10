import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditOrder = () => {
    const [data, setData] = useState({
        CustomerId: '',
        CustomerName: '',
        OrderName: '',
        OrderType: '',
        Price: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch existing order data when the page loads
    useEffect(() => {
        fetch(`http://localhost:3010/Customers/${id}`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.error("Error fetching order details:", error));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3010/Customers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            . then((res) => res.json())
            .then(() => navigate("/GetAllOrders"))
            .catch((error) => console.error("Error updating order:", error));
    };

    return (
        <>
            <div>
                <h2>Edit Order</h2>
                <form onSubmit={handleUpdate}>
                    <table align="center">
                        <tbody>
                            <tr>
                                <td><h5>Customer ID</h5></td>
                                <td><input
                                    type="text"
                                    value={data.CustomerId}
                                    onChange={(e) => setData({ ...data, CustomerId: parseInt(e.target.value) })}
                                    disabled
                                /></td>
                            </tr>
                            <tr>
                                <td><h5>Customer Name</h5></td>
                                <td><input
                                    type="text"
                                    value={data.CustomerName}
                                    onChange={(e) => setData({ ...data, CustomerName: e.target.value })}
                                /></td>
                            </tr>
                            <tr>
                                <td><h5>Order Name</h5></td>
                                <td><input
                                    type="text"
                                    value={data.OrderName}
                                    onChange={(e) => setData({ ...data, OrderName: e.target.value })}
                                /></td>
                            </tr>
                            <tr>
                                <td><h5>Order Type</h5></td>
                                <td><input
                                    type="text"
                                    value={data.OrderType}
                                    onChange={(e) => setData({ ...data, OrderType: e.target.value })}
                                /></td>
                            </tr>
                            <tr>
                                <td><h5>Price</h5></td>
                                <td><input
                                    type="text"
                                    value={data.Price}
                                    onChange={(e) => setData({ ...data, Price: parseFloat(e.target.value) })}
                                /></td>
                            </tr>
                            <tr align="center">
                                <td colSpan={2}>
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
};

export default EditOrder;