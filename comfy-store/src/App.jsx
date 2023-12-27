import React from "react";
import { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import SignInGuest from "./jsx/sign-in-guest";
import CreateAccount from "./jsx/create-account";
import "./App.css";
import DirectLinks from "./components/nav-directions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import About from "./jsx/about";
import HomePage from "./jsx/homepage";
import Products from "./jsx/products";
import Cart from "./jsx/carts";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const lightDarkTheme = createContext();

function App() {
  const [theme, setTheme] = useState("darkMode");
  const [visibility, setVisibility] = useState(false);

  const toggleTheme = () => {
    setTheme((current) => (current === "lightMode" ? "darkMode" : "lightMode"));
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "darkMode");
  }, [theme]);

  function handleSignInClick() {
    setVisibility((headerVisibilty) => !headerVisibilty);
    // header.style.display = {none}
  }
  const headerClass = visibility ? "visible-header" : "hidden-header";

  const handleNav = () => {};

  return (
    <lightDarkTheme.Provider value={{ theme, setTheme }}>
      <Router>
        <>
          <div className="App" id={theme}>
            <header style={{ display: visibility ? "none" : "block" }}>
              <div className="container">
                <div className="register">
                  <Link to="/signInGuest" onClick={handleSignInClick}>
                    Sign In/ Guest
                  </Link>
                  <Link to="/CreateAccount" onClick={handleSignInClick}>
                    Create Account
                  </Link>
                </div>
              </div>
            </header>

            <nav style={{ display: visibility ? "none" : "block" }}>
              <div className="container">
                <div className="logo">
                  <a className="logo-nav" href="/home">
                    C
                  </a>
                </div>
                <div className="navbar">
                  <DirectLinks
                    href="/home"
                    title="Home"
                    classname="home"
                    linkComponent={<Link to="/home" />}
                  />
                  <DirectLinks
                    href="/about"
                    title="About"
                    classname="other"
                    linkComponent={<Link to="/about" />}
                    onClick={handleNav}
                  />
                  <DirectLinks
                    href="/products"
                    title="Products"
                    classname="other"
                    linkComponent={<Link to="/products" />}
                  />
                  <DirectLinks
                    href="/cart"
                    title="Cart"
                    classname="other"
                    linkComponent={<Link to="/cart" />}
                  />
                </div>
                <div className="cart-theme">
                  <DarkModeSwitch
                    checked={theme === "darkMode"}
                    onChange={toggleTheme}
                  />
                  <Link to="/cart">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="cart-icon"
                      style={{color:"white"}}
                    />
                  </Link>
                </div>
              </div>
            </nav>
            <Routes>
              <Route path="/signInGuest" element={<SignInGuest />} />
              <Route path="/createAccount" element={<CreateAccount />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route index element={<HomePage />} />
            </Routes>
          </div>
        </>
      </Router>
    </lightDarkTheme.Provider>
  );
}

export default App;
