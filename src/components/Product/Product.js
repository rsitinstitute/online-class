import React from 'react';

import './Product.css';

const Product = (props) => {
    const {title, thumb, author, price} = props.product;
    return (
        <div className="product">
            <div className="product-thumb">
                <img src={thumb} alt=""/>
            </div>
            <div className="product-detail">
                <h4 className="product-name">{title}</h4>
                <p><small>by: {author}</small></p>
                <p>$ {price}</p>
                <button 
                    className="btn btn-success main-btn"
                    onClick = {() => props.handleAddProduct(props.product)}>
                        Enroll Now
                    </button>
            </div>
        </div>
    );
};

export default Product;