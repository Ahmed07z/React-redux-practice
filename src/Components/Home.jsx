import React from "react";
export default function Home(props) {
  return (
    <div>
      <div className="addTocart">
<img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843__340.png" alt="" />

      </div>
      <h1>HOME COMPONENT</h1>
      <div className="card-wrapper">

      <div className="img-wrapper item">
        <img
          src="https://www.three.co.uk/cs/Satellite?blobkey=id&blobwhere=1401331509853&blobcol=urldata&blobtable=MungoBlobs"
          alt=""
          />
      </div>
      <div className="cart-wrapper item">
        <span>Iphone</span>
        <span>Price: 2000$</span>
      </div>
      <div className="btn-wrapper item">
        <button>Add to Cart</button>
      </div>
          </div>
    </div>
  );
}
