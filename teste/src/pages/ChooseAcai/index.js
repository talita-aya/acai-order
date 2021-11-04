import React from 'react';

import './style.css';

const index = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Escolha seu açaí</h1>

          <div className="options">
            <p>SABOR:</p>
            <div className="button">
              <button>Morango</button>
              <button>Banana</button>
              <button>Kiwi</button>
            </div>

            <p>TAMANHO:</p>
            <div className="button">
              <button>Pequeno (300ml)</button>
              <button>Médio (500ml)</button>
              <button>Grande (700ml)</button>
            </div>

            <div className="continue">
              <button>Avançar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
