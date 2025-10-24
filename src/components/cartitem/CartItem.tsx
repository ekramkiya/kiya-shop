import { useEffect, useState } from "react";
import Button from "../button/Button";
import Container from "../container/Container";
import { getProduct } from "../../services/api";
import type { IProducts } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: CartItem) {
  const [product, setProduct] = useState<IProducts>();
  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();
  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  });

  return (
    <div>
      <Container>
        <div className="flex flex-row-reverse gap-4 mt-5 border-b border-b-gray-300 pb-4">
          <Link to={`/product/${id}`}>
            <img className=" rounded w-30" src={product?.image} alt="" />
          </Link>

          <div className="mr-4 space-x-1 text-right">
            <h2>{product?.title}</h2>
            <div className="mt-2">
              <Button
                onClick={() => {
                  handleRemoveProduct(id);
                }}
                className="mr-2"
                variant="danger"
              >
                حذف از سبد خرید
              </Button>
              <Button
                onClick={() => {
                  handleIncreaseProductQty(id);
                }}
                variant="success"
              >
                +
              </Button>
              <span className="mx-2">{qty}</span>
              <Button
                onClick={() => {
                  handleDecreaseProductQty(id);
                }}
                variant="warning"
              >
                -
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartItem;
