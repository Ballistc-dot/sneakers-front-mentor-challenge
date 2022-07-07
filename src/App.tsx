import { Header } from "./components/Header";

import productImage1 from "./assets/image-product-1.jpg";
import productImage2 from "./assets/image-product-2.jpg";
import productImage3 from "./assets/image-product-3.jpg";
import productImage4 from "./assets/image-product-4.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { SlideSwiper } from "./components/SlideSwiper";
import { useState } from "react";
import { Cart } from "./components/Icons/Cart";
import { useDispatch } from "react-redux";
import { addProduct } from "./store/features/cart";

const productsImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
];

const variants = {
  visible: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0.7,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

function App() {
  const [selectedImage, setSelectedImage] = useState(productImage1);
  const [quantity, setQuantity] = useState(0);

  function handleChangeImage(image: string) {
    setSelectedImage(image);
  }
  const dispatch = useDispatch();

  function handleAddProductToCart() {
    const product = {
      product: "Fall Limited Edition Sneakers",
      quantity,
      price: 125.0,
    };
    dispatch(addProduct(product));
  }

  function handleIncreaseQuantity() {
    setQuantity((state: number) => state + 1);
  }
  function handleDecreaseQuantity() {
    if (quantity > 0) setQuantity((state: number) => state - 1);
  }

  const isAnyQuantity = quantity == 0;

  return (
    <div>
      <Header />
      <div className="grid grid-cols-[1fr] lg:grid-cols-2 md:mx-auto  md:my-24 items-start py-0 gap-8 max-w-[70rem] ">
        <main className="flex flex-col lg:flex-row sm:items-center lg:items-start w-[100%] ">
          <div className="md:flex flex-col hidden items-center justify-center w-[50%] lg:w-[100%]">
            <img
              src={selectedImage}
              alt="product image"
              className="animate-toggleIn sm:w-[90%]  2xl:w-[90%] 2xl:h-[32rem] md:rounded-3xl h-auto w-[100%]"
            />

            <div className="mt-10 flex md:gap-2 2xl:gap-6 gap-1 p-12 ">
              {productsImages.map((image) => {
                if (selectedImage != image) {
                  return (
                    <button
                      className="flex w-[25%] "
                      onClick={() => handleChangeImage(image)}
                    >
                      <img
                        src={image}
                        alt="product image"
                        className="hover:opacity-50 rounded-md"
                      />
                    </button>
                  );
                } else {
                  return (
                    <button
                      className="flex w-[25%] rounded-md border-orange-300 border-2"
                      onClick={() => handleChangeImage(image)}
                    >
                      <img
                        src={image}
                        alt="product image"
                        className="opacity-50"
                      />
                    </button>
                  );
                }
              })}
            </div>
          </div>
          <SlideSwiper />
        </main>
        <div className=" md:ml-10 flex items-center lg:items-start md:mt-16 flex-col gap-2 w-full m-0 p-8 md:w-auto">
          <span className="text-orange-300 font-bold text-sm text -tracking-tighter">
            SNEAKER COMPANY
          </span>
          <div className="items-center flex flex-col gap-0 w-full">
            <h1 className="font-bold text-5xl max-w-md">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-300 max-w-md">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubbber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className="flex flex-col w-full">
              <div className="flex justify-start items-center w-full">
                <h2 className="font-bold text-2xl">$125.00</h2>
                <span className="flex items-center justify-center ml-4 rounded-md px-2 h-6 bg-orange-100 text-orange-300 font-bold">
                  50%
                </span>
              </div>
              <del className="text-sm text-zinc-300 font-bold">$250.00</del>
            </div>
          </div>
          <div className=" flex gap-5 w-[100%] flex-col lg:flex-row md:gap-12 text-center items-center mt-6">
            <div className="sm:w-[50%] w-[100%]  bg-zinc-150 h-14 flex justify-between px-2 items-center  lg:w-[40%] rounded-md">
              <button
                onClick={handleDecreaseQuantity}
                className="text-orange-300 font-bold text-2xl hover:text-orange-250"
              >
                -
              </button>
              <span className="font-bold text-md hover:text-orange-250">
                {quantity}
              </span>
              <button
                onClick={handleIncreaseQuantity}
                className="text-orange-300 font-bold text-2xl hover:text-orange-250"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddProductToCart}
              disabled={isAnyQuantity}
              className="disabled:cursor-not-allowed disabled:opacity-70 w-[100%] lg:w-[100%] disabled:hover:bg-orange-300 justify-center sm:w-[50%] flex items-center gap-4 bg-orange-300 px-20 rounded-md py-4 text-white font-bold drop-shadow-orange hover:bg-orange-250"
            >
              <Cart fill="#FFF" /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
