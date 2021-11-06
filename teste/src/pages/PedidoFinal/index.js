import React from 'react';
import { useHistory } from 'react-router';


function Index() {
  const history = useHistory();

  //opções selecionadas na primeira + segunda tela
  const flavor = history.location.state.flavor;
  const tam = history.location.state.tam;
  const price = history.location.state.price;
  const time = history.location.state.time;
  const addSelected = history.location.state.addSelected;
  const addPrice = history.location.state.addPrice;

  //preço total
  const total = price + addPrice;

  // botão para ir para a primeira página
  const confirmButton = () => {
    history.push('/');
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Resumo do Pedido</h1>

        <p className="title">TAMANHO:</p>
        <div className="option-selected">
          <p>- {flavor}</p>
          <p>R$ {price}.00</p>
        </div>
        
        <p className="title">SABOR:</p>
        <div className="option-selected">
          <p>- {tam}</p>
          <p>R$ 0.00</p>
        </div>

        <p className="title">PERSONALIZAÇÕES:</p>
        <div className="option-selected">
          <p>- {addSelected.length === 0 ? "(Nenhuma personalização foi selecionada)" : addSelected}</p>
          <p>R$ {addPrice.length === 0 ? "00" : addPrice}.00</p>
        </div>

        <p className="title">Valor total: R$ {total}.00</p>
        <p className="title">Tempo de preparo: {time}</p>

        <div className="continue-button enabled">
          <input type="button" id="button" value="Refazer pedido"  onClick={confirmButton}/>
        </div>
      </div>
    </div>
  );
}

export default Index;
