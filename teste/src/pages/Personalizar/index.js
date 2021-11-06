import React, { useState } from 'react';
import { useHistory } from 'react-router';


function Index() {
  const history = useHistory();

  // opções selecionadas na primeira tela
  const flavor = history.location.state.flavor;
  const tam = history.location.state.tam;
  const price = history.location.state.price;
  const time = history.location.state.time;
  const [addSelected, setAddSelected] = useState([]);
  const [addPrice, setAddPrice] = useState([]);

  // personalização escolhida
  const selectedAdd = (el) => {
    setAddSelected(el.name);
    setAddPrice(el.preco);
  }

  // botão para ir para a próxima tela
  const confirmButton = () => {
    history.push({
      pathname: "/pedido",
      state: {
        flavor: flavor,
        tam: tam,
        price: price,
        time: time,
        addSelected: addSelected,
        addPrice: addPrice,
      }
    })
  }

  //opções de personalização
  const add = [
    {
      id: '1',
      name: 'Granola',
      preco: 3
    },
    {
      id: '2',
      name: 'Paçoca',
      preco: 3

    },
    {
      id: '3',
      name: 'Leite ninho',
      preco: 3

    },
  ] 

  return (
    <div className="container">
      <div className="content">
        <h1>Personalize seu açaí</h1>

        <p className="title">PERSONALIZAÇÃO:</p>
        <div className="button-container">
          {add.map(el => (
            <div className="button" key={el.id}>
              <input type="radio" name="add" value={el.name} id={el.name} onClick={() => selectedAdd(el)}/>
              <label htmlFor={el.name}>{el.name}</label>
            </div>
          ))}
        </div>
        
        <div className="continue-button enabled">
          <input type="button" id="button" value="Finalizar pedido" onClick={confirmButton}/>
        </div>
      </div>
    </div>
  )
}

export default Index;
