import { useState, useContext } from "react";
import { CartContext } from '../../context/cart';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from '../Cart/Cart';
import ColorList from '../ColorList';
import '../../index.css'

export default function App({ products }) {
  const [showModal, setShowModal] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const toggle = () => {
    setShowModal(!showModal);
  };

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

  return (
    <div className='flex flex-col p-2.5 w-[68vw]'>
      <ToastContainer />
      <div className="flex justify-end">
        {!showModal && 
          <button
            className="bg-blue-600 text-white p-1.5 px-8 border-2 border-blue-600 rounded-md mb-3 mx-2"
            onClick={toggle}
          >
            Cart ({cartItems.length})
          </button>
        }
      </div>
      <div className="grid grid-cols-3 justify-items-center ">
        {products?.map(product => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          return (
            <div key={product.id} className="w-[226px] flex  flex-col justify-center items-center h-auto rounded-md border-2 border-blue-700 p-3.5 m-2.5">
              <div className="w-[185px] flex justify-center items-center">
                <img src={product.picture} className="w-full" alt="" />
              </div>

              <div className="flex justify-between items-center w-[15vw] my-3.5">
                <div className="text-black text-lg">{product.name}</div>
                <div>${product.price}</div>
              </div>
              <div className="flex justify-start w-full">
                <ColorList colors={product.colors} />
              </div>

              <div className="flex justify-center">
                {!cartItem ? (
                  <button
                    className="w-[10vw] flex justify-center mt-5 bg-blue-600 text-white p-1.5 rounded-2xl border-none"
                    onClick={() => {
                      addToCart(product);
                      notifyAddedToCart(product);
                    }}
                  >
                    ADD TO CART
                  </button>
                ) : (
                  <div className="flex justify-center">
                    <button
                      className="w-9 h-6 mt-5 bg-blue-600 text-white rounded-md flex justify-center items-center"
                      onClick={() => {
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(product);
                        } else {
                          removeFromCart(product);
                        }
                      }}
                    >
                      -
                    </button>
                    <p className="m-3 mt-5 mb-0">{cartItem.quantity}</p>
                    <button
                      className="w-9 h-6 mt-5 bg-blue-600 text-white rounded-md flex justify-center items-center"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <Cart showModal={showModal} toggle={toggle} />
    </div>
  );
};
