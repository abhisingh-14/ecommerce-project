import axios from 'axios';
import Header from '../../components/Header';
import './HomePage.css'
// import { products } from '../startingcode/data/products';
import { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid';
import { useSearchParams } from 'react-router';

function HomePage({ cart, loadCart }) {
  // const response = await fetch('http://localhost:3000/api/products');
  // fetch('http://localhost:3000/api/products')
  //   .then((response) => {
  //     response.json().then((data) => {
  //       console.log(data);
  //     });
  //   })

  // fetch('http://localhost:3000/api/products')
  //   .then((response) => {
  //     return response.json()
  //   }).then((data) => {
  //     console.log(data);
  //   });

  // useEffect(() => {
  //   axios.get('/api/products')
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };

    fetchHomeData();
  }, [search]);


  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/png" href="/home-favicon.png" />

      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;