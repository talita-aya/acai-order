import React from 'react';

import './style.css';

const index = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Resumo do Pedido</h1>

        <div className="options">
          <p className="title">TAMANHO:</p>
          <div className="item">
            <p>- Médio (500ml)</p>
            <p>R$13,00</p>
          </div>
        </div>

        <div className="options">
          <p className="title">SABOR:</p>
          <div className="item">
            <p>- Médio (500ml)</p>
            <p>R$13,00</p>
          </div>
        </div>

        <div className="options">
          <p className="title">PERSONALIZAÇÕES:</p>
          <div className="item">
            <p>- Médio (500ml)</p>
            <p>R$13,00</p>
          </div>
        </div>

        <div className="options total">
          <p>Valor total: R$16,00</p>
          <p>Tempo de preparo: 10min</p>
        </div>

        <div className="continue large">
          <button>Refazer pedido</button>
        </div>
      </div>
    </div>
  );
}

export default index;
