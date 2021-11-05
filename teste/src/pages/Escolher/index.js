import React from 'react';
import { useHistory } from 'react-router';

import Options from '../../components/Options';
import './style.css';

function Index() {
  var history = useHistory();

  const Avancar = () => {
    history.replace('/personalizar');
  }

  const sabor = [
    {
      id: '1',
      name: 'Morango',
    },
    {
      id: '2',
      name: 'Banana',
    },
    {
      id: '3',
      name: 'Kiwi',
    },
  ] 

  const list = [
    {
      id: '1',
      name: 'Pequeno (300ml)',
    },
    {
      id: '2',
      name: 'Médio (500ml)',
    },
    {
      id: '3',
      name: 'Grande (700ml)',
    },
  ]

  return (
    <div className="container">
      <div className="content">
        <h1>Escolha seu açaí</h1>
        <p className="title">SABOR:</p>

        <div className="button">
          {sabor.map(el => (
            <Options
              list={el}
            />
          ))}
        </div>


        <p className="title">TAMANHO:</p>

        <div className="button">
          {list.map(el => (
            <Options
              list={el}
            />
          ))}
        </div>

        <div className="continue large">
          <button onClick={Avancar}>Avançar pedido</button>
        </div>
        
      </div>
    </div>
  );
}

export default Index;
