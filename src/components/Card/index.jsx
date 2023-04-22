import { Link } from "react-router-dom";
import * as React from "react";

export default function ProductCard({ producto }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <section className="product-box">
        <div className="a">
          <Link to={`/products/${producto.id}`}>
            <figure className="product-box_image">
              <img
                src={producto.image}
                className="img-card"
                alt="imagen de producto"
              />
            </figure>
            <article className="product-box_data">
              <h6> {producto.title} </h6>
              <p>Precio: ${producto.price}</p>
            </article>
          </Link>
        </div>
      </section>
    </div>
  );
}
