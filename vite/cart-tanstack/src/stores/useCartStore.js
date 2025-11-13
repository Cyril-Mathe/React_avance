import { create } from "zustand";

const initialState = {
    products: [
    { id: 1, name: "Café", price: 3 },
    { id: 2, name: "Thé", price: 2 },
    { id: 3, name: "Chocolat", price: 4 }
  ],
  cart: [],
  total: 0,
}

export const useCartStore = create((set, get) => ({
    ...initialState,
    addToCart: (productId) => {
        const { products, cart, total } = get();
        const product = products.find((e) => e.id === productId);
        const newCart = [...cart, product];
        const newPrice = total + product.price;
        console.log(product.price)
        set({ cart: newCart, total: newPrice})
    },
    removeFromCart: (productId) => {
        const { cart, total } = get();
        const deltedproduct = cart.filter((e) => e.id !== productId);
        const newCart = [...deltedproduct];
        const newPrice = total - deltedproduct.price;
        set({ cart: newCart, total: newPrice})
    },
    clearCart: () => set({cart: [], total: 0}) ,
}));

export default useCartStore