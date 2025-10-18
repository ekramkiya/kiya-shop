import Button from "../button/Button";
import Container from "../container/Container";

function CartItem() {
  return (
    <div>
      <Container>
        <div className="flex flex-row-reverse gap-4 mt-5 border-b border-b-gray-300 pb-4">
          <img
            className=" rounded w-30"
            src="https://images-cdn.a.ubuy.com.kw/642b42a3fd538304121dbe5a-olome-hip-hop-mens-casual-shoes-zapatos.jpg"
            alt=""
          />
          <div className="mr-4 space-x-1 text-right">
            <h2>اسم محصول</h2>
            <div className="mt-2">
              <Button className="mr-2" variant="danger">
                حذف از سبد خرید
              </Button>
              <Button variant="success">+</Button>
              <span className="mx-2">{2}</span>
              <Button variant="warning">-</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartItem;
