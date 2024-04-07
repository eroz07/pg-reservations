import {Grid} from "@mui/material";
import "./ProductDetail.scss"

const ProductList = ({charges}) => {
  const rows = charges.map(charge => {
    const { name, amount, active } = charge
    return (
      <tr className={active === true ? "green" : active === false ? "red" : ""}>
        <td>{name}</td>
        <td>{active === true  ? "active" : active === false ? "cancelled" : ""}</td>
        <td>{amount}</td>
      </tr>
    )
  })

  return <Grid container>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Charge</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </Grid>
}

export default ProductList