import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import type { IProducts } from "../../types/server";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProducts>();
  const {
    getProductQty,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    cartitems,
    handleRemoveProduct,
  } = useContext(ShoppingCartContext);

  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setProduct(result);
    });
  }, []);
  console.log(cartitems);

  return (
    <div>
      <Container>
        <div className=" h-96  shadow text-right mt-5 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h2 className="text-2xl font-bold mt-4 mr-4">{product?.title}</h2>
            <div className="text-right">
              <p>$ قیمت :{product?.price}</p>
              <p> توضیحات: {product?.description}</p>
            </div>
          </div>
          <div className="col-spain-2 p-1.5 bg-sky-200 w-60 rounded">
            <img className=" rounded w-full" src={product?.image} alt="" />
            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                className="w-full py-3"
                variant="primary"
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
              >
                افزودن به سبد خرید
              </Button>
            ) : (
              <>
                <div className="grid grid-cols-3">
                  <Button
                    className="w-full "
                    variant="primary"
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    +
                  </Button>
                  <p className="flex items-center justify-center">
                    تعداد: {getProductQty(parseInt(params.id as string))}
                  </p>
                  <Button
                    className="w-full "
                    variant="primary"
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    -
                  </Button>
                </div>
                <Button
                  className="w-full py-3 mt-6 "
                  variant="danger"
                  onClick={() =>
                    handleRemoveProduct(parseInt(params.id as string))
                  }
                >
                  حذف از سبد خرید
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
