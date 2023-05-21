import React from 'react'
import { PlusOutlined, EditOutlined } from "@ant-design/icons";

const ProductItem = ({item}) => {
  return (
    <>
    <div className="productsItem border w-28 hover:shadow-xl cursor-pointer select-none ">
    <img
      className="h-28 border-b-2 object-cover w-full"
      src={item.img}
      alt=""
    />

    <div className="productInfo flex flex-col">
      <span className="font-bold">{item.title}</span>
      <span>{item.price}₺</span>
    </div>
   
  </div>

  </>
  )
}

export default ProductItem