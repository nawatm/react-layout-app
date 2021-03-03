import React from 'react'

const Cartitems = (props) => {
    return (
        <div className="card">
            <img src={props.imgUrl} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.price}</p>
                <p className="card-text">{props.qty}</p>
            </div>
        </div> 
    )
}

export default Cartitems
