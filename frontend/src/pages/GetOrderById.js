import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GetOrderById = () => {
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3010/Customers/' + id ) 
            .then((res) => res.json())
            .then((res) => setDetail(res))
            .catch((error) => console.error("Error fetching order details:", error));
    },[id]);

   

    return (
        <>
            <h1>Order Details</h1>
            <p><strong>Customer ID:</strong> {detail.CustomerId}</p>
            <p><strong>Customer Name:</strong> {detail.CustomerName}</p>
            <p><strong>Order Name:</strong> {detail.OrderName}</p>
            <p><strong>Order Type:</strong> {detail.OrderType}</p>
            <p><strong>Price:</strong> {detail.Price}</p>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <input type="button" className="btn btn-warning" value="Edit" onClick={(e) => {
                                navigate('/EditOrder/'+ id );
                                e.preventDefault();
                            }} />
                        </td>
                        <td>
                            <input type="button" className="btn btn-danger" value="Delete" onClick={(e)=>{
                                 fetch('http://localhost:3010/Customers/'+ id, { method: "DELETE" })
                                 .then(() => navigate("/GetAllOrders"))
                                 .catch((error) => console.error("Error deleting order:", error));
                                 e.preventDefault();
                            }} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default GetOrderById;
