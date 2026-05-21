import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Home from "./Home/Home.jsx";
import MarketPage from "./pages/MarketPage.jsx";
import MenPage from "./pages/MenPage.jsx";
import WomenPage from "./pages/WomenPage.jsx";
import UnisexPage from "./pages/UnisexPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import AuthModal from "./components/AuthModal.jsx";
import { useCart } from "./context/CartContext.jsx";

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount } = useCart();

  const [authOpen, setAuthOpen] = useState(false);

  const currentPage = (() => {
    if (location.pathname.startsWith("/product")) return "product";
    if (location.pathname.startsWith("/market") || location.pathname.startsWith("/shop")) return "shop";
    return location.pathname.split("/")[1] || "";
  })();

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Navbar
        cartCount={cartCount}
        currentPage={currentPage}
        onLogoClick={() => navigate("/")}
        onShopClick={() => navigate("/market")}
        onMenClick={() => navigate("/men")}
        onWomenClick={() => navigate("/women")}
        onUnisexClick={() => navigate("/unisex")}
        onFaqClick={() => navigate("/faqs")}
        onCartClick={() => navigate("/cart")}
        onAuthClick={() => setAuthOpen(true)}
      />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero onShopNow={() => navigate("/market")} />
                <Home onShopNow={() => navigate("/market")} />
              </>
            }
          />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/shop" element={<Navigate to="/market" replace />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/unisex" element={<UnisexPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage onShopNow={() => navigate("/market")} />} />
          <Route path="/faqs" element={<FaqPage onShopNow={() => navigate("/market")} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="*"
            element={
              <div className="p-10 text-center text-2xl font-bold">
                404 Page Not Found
              </div>
            }
          />
        </Routes>
      </main>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}