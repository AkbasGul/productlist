
import Header from "./components/header/Header";
import "./App.scss";
import { products, categories } from "./helper/data";
import ProductList from "./components/ProductCard/ProductList";
function App() {

  return (
    <div className="App">
      <Header categories={categories} text="Products List" />
      <ProductList products={products} />
    </div>
  );
}

export default App;
