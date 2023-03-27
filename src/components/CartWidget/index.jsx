import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';




const CartWidget = () => {
return (
    <Link to='/cart'>
        <IconButton color='secondary'> 
            <LocalGroceryStoreIcon />
        </IconButton>
    </Link>
)
}

export default CartWidget