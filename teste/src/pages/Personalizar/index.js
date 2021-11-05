import React from 'react';
import { useHistory } from 'react-router';

function Index() {
  var history = useHistory();

  const Finalizar = () => {
    history.replace('/pedido');
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Personalize seu açaí</h1>

        <div className="options">
            <p className="title">PERSONALIZAÇÃO:</p>
            <div className="button">
              <button>Granola</button>
              <button>Paçoca</button>
              <button>Leite ninho</button>
            </div>
          </div>

          <div className="continue large">
            <button onClick={Finalizar}>Finalizar pedido</button>
          </div>
      </div>
    </div>
  )
}

export default Index;
