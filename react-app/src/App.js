import {
  Routes, Route
} from "react-router-dom";
import ProductList from 'components/ProductList';
import './App.css';


const App =() =>{

  return (
    <Routes>
      <Route path="/" element={<ProductList/>}/>
    </Routes>
  );
}

export default App;
