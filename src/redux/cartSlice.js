import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        total:0,
        price:0
    },
    reducers:{//buraya metods ve fonksiyonlarimizi yaziyoruz action olarak geciyor 
        addProduct:(state,action)=>{
           const findCartItem=state.cartItems.find((item)=>item._id===action.payload._id)
           
           if (findCartItem) {
            findCartItem.quantity = findCartItem.quantity + 1;
           }else{

               state.cartItems.push(action.payload)
           }
           
           
        }

    }
})
//bu yazdigimiz addProduct methoduna ulasabilmek icin export etmemiz lazim
export const {addProduct}=cartSlice.actions
export default cartSlice.reducer;