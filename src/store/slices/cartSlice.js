import { createSlice } from '@reduxjs/toolkit'
import {toast} from 'react-toastify'
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,

 
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action){
        const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id);
        if(itemIndex >= 0){
            state.cartItems[itemIndex].cartQuantity += 1;
            toast.info(`${action.payload.des} has increased`, {
              position: 'bottom-left',
            })
           
        }else{
          const tempProduct = {...action.payload, cartQuantity: 1 }
          state.cartItems.push(tempProduct)
          toast.success(`${action.payload.des} has added cart`, {
            position: 'bottom-left',
          })
        }

        
    },
    removeFromCart(state, action){
      const filteredCartItems = state.cartItems.filter((item)=>item.id !== action.payload.id)
state.cartItems = filteredCartItems
    },
    decreaseQuantity( state, action){
      const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id);
      if(state.cartItems[itemIndex].cartQuantity > 1 ){
state.cartItems[itemIndex].cartQuantity -= 1;
      } else if(state.cartItems[itemIndex].cartQuantity === 1){
        const filteredCartItems = state.cartItems.filter((item)=>item.id !== action.payload.id)
        state.cartItems = filteredCartItems
      }

    },
    getTotal(state,action){
      let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
        const {cartQuantity, price} = cartItem;
        const itemTotal = cartQuantity * price;
        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;
        return cartTotal
      }, {total: 0,
      quantity: 0});
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
    

    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, decreaseQuantity, getTotal} = cartSlice.actions

export default cartSlice.reducer