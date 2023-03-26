// locacl json-sever backend
// db products data
//show on UI
//  pagination
// loading
// filter
// sorting

// import { useEffect } from "react";
import "./App.css";
import ProductItems from "./components/productItems";
import ProductsForm from "./components/ProductsForm";

const getUrlData = async (url) => {
  try {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  } catch (error) {
    console.error(error);
  }
};

function App() {
  const FetchandUpdateData = () => {
    getUrlData(`http://localhost:3001/products`);
  };

  //get data
  // useEffect(() => {
  FetchandUpdateData();
  // }, []); //first time useeffect always runs for the first time

  //post request
  //doot
  const bringProductData = (value) => {
    fetch(`http://localhost:3001/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then(() => FetchandUpdateData())
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <ProductsForm onData={bringProductData} />
      <hr />
      <br />
      <br />
      <h3>PRODUCTs</h3>
      <ProductItems />
    </div>
  );
}

export default App;
