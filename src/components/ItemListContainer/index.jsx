import Card from "../Card"
import { Grid } from "@mui/material"
import styles from './itemList.module.css'
import { useParams } from "react-router-dom";

const ProductList = ( {productos} ) => {
    const { genre } = useParams();
    const productosFiltrados = genre? productos.filter(producto => producto.genre.some(genero => genero === genre)):productos ;
    return (
            <div className={styles.itemList}>
                
                {productosFiltrados.map((producto) => (
                <Card key={producto.id} producto={producto}/>
            ))}
            </div>
        )
    }
export default ProductList