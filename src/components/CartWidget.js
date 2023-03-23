//import React from 'react';

/* function CartWidget() {
    return (
     
    <image src='./img/proyecto1040.png' alt="desde pc"></image>
      
      <div className="cart-iconos">
        <div id="cart">
          <button className="btn--black" id="btnFinalizar">
            Finalizar compra
          </button>
          <div className="cart-contador">
            <div id="contador-cart">0</div>
            <i id="bi-cart" className="bi bi-cart2"></i>
          </div>
        </div>
        <div className="none" id="container-cart"></div>
      </div>
      )
  }
  
  export default CartWidget*/


  /*function CartWidget() {
    return (
      <div>
        <image src="./img/proyecto1040.png" alt="desde pc"/>
      
      <div className="cart-iconos">
        <div id="cart">
          <button className="btn--black" id="btnFinalizar">
              Finalizar compra
          </button>
          <div className="cart-contador">
              <div id="contador-cart">0</div>
              <i id="bi-cart" className="bi bi-cart2"></i>
          </div>
        </div>
        <div className="none" id="container-cart"></div>
       </div>
      </div>
    );
    }
    
    export default CartWidget;*/



    import React from "react";

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn colorCartButton position-relative">
                <img src={"./img/cart3.svg" } alt={"carrito"} width={20}  />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        </div>

    )
}

export default CartWidget;