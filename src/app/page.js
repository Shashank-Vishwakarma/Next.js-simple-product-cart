import { getAllProducts } from "@/actions/actions";
import CartDialog from "@/components/CartDialog";
import Product from '@/components/Product.js'

export default async function Home() {
  const data = await getAllProducts();

  return (
    <div>
      <div className="flex justify-between mx-5">
        <h1>Shopping Cart</h1>
        <CartDialog />
      </div>
      <div>
        {
          data && data?.products ? <div className="m-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              data.products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            }
          </div> : <p>No products found!</p>
        }
      </div>
    </div>
  );
}
