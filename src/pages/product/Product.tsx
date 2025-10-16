import Button from "../../components/button/button";
import Container from "../../components/container/Container";

function Product() {
  return (
    <div>
      <Container>
        <div className=" h-96  shadow text-right mt-5 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h2 className="text-2xl font-bold mt-4 mr-4">نام محصول</h2>
            <div>
              <p>قیمت:۵۰ریال</p>
              <p>
                {" "}
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از
              </p>
            </div>
          </div>
          <div className="col-spain-2 p-1.5 bg-sky-200 w-60 rounded">
            <img
              className=" rounded w-full"
              src="https://images-cdn.a.ubuy.com.kw/642b42a3fd538304121dbe5a-olome-hip-hop-mens-casual-shoes-zapatos.jpg"
              alt=""
            />
            <Button className="p-1" variant="success">افزودن به سبد خرید</Button>
            <Button variant="primary">افزودن به سبد خرید</Button>
            <Button variant="secondary">افزودن به سبد خرید</Button>
            <Button variant="danger">افزودن به سبد خرید</Button>
            <Button variant="warning">افزودن به سبد خرید</Button>
            <Button variant="info">افزودن به سبد خرید</Button>
            <Button variant="light">افزودن به سبد خرید</Button>
            <Button variant="dark">افزودن به سبد خرید</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
