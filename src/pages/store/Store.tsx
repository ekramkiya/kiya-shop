import Container from "../../components/container/Container";
import ProductItem from "../../components/productitem/ProductItem";

function Store() {
  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدید ترین محصولات</h1>
        <div className="grid grid-cols-4 text-right gap-5 my-5">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
           <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </div>
  );
}

export default Store;
