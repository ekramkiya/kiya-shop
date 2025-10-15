function ProductItem() {
  return (
    <div className="shadow border-b-gray-900 rounded pb-4">
      <img
        className="rounded"
        src="https://images-cdn.a.ubuy.com.kw/642b42a3fd538304121dbe5a-olome-hip-hop-mens-casual-shoes-zapatos.jpg"
        alt=""
      />
      <div className=" flex justify-between  flex-row-reverse px-4 mt-2">
        <h2>نام محصول</h2>

        <span>قیمت:۵۰ریال</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
