import { useState, useEffect } from "react";
import {Grid, Button, Input} from "@mui/material";
import ProductApi from "api/ProductApi";
import ProductDetail from "components/ProductDetail";

const ProductList = () => {
  const { getAllProducts, getProductByUUID } = ProductApi;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await getAllProducts();
      const data = response?.data;
      if(data) 
      setProducts(data);
    }
    loadProducts();
  }, [])

  const rows = Object.keys(products).map(key => {
    const charges = products[key];
    const number = charges.length;
    const sum = charges.reduce((acc, charge) => acc + charge.amount, 0)

      return (
        <>
          <tr>
            <td>
              {key}
            </td>
            <td>{number}</td>
            <td>{sum}</td>
          </tr>
          {charges.length > 0 && <tr><ProductDetail charges={charges}/></tr>}
        </>
      )
    }
  )

  const handleInput = (input) => {
    const loadProduct = async (text) => {
      const response = await getProductByUUID(text);
      const data = response?.data;
      if(data) 
      setProducts(data);
    }
    loadProduct(input.target.value);
  }


  return <Grid>
    Products
    <Grid container>
      <Input onChange={handleInput}/>
      </Grid>
      <Grid>
        <table>
          <thead>
            <tr>
              <th>Reservation UUID</th>
              <th>Number of Active Purchases</th>
              <th>Sum of Active Purchases</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </Grid>
  </Grid>
}

export default ProductList