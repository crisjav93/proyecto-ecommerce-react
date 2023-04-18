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
import db from "../../../db/firebase-config";
import { collection, doc, getDoc, getDocs, } from "firebase/firestore";



const CardDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [productoNoEncontrado, setProductoNoEncontrado] = useState(false);
    const productosRef = collection(db, "productos");

    const getProductos = async () => {
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setProducto(docSnap.data());
            setLoading(false);
        } else {
            setProductoNoEncontrado(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductos();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (productoNoEncontrado) {
        return <h1>Producto no encontrado</h1>;
    }

    return (
        <div className={styles.itemList}>
            <Card sx={{ mx: "auto", width: 750 }}>
                <CardMedia
                    component="img"
                    alt={producto.title}
                    height="350"
                    width="auto"
                    image={producto.image}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <h5>{producto.title}</h5>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h6>{producto.description}</h6>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h3>$ {producto.price}</h3>
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

export default CardDetail;


