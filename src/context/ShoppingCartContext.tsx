import { createContext, useContext, useState } from "react";

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
    cartQty:number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartitems, setcartitems] = useState<cartItem[]>([]);

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

  const cartQty = cartitems.reduce((totalQty, item)=>{

    return totalQty + item.qty
  },0)
  return (
    <ShoppingCartContext.Provider
      value={{
        cartitems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
