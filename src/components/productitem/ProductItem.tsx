import type { IProducts } from "../../types/server";

type ProductItem = IProducts

function ProductItem({title,price,description,image}: ProductItem) {
  return (
    <div className="shadow border-b-gray-900 rounded pb-4 ">
      <img
        className="rounded h-55 w-full"
        src={image}
        alt=""
      />
      <div className=" flex justify-between text-right flex-row-reverse  px-4 mt-2">
        <h2 className="line-clamp-1 font-bold w-52">{title}</h2>

        <span className="font-bold ">${price}</span>
      </div>
      <div className="px-4 mt-1 text-right ">
        <p className="line-clamp-2  text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
