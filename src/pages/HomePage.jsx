
import '../App.css';
import Header from '../components/Header/Header';
import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import CartTotals from '../cart/CartTotals';
const HomePage = () => {
  return (
<>

<Header></Header>
      <div className="home home flex px-6 justify-between gap-10">
        <div className="categories mx-2 overflow-auto  max-h-[calc(100vh-_-112px)]">
          <Categories ></Categories>
        </div>
        <div className="products flex-[8]   " >
          <Products></Products>
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border" >
          <CartTotals> </CartTotals>
        </div>
      </div>

</>
  )
}

export default HomePage