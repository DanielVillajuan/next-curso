"use client"
const { createContext, useState } = require("react");

export const ProductContext = createContext();

const ProductoProvider = ({ children }) => {
    const [state, setState] = useState(false)
    return <ProductContext.Provider value={{state}}>
        {children}
    </ProductContext.Provider>
}

export default ProductoProvider;
