import { useSelector } from "react-redux";
import { Products } from "../../components/products";

const CartProducts = () => {
  const cartProducts = useSelector(state => state.cartProducts);

  return (
    <main>
      <h1>Carrinho de produtos</h1>
      <section>
        <Products products={cartProducts} />  
      </section>
    </main>
  );
};

export { CartProducts };