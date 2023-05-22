import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { message } from "antd";

const ProductItem = ({item}) => {
  const dispatch=useDispatch()
  const handleClick=()=>{
   dispatch(addProduct({...item,quantity:1,imza:'haydar'}))
   message.success("urun sepete eklendi")
  }
  return (
    <>
    <div onClick={handleClick} className="productsItem border w-28 hover:shadow-xl cursor-pointer select-none ">
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