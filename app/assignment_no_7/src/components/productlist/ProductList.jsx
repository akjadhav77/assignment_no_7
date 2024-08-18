import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  const API = "http://localhost:5000/api/products";

  const fetchData = async (url) => {
    try {
      const res = await axios.get(url);
      const maindata = await res.data;
      // console.log(maindata)
      setProducts(maindata);
    } catch (error) {
      console.error("Error Fetching Data: ", error);
    }
  };

  useEffect(() => {
    // axios.get('http://localhost:5000/api/products')
    //     .then(response => {
    //         setProducts(response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
    fetchData(API);
  }, []);

  return (
    <>
      <div className="products_container">
        <h2>Product List</h2>
        <div className="products_listing">
          
            {products.map((product) => (
              <div className="products_card">
                <div key={product.id}>
                  <div>
                    <strong>{product.name}</strong> - ₹ {product.price}
                  </div>
                  <button className="product_list_btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </>
  );
};

export default ProductList;
