import './App.css';
import Products from './components/Products';
import Search from "./components/Search";
import Switch from "./components/Switch"
import { data } from "./components/data"
import { useState } from 'react';

function App() {
  const [productList, setProductList] = useState(data)
  const [inputText, setInputText] = useState("")
  const [text, setText] = useState();
  const [onOff, setOnOff] = useState(false)
  let newArr = [];

  data.map((e) => {
    if (!newArr.includes(e.category)) {
      newArr.push(e.category)
    }
  })

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

  console.log(onOff)

  function switchSearch() {
    { onOff ? setProductList(data) : setProductList(data.filter(e => e.inStock)) }
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
        onOff={onOff}
        setOnOff={setOnOff}
      />
      <Products
        productList={productList}
        setProductList={setProductList}
        newArr={newArr} />
    </div>
  );
}

export default App;
