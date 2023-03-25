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

// const ProductList = ({productos}) => {
//     return (
//         <Grid container spacing={2} columns={40}>
//             {productos.map((producto) => (
//                 <Grid key={producto.id} item xs={8}>
//                     <Card producto={producto}/>
//                 </Grid>
//             ))}
//         </Grid>
//     );
//     };

export default ProductList