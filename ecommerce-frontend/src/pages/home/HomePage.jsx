import axios from 'axios';
import Header from '../../components/Header';
import './HomePage.css'
// import { products } from '../startingcode/data/products';
import { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid';

function HomePage({ cart }) {
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

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/products')
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data);
    };

    fetchHomeData();
  }, []);


  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/png" href="/home-favicon.png" />

      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}

export default HomePage;