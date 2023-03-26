import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../ItemListContainer/itemList.module.css'


const CardDetail = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const getProducto = async () =>{
        try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProducto(data);
        setLoading(false);
    } catch (error){
        setProducto(null)
    }
        };
    
    useEffect(() => {
        getProducto();
        }, []); 

        if (!producto) {
            return <Navigate to='/404'/>;
        };

        if (loading) {
            return <h2>Loading...</h2>
        }
    return (
        
        <div className={styles.itemList}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={producto.title}
                    height="140"
                    image={producto.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <h5>{producto.title}</h5>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h6>{producto.description}</h6>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};


export default CardDetail
