import { useSelector } from "react-redux";
import { CartProduct } from "../store/features/cart";
import productImage from "../assets/image-product-1.jpg";

export function CartHeader() {
  const cartProducts: CartProduct[] = useSelector((state: any) => state.cart);

  return (
    <div className=" z-20 absolute top-20 lg:top-32 right-0 w-[100%] md:right-52 bg-white  md:w-[20rem] h-auto drop-shadow-md flex flex-col rounded-md">
      <div className=" border-b-[1px] h-12 p-2 border-zinc-100">
        <span className="font-bold text-base">Cart</span>
      </div>
      <div className="flex flex-col items-center p-6">
        {cartProducts &&
          cartProducts.map((product: CartProduct) => {
            if (product.product)
              return (
                <div
                  className="flex flex-row py-4 gap-4 items-center text-zinc-400"
                  key={product.product}
                >
                  <img className="w-14 h-14 rounded-md" src={productImage} />
                  <div className="flex flex-col">
                    <span className="text-sm">{product.product}</span>
                    <div className="gap-2 flex">
                      <span className="text-sm">
                        ${product.price.toLocaleString("en-us")}
                      </span>
                      <span className="text-sm">x {product.quantity}</span>
                      <strong className="text-sm text-black">
                        ${product.total_price.toLocaleString("en-us")}
                      </strong>
                    </div>
                  </div>
                </div>
              );
          })}
        <button className="bg-orange-400 w-[100%] rounded-md h-12 text-white text-sm">
          Checkout
        </button>
      </div>
    </div>
  );
}
