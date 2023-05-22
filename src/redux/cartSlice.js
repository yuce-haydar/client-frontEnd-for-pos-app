import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        total:0,
        tax:8.8
    },
    reducers:{//buraya metods ve fonksiyonlarimizi yaziyoruz action olarak geciyor 
        addProduct:(state,action)=>{
           const findCartItem=state.cartItems.find((item)=>item._id===action.payload._id)
           
           if (findCartItem) {
            findCartItem.quantity = findCartItem.quantity + 1;
         
           }else{

               state.cartItems.push(action.payload)
             
           }
            state.total+=action.payload.price
            
        },
        deleteProductFromCart:(state,action)=>{
           state.cartItems=state.cartItems.filter((item)=>item._id!==action.payload._id)
           state.total-=action.payload.price*action.payload.quantity
           message.warning('urun sepetten silindi')
        },

        incrementQuantity:(state,action)=>{
            const findCartItem=state.cartItems.find((item)=>item._id===action.payload._id)

          findCartItem.quantity+=1;
          state.total+=action.payload.price
        },
        decrementQuantity:(state,action)=>{
            const findCartItem=state.cartItems.find((item)=>item._id===action.payload._id)

          findCartItem.quantity-=1;
          if(findCartItem.quantity===0){
            state.cartItems=state.cartItems.filter((item)=>item._id!==action.payload._id)
          }
          state.total-=action.payload.price
        },
        reset:(state,action)=>{
         state.cartItems=[];
         state.total=0;
        },


    }
})
//bu yazdigimiz addProduct methoduna ulasabilmek icin export etmemiz lazim
export const {addProduct,incrementQuantity,decrementQuantity,deleteProductFromCart,calculateTotal,reset}=cartSlice.actions
export default cartSlice.reducer;