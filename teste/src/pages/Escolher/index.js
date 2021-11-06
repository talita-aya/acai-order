import React from 'react';
import { useHistory } from 'react-router';

import './style.css';

function Index() {
  var history = useHistory();
  
  const Avancar = () => {
    history.push('/personalizar');
  }

  const selected = (id) => {
    var buttonSelected = document.getElementById(id);
    buttonSelected.classList.toggle("selected");
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

  const tamanho = [
    {
      id: '4',
      name: 'Pequeno (300ml)',
      preco: '10.00'
    },
    {
      id: '5',
      name: 'Médio (500ml)',
      preco: '12.00'
    },
    {
      id: '6',
      name: 'Grande (700ml)',
      preco: '15.00'
    },
  ]

  return (
    <div className="container">
      <div className="content">
        <h1>Escolha seu açaí</h1>


        <p className="title">SABOR:</p>
        <div className="button-container">
          {sabor.map(el => (
            <div className="button">
              <input type="radio" name="sabor" value={el.name} id={el.name}/>
              <label for={el.name}>{el.name}</label>
            </div>
          ))}
        </div>


        <p className="title">TAMANHO:</p>
        <div className="button-container">
          {tamanho.map(el => (
            <div className="button">
              <input type="radio" name="tamanho" value={el.name} id={el.name}/>
              <label for={el.name}>{el.name}</label>
            </div>
          ))}
        </div>


        <div className="continue-button">
          <input type="button" id="button" value="Avançar"/>
        </div>
        
      </div>
    </div>
  );
}

export default Index;
