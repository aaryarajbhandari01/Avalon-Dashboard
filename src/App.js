import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from './formData';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import OrderList from './pages/order/OrderList';
import NewUser from './pages/newUser/newUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/newProduct';


function App() {
  return (
    <div className="app">
       <BrowserRouter>
        <Routes>
          <Route path="/">
            
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path='dashboard'>
              <Route index element={<Home />} />
            </Route>


            <Route path="users">
              <Route index element={<List/>} />
              {/* for edit user page */}
              <Route path=":userId" element={<User />} />
              {/* for add new pages */}
              <Route
                path="newUser"
                element={<NewUser inputs={userInputs} 
                title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<Product />} />
              <Route
                path="newProduct"
                // element={<New inputs={productInputs} 
                element={<NewProduct inputs={productInputs} 
                title="Add New Product" />}
              />
            </Route>

            <Route path="orders">
              <Route index element={<OrderList/>} />
              <Route path=":orderId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} 
                title="Manage" />}
              />
            </Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
