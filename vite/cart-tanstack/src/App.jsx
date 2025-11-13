import Cell from "./components/Cell";
import { useCartStore } from "./stores/useCartStore"

function App() {
  const { products, addToCart, removeFromCart } = useCartStore((s) => s)

  return (
    <>
      <div>
        <p>{products[0].name} {products[0].price}€</p>
        <button onClick={addToCart} productId={products[0].id}>+1</button>
        <button onClick={removeFromCart}>-1</button>
        <p>{products[1].name} {products[1].price}€</p>
        <button onClick={addToCart}>+1</button>
        <button onClick={removeFromCart}>-1</button>
        <p>{products[2].name} {products[2].price}€</p>
        <button onClick={addToCart}>+1</button>
        <button onClick={removeFromCart}>-1</button>
      </div>
    </>
  )
}

export default App
