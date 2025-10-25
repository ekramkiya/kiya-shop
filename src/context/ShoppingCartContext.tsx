import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface ShoppingCartProvider {
  children: React.ReactNode;
}

interface cartItem {
  id: number;
  qty: number;
}

interface ShoppingCartContext {
  cartitems: cartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
  isLogin: boolean;
  handleLogin: (username:string, password:string)=>void;
  handleLogout: () => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartitems, setcartitems] = useLocalStorage<cartItem[]>(
    "cartItems",
    []
  );

  const handleIncreaseProductQty = (id: number) => {
    setcartitems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id === id);

      if (selectedItem == null) {
        // If item not in cart, add it
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        // If item exists, increase quantity
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setcartitems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id === id);
      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        // If item exists, increase quantity
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartitems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setcartitems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  const cartQty = cartitems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);


  const [isLogin, setIsLogin] = useState(false);
   const navigate = useNavigate();
  const handleLogin = (username:string, password:string) => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg"
    localStorage.setItem("token",token);
    login(username, password).finally(() => {
      setIsLogin(true);
      navigate("/")
    });
  };

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/login")
    localStorage.removeItem("token")
  };

  useEffect(() => {
    let token = localStorage.getItem("token") 

    if(token){
      setIsLogin(true)
    }

  }, [])
  
  return (
    <ShoppingCartContext.Provider
      value={{
        cartitems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        isLogin,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
