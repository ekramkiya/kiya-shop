import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import type { IProducts } from "../../types/server";



function Product() {

  
  const params = useParams<{id: string}>();
const [product, setProduct] = useState<IProducts>();

  useEffect(()=>{
    getProduct(params.id as string).then((result)=>{
      setProduct(result);
    });
  },[])
  return (
    <div>
      <Container>
        <div className=" h-96  shadow text-right mt-5 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h2 className="text-2xl font-bold mt-4 mr-4">{product?.title}</h2>
            <div className="text-right">
              <p>$ قیمت :{product?.price}</p>
              <p>
                {" "}
                توضیحات: {product?.description}
              </p>
            </div>
          </div>
          <div className="col-spain-2 p-1.5 bg-sky-200 w-60 rounded">
            <img
              className=" rounded w-full"
              src={product?.image}
              alt=""
            />
            <Button className="w-full py-3" variant="primary">افزودن به سبد خرید</Button>
           
           
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
