import Card from "../Card"
import { Grid } from "@mui/material"
import styles from './itemList.module.css'

const ProductList = ( {productos} ) => {
    return (
            <div className={styles.itemList}>
                
                {productos.map((producto) => (
                <Card key={producto.id} producto={producto}/>
            ))}
            </div>
        )
    }
export default ProductList