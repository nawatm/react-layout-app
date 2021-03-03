import React from 'react'
import Cartitems from './Cartitems'

const products = [
    {
        imgUrl: 'https://www.google.co.th/url?sa=i&url=https%3A%2F%2Fth.priceprice.com%2FXiaomi-Mi-10-Pro-33323%2F&psig=AOvVaw0ljMOFp5l3G0cB9B58D0LZ&ust=1614871348175000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjahtW2lO8CFQAAAAAdAAAAABAD',
        name: 'Xiami',
        price: 10000,
        qty: '5'
    },
    {
        imgUrl: 'https://www.google.co.th/url?sa=i&url=https%3A%2F%2Fth.priceprice.com%2FSony-Xperia-1-II-33408%2F&psig=AOvVaw3prq8LUW3yHmBc2a6KAF-D&ust=1614871369902000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDHgOG2lO8CFQAAAAAdAAAAABAD',
        name: 'Sony',
        price: 20000,
        qty: '2'
    },
    {
        imgUrl: 'https://www.google.co.th/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fth%2Fshop%2Fbuy-iphone%2Fiphone-xr%2F%25E0%25B8%2588%25E0%25B8%25AD%25E0%25B8%25A0%25E0%25B8%25B2%25E0%25B8%259E%25E0%25B8%2582%25E0%25B8%2599%25E0%25B8%25B2%25E0%25B8%2594-6.1-%25E0%25B8%2599%25E0%25B8%25B4%25E0%25B9%2589%25E0%25B8%25A7-64gb-%25E0%25B8%2582%25E0%25B8%25B2%25E0%25B8%25A7&psig=AOvVaw2LgwVz5DIyJypqvqAl80pd&ust=1614871391326000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj70-q2lO8CFQAAAAAdAAAAABAd',
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
                    products.map((product,index) => {
                        return(
                            <div className="col-md-4 my-3" key={index}>
                                <Cartitems imgUrl={products.imgUrl} name={products.name} price={products.price} qty={products.qty} />
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
