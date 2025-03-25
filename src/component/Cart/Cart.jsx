import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/cart.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../index.css'
import ColorListCart from '../ColorListCart.jsx'
import {  useNavigate } from 'react-router-dom'

export default function Cart ({showModal, toggle, user}) {
  const navigate = useNavigate();

  
  const [ setSelectedColor] = useState(null)

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, setCartItems } = useContext(CartContext)

  const notifyRemovedFromCart = (item) => toast.error(`${item.name} removed from cart!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff'
    }
  })

  const notifyCartCleared = () => toast.error(`Cart cleared!`, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#000',
      color: '#fff'
    }
  })

  const handleRemoveFromCart = (product) => {
    removeFromCart(product)
    notifyRemovedFromCart(product)
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const checkUser = () => {
    if (!user) {
      navigate("/login");
    }
    else{
      setCartItems([]);
      alert("Төлбөр амжилттай")
    }
  };


  return (
    showModal && (
      <div className="fixed top-0 left-[55%] w-[45%] h-screen bg-white text-black p-[40px] z-[1000] flex flex-col items-center gap-[20px] text-[14px] rounded-[8px]">
        <ToastContainer />
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="absolute top-[20px] right-[40px] bg-[#3557BD] text-white p-[8px_12px] border-[1px] border-black rounded-[5px]" onClick={toggle}>
          Close
        </button>
  
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center w-full gap-[20px] mb-[3vh]" key={item.id}>
              <img src={item.img} alt={item.title} className="w-[80px] h-[80px] rounded-[8px]" />
  
              <div>
                <h1 className="text-lg font-bold">{item.name}</h1>
                <p>${item.price}</p>
              </div>
              <div>     
                <ColorListCart 
                  colors= {item.color.split(",")} 
                  color={item.colors}
                  onColorChange={handleColorChange}
              />
              </div>
  
              <div className="flex gap-[10px] items-center">
                <button 
                  onClick={() => {
                    const cartItem = cartItems.find((product) => product.id === item.id);
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(item);
                    } else {
                      removeFromCart(item);
                    }
                  }}
                  className="bg-[#3557BD] text-white p-[5px_10px] rounded-[5px]"
                >
                  -
                </button>
                
                <p>{item.quantity}</p>
  
                <button 
                  onClick={() => addToCart(item)}
                  className="bg-[#3557BD] text-white p-[5px_10px] rounded-[5px]"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {cartItems.length > 0 ? (
          <div className="flex flex-col items-center gap-[10px]">
            <h1>Total: ${getCartTotal()}</h1>
            <button 
              onClick={() => { 
                clearCart();
                notifyCartCleared();
              }}
              className="bg-[#3557BD] text-white p-[10px_20px] rounded-[5px] border-[1px] border-black"
            >
              Clear cart
            </button>
            <button 
              className="bg-[#3557BD] text-white p-[10px_20px] rounded-[5px] border-[1px] border-black"
              onClick={() => checkUser()}>Buy</button>
          </div>

            
        ) : (
          <h1 className="text-lg font-bold">Your cart is empty</h1>
        )}
      </div>
    )
  );
  
}













Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}

