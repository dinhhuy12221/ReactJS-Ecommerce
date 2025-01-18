import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import Header from "./components/Client/components/Header/index.js";
import Footer from "./components/Client/components/Footer/index.js";
import ProductModal from "./components/Client/components/ProductModal/index.js";
import axios from "axios";
import ScrollToTop from "./components/Client/utils/ScrollToTop/index.js";
import routes from "./routes.js";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios
      .get(url)
      .then((res) => setCountryList(res.data.data));
  };

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setIsHeaderFooterShow,
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}
        <Routes>
          {
            routes && routes.map((route, index) => {
              return(
                <Route key={index} 
                  path={route.path}
                  exact={route.exact}
                  element={route.element}>
                </Route>
              )
            })
          }
        </Routes>
        {isHeaderFooterShow === true && <Footer />}
        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
      <ScrollToTop/>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
