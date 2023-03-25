import Card from '../Card'

const ItemFilter = ({ productos , categoria }) => {
    return (
        <div>
            {productos.map((producto, id) => (producto.category == categoria?<Card key={id} producto={producto} />:null)
            )}
        </div>
    )
}

export default ItemFilter