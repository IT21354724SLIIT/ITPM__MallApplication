import React from 'react'
import './Categories.css'
import { assets } from '../../assets/assets'
const Categories = () => {
    return(
    <div className="container">
    <div className="row">
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid" src= {assets.shopping_img}  alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title text-center">Shopping</h4>
                </div>
            </div>
        </div>
        
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid" src= {assets.foodnew_img} alt="Card image cap"/>
                <div className="card-block">
                    <h4 className="card-title text-center">Food & Beverages</h4>
                </div>
            </div>
        </div>

        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid" src= {assets.eventnew_img} alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title text-center">Advertisements</h4>
                </div>
            </div>
        </div>

        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid"  src= {assets.gamenew_img} alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title text-center">Games & Entertainment</h4>
                </div>
            </div>
        </div>

    </div>
    </div>

    )
}

export default Categories
