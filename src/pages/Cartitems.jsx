import React from 'react'

const Cartitems = (props) => {

    const {imgUrl,name,price,qty} = props.product

    return (
        <div className="card">
            <img src={imgUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <p className="card-text">{qty}</p>
            </div>
        </div> 
    )
}

export default Cartitems
