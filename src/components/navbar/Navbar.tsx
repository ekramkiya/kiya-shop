import { Link } from "react-router-dom";
import Container from "../container/Container";

function Navbar() {
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
            <button>سبد خرید</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
