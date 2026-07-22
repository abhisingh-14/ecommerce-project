import Header from '../../components/Header';
import './OrdersPage.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import OrdersGrid from './OrdersGrid';

function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data);
    }

    fetchOrderData();
  }, []);

  return (
    <>
      <title>Your Orders</title>
      <link rel="icon" type="image/png" href="/orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
      </div>
    </>
  );
}

export default OrdersPage;