import {BrowserRouter, Routes, Route} from "react-router-dom";


//components
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

//user comps
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

//pages
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";


//protected user pages
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";

//protected admin pages
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AboutUsPage from "./pages/AboutUs";




function App() {
  return (
    <BrowserRouter>

    <HeaderComponent/>
    <Routes>

      <Route element={<RoutesWithUserChatComponent/>}>
          {/* public routes */}
          <Route path="/" element={<HomePage/>}/>
          <Route path="/product-list" element={<ProductListPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/product-details" element={<ProductDetailsPage/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="*" element="Page does not exist"/>

            {/* user protected routes */}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
              <Route path="/user" element={<UserProfilePage/>}/>
              <Route path="/user/myorders" element={<UserOrdersPage/>}/>
              <Route path="/user/cart-details" element={<UserCartDetailsPage/>}/>
              <Route path="/user/order-details" element={<UserOrderDetailsPage/>}/>
          </Route>
      
      </Route>

     

      {/* admin protected routes */}
      <Route element={<ProtectedRoutesComponent admin={true} />}>
        <Route path="/admin/users" element={<AdminUsersPage/>}/>
        <Route path="/admin/edituser" element={<AdminEditUserPage/>}/>
        <Route path="/admin/products" element={<AdminProductsPage/>}/>
        <Route path="/admin/create-new-product" element={<AdminCreateProductPage/>}/>
        <Route path="/admin/edit-product" element={<AdminEditProductPage/>}/>
        <Route path="/admin/orders" element={<AdminOrdersPage/>}/>
        <Route path="/admin/order-details" element={<AdminOrderDetailsPage/>}/>
        <Route path="/admin/chats" element={<AdminChatsPage/>}/>
        <Route path="/admin/analytics" element={<AdminAnalyticsPage/>}/>

      </Route>

    </Routes>

    <FooterComponent/>
    </BrowserRouter>
      
  );
}

export default App;
