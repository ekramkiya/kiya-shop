import Button from "../../components/button/Button";
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
            <Button className="w-full py-3" variant="primary">افزودن به سبد خرید</Button>
           
           
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
