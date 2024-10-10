import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,  Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import GetAllOrders from './pages/GetAllOrders';
import GetOrderById from './pages/GetOrderById';
import AddOrder from './pages/AddOrder';
import EditOrder from './pages/EditOrder';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path = "/Home" element={<Home/>}/>
            <Route path = "/GetAllOrders" element={<GetAllOrders/>}/>
            <Route path = "/Customers/:id" element={<GetOrderById/>}/>
            <Route path = "/AddOrder" element={<AddOrder/>}/>
            <Route path = "/EditOrder/:id" element={<EditOrder/>}/>
            <Route path = "/Profile" element={<Profile/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
);
