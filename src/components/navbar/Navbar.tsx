import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";

function Navbar() {
 
  const { handleLogout,cartQty } = useContext(ShoppingCartContext);
  return (
    <div className="h-15 border-b border-b-gray-300 shadow  flex items-center px-4">
      <Container>
        <div className="flex justify-between  flex-row-reverse ">
          <ul className="flex gap-4 flex-row-reverse">
            <li>
              <Link to={"/"}>خانه</Link>
            </li>
            <li>
              <Link to={"/store"}>فروشگاه</Link>
            </li>
          </ul>

          <div>
            <Button onClick={handleLogout}>خروج</Button>
            <Link className="relative" to={"/cart"}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="xl"
                className="text-gray-700"
              />
            </Link>
            <span className="absolute w-6 h-6 bg-amber-300 flex justify-center items-center rounded-full text-white top-1 left-17 text-xs">
              {cartQty !== 0 ? cartQty : ""}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
