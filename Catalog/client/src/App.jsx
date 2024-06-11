import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Search from "./Header/Search";
import Default from "./Main/Default/Default";
import Comparison from "./Main/Comparison/Comparison";
import SmartID from "./Main/SmartID/SmartID";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [smartList, setSmartList] = useState([]);
  const [where, setWhere] = useState('');
  const smartArr = [
    "Apple",
    "Samsung",
    "Honor",
    "Realme",
    "Poco",
    "Vivo",
    "Xiaomi",
    "Huawei",
  ];
  const [blockBrandList, setBlockBrandList] = useState(smartArr);

  return (
    <Router>
      <Search
        setSmartList={setSmartList}
        setBlockBrandList={setBlockBrandList}
        setWhere={setWhere}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Default
              setBlockBrandList={setBlockBrandList}
              setSmartList={setSmartList}
              blockBrandList={blockBrandList}
              smartList={smartList}
              setWhere={setWhere}
              where={where}
            />
          }
        />
        <Route path="/comparison" element={<Comparison setWhere={setWhere} where={where}/>} />
        <Route path="/smart/:id" element={<SmartID />} />
      </Routes>
    </Router>
  );
}

export default App;
