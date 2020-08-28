import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, course) => total + course.price, 0);
 const getRoundFigure = (num) => {
		const precision = num.toFixed(2);
		return Number(precision);
    };
    
    return (
        <div className="cart">
			<div className="header">
				<h4>Enrolled Summary</h4>
				<div>Course enrolled: {cart.length}</div>
			</div>
			<div className="body">
				<div>
					<span>Total Price: </span>
					<span>${getRoundFigure(total)}</span>
				</div>

                <div className="checkout-btn">
                    <button className="btn btn-success">
                             Checkout
                    </button>
                </div>
			</div>
		</div>
    );
};

export default Cart;