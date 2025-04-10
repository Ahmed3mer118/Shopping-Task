import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Categories from "./components/Categories";
import NewProducts from "./components/NewProducts";
import Recommended from "./components/Recommended";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleFilterClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onFilterClick={handleFilterClick}
        isMenuOpen={isMenuOpen}
        onOpenMenuClick={handleMenuToggle}
      />

      <div className="container mx-auto px-4 py-6">
        <Categories />

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <Sidebar
            isOpenSidebar={isSidebarOpen}
            onClose={handleCloseSidebar}
          />

          <main className="flex-1">
            <NewProducts />
            <Recommended />
            <Brands />
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
