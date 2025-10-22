import { createContext, useState } from "react";

interface ShoppingCartProvider{
    children: React.ReactNode
}

interface ShoppingCartContext{
    cartitems: []
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);



 export function ShoppingCartProvider({children}:ShoppingCartProvider)
    {
          const [cartitems, setcartitems] = useState<[]>([])
    return(
        <ShoppingCartContext.Provider value={{cartitems}} >
            {children}
        </ShoppingCartContext.Provider>
    )
 }