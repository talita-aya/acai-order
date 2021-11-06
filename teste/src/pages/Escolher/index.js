import React, { useState } from 'react';
import { useHistory } from 'react-router';

import '../../styles/style.css';

function Index() {
  const history = useHistory();
  const [flavor, setFlavor] = useState([]);
  const [tam, setTam] = useState([]);
  const [price, setPrice] = useState([]);
  const [time, setTime] = useState([]);
  const [enableButton, setEnableButton] = useState(false);
  
  // botão para ir para a próxima página
  const confirmButton = () => {
    if(enableButton === true){ //somente se as duas opções estiverem selecionadas
      history.push({
        pathname: "/personalizar",
        state: {
          flavor: flavor,
          tam: tam,
          price: price,
          time: time,
        }
      })
    }
  }

  //tamanho selecionado
  const selectedTam = (el) => {
    setTam(el.name);
    setPrice(el.preco);
    setTime(el.tempo);
    if(flavor !== '' && tam !== ''){
      setEnableButton(true);
    }
  }


  //opções para o sabor do açaí
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


  //opções para o tamanho do açaí
  const tamanho = [
    {
      id: '4',
      name: 'Pequeno (300ml)',
      preco: 10,
      tempo: '5 minutos',
    },
    {
      id: '5',
      name: 'Médio (500ml)',
      preco: 12,
      tempo: '7 minutos',
    },
    {
      id: '6',
      name: 'Grande (700ml)',
      preco: 15,
      tempo: '9 minutos',
    },
  ]

  return (
    <div className="container">
      <div className="content">
        <h1>Escolha seu açaí</h1>


        <p className="title">SABOR:</p>
        <div className="button-container">
          {sabor.map(el => (
            <div className="button" key={el.id}>
              <input type="radio" name="sabor" value={el.name} id={el.name} onClick={() => setFlavor(el.name)}/>
              <label htmlFor={el.name}>{el.name}</label>
            </div>
          ))}
        </div>


        <p className="title">TAMANHO:</p>
        <div className="button-container">
          {tamanho.map(el => (
            <div className="button" key={el.id}>
              <input type="radio" name="tamanho" value={el.name} id={el.name} onClick={() => selectedTam(el)}/>
              <label htmlFor={el.name}>{el.name}</label>
            </div>
          ))}
        </div>

        
        {/* dois botões: um desativado e outro ativado */}
        {enableButton === false ?
          <div className="continue-button">
            <input type="button" id="button" value="Avançar" onClick={confirmButton}/>
          </div>
          : 
          <div className="continue-button enabled">
            <input type="button" id="button" value="Avançar" onClick={confirmButton}/>
          </div>
        }
                
      </div>
    </div>
  );
}

export default Index;
