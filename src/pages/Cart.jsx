import React from 'react'
import Cartitems from './Cartitems'

const products = [
    {
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Xiaomi_Mi_10_Ultra_frontpanel.jpg/450px-Xiaomi_Mi_10_Ultra_frontpanel.jpg',
        name: 'Xiami',
        price: 10000,
        qty: '5'
    },
    {
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Sony_Xperia_Z.JPG',
        name: 'Sony',
        price: 20000,
        qty: '2'
    },
    {
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/IPhone_5C_%28blue%29.svg/289px-IPhone_5C_%28blue%29.svg.png',
        name: 'IPhone',
        price: 40000,
        qty: '1'
    }
]

const Cart = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                {
                    products.map((products,index) => {
                        return(
                            <div className="col-md-4 my-3" key={index}>
                                { /* <Cartitems imgUrl={products.imgUrl} name={products.name} price={products.price} qty={products.qty} /> */}
                                <Cartitems product={products} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
} 

export default Cart
