import { useState } from "react";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]); // Savat holati

  return (
    <div className="app-container">
      <Header cartItems={cartItems} />
      <Main cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  );
}

export default App;
