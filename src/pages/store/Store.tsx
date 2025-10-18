import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productitem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

function Store() {

  const [products, setProducts] = useState([]);
  useEffect(() => {

    getProducts().then((result) =>{

     
      setProducts(result);  
    });
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدید ترین محصولات</h1>
        <div className="grid grid-cols-4 text-right gap-5 my-5">
         {products.map((product )=>(
          
          <Link to="/product/1">
          <ProductItem />

          </Link>
         ))}
          
          
          
        
        </div>
      </Container>
    </div>
  );
}

export default Store;
