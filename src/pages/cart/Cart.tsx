import { useContext } from "react";
import Button from "../../components/button/Button";
import CartItem from "../../components/cartitem/CartItem";
import Container from "../../components/container/Container";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const { cartitems } = useContext(ShoppingCartContext);

  return (
    <Container>
      <div className="">
        {
        cartitems.map((item) => (
          <CartItem {...item} />
        ))
        }

      </div>

      <div className="text-right mt-5 mb-5 bg-gray-50 p-4 rounded shadow ">
        <h2 className="text-xl ">مجموع سبد خرید: ۱۵۰ریال</h2>
        <h2 className="text-xl ">تخفیف: ۲۰ریال</h2>
        <h2 className="text-xl ">قابل پرداخت: ۱۳۰ریال</h2>
      </div>
      <Button className="w-50 py-1 mb-10 " variant="success">
        ثبت سفارش
      </Button>
    </Container>
  );
}

export default Cart;
