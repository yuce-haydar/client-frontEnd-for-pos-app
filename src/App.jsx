import {Routes,Route,BrowserRouter} from "react-router-dom"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BillsPage from "./pages/BillsPage";
import CartPage from "./pages/CartPage";
import Customers from "./pages/Customers";
import HomePage from "./pages/HomePage";
import StatisticPage from "./pages/StatisticPage";
import ProductPage from "./pages/ProductPage";
function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/cart" element={<CartPage/>}></Route>
      <Route path="/bills" element={<BillsPage/>}></Route>
      <Route path="/customers" element={<Customers/>}></Route>
      <Route path="/statistic" element={<StatisticPage/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>      
   </BrowserRouter>
    </>
  );
}

export default App;
