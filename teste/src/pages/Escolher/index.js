import React from 'react';
import { useHistory } from 'react-router';

import './style.css';

function Index() {
  var history = useHistory();

  const Avancar = () => {
    history.replace('/personalizar');
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Escolha seu açaí</h1>

        <div className="options">
          <p className="title">SABOR:</p>
          <div className="button">
            <button>Morango</button>
            <button>Banana</button>
            <button>Kiwi</button>
          </div>

          <p className="title">TAMANHO:</p>
          <div className="button">
            <button>Pequeno (300ml)</button>
            <button>Médio (500ml)</button>
            <button>Grande (700ml)</button>
          </div>

          <div className="continue">
            <button onClick={Avancar}>Avançar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
