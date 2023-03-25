import Card from '../Card'
import styles from '../ItemListContainer/itemList.module.css'


const ItemFilter = ({ productos , categoria }) => {
    return (
        <div className={styles.itemList}>
            {productos.map((producto, id) => (producto.category == categoria?<Card key={id} producto={producto} />:null)
            )}
        </div>
    )
}

export default ItemFilter