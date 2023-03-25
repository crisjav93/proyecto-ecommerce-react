import { Link } from 'react-router-dom';
import styles from './card.module.css';

// const Card = ({ producto }) => {
//     return (
//             <Link to={`/products/${producto.id}`}>
//                 <div className={styles.container}>
//                     <h3>{producto.title}</h3>
//                     <img src={producto.image} alt={producto.title} width='200' height='250' />
//                     <p>{producto.description}</p>
//                     <p>$ {producto.price}</p>
//                 </div>
//             </Link>
//     )
// }

// export default Card

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ProductCard({product}) {
return (
    <Link to={`/products/${producto.id}`}>
    <Card sx={{ maxWidth: 345 }}> 
        <CardMedia
            component="img"
            alt={product.title}
            height="200"
            width='200'
            image={product.image}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <h6>${product.price}</h6>
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <h3>{}</h3>
        </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
    </Link>
);
}