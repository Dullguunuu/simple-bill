import './App.css';
import Products from './components/Products';
import Search from "./components/Search";
import Switch from "./components/Switch"
import { data } from "./components/data"
import { useState } from 'react';

function App() {
  const [productList, setProductList] = useState(data)
  const [inputText, setInputText] = useState("")
  const [text, setText] = useState()

  function searchProduct() {
    const newArr = [];
    data.map((e) => {
      if (e.productName.includes(text)) {
        newArr.push(e)
      }
      setProductList(newArr)

    })
  }

  function onChangeSearch(para) {
    const newArr = [];
    data.map((e) => {
      if (e.productName.includes(para)) {
        newArr.push(e)
      }
      setProductList(newArr)
    })
  }

  function switchSearch() {
    setProductList(data.filter((e) => e.inStock));
  }

  return (
    <div className="bill">
      <Search
        searchProduct={searchProduct}
        inputText={inputText}
        setInputText={setInputText}
        text={text}
        setText={setText}
        onChangeSearch={onChangeSearch}
      />
      <Switch
        switchSearch={switchSearch}
      />
      <Products
        productList={productList}
        setProductList={setProductList} />
    </div>
  );
}

export default App;
