import { useState, useContext } from "react";
import { CartContext } from "../../context/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../Cart/Cart";
import ColorList from "../ColorList";
import "../../index.css";

export default function App({ products, user }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [productDetailShow, setProductDetailShow] = useState(false);

  const toggle = () => setShowModal(!showModal);

  const notifyAddedToCart = (item) =>
    toast.success(`${item.name} added to cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.name} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col p-3 w-[68vw]">
      <ToastContainer />
      <div className="flex justify-end">
        {!showModal && (
          <button
            className="bg-blue-600 text-white py-2 px-6 border border-blue-600 rounded-md mb-3"
            onClick={toggle}
          >
            Cart ({cartItems.length})
          </button>
        )}
      </div>

      <div className="grid grid-cols-3 gap-5">
        {products?.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="w-[230px] flex flex-col justify-center items-center h-auto rounded-lg border border-blue-700 p-4 shadow-md"
            >
              <div
                className="w-[190px] cursor-pointer flex justify-center items-center"
                onClick={() => setProductDetailShow(product)}
              >
                <img src={product.img} className="w-full rounded-md" alt={product.name} />
              </div>

              <div className="flex justify-between items-center w-full mt-3">
                <div className="text-black text-lg font-semibold">{product.name}</div>
                <div className="text-blue-600 font-bold">${product.price}</div>
              </div>

              <div className="flex justify-center mt-2">
                <ColorList
                  colors={product.color.split(",")}
                  selectedColor={selectedColor}
                  onColorSelect={handleColorSelect}
                />
              </div>

              <div className="flex justify-center mt-4">
                {!cartItem ? (
                  <button
                    className="w-full bg-blue-600 p-10 text-white py-2 rounded-lg transition hover:bg-blue-700"
                    onClick={() => {
                      addToCart({ ...product, colors: selectedColor });
                      notifyAddedToCart(product);
                    }}
                  >
                    ADD TO CART
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      className="w-8 h-8 bg-blue-600 text-white rounded-md flex justify-center items-center transition hover:bg-blue-700"
                      onClick={() => {
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(product);
                        } else {
                          removeFromCart(product);
                        }
                      }}
                    >
                      −
                    </button>
                    <p className="text-lg font-bold">{cartItem.quantity}</p>
                    <button
                      className="w-8 h-8 bg-blue-600 text-white rounded-md flex justify-center items-center transition hover:bg-blue-700"
                      onClick={() => addToCart({ ...product, colors: selectedColor })}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>

              {productDetailShow && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">{productDetailShow.name}</h2>
                    <img src={productDetailShow.img} alt={product.name} className="w-60 rounded-lg my-3" />
                    <h4 className="text-m font-bold">Өнгөний сонголт: {productDetailShow.color}</h4>
                    <h4 className="text-m font-bold">Маш гоё хийцтэй</h4>
                    <h4 className="text-m font-bold">Тэргүүлэгч бараа</h4>
                    <h4 className="text-m font-bold">Үнэ: {productDetailShow.price}$</h4>
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-md"
                      onClick={() => setProductDetailShow(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Cart products={cartItems} showModal={showModal} toggle={toggle} user={user} />
    </div>
  );
}
