import { Link } from 'react-router-dom';
import styles from './card.module.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';



export default function ProductCard({producto}) {
return (
    <Link to={`/products/${producto.id}`}>
        <Card sx={{ mx: 'auto', width: 200 }}> 
            <CardMedia
                component="img"
                alt={producto.title}
                height="200"
                width='200'
                image={producto.image}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <h6>${producto.price}</h6>
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