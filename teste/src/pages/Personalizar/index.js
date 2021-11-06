import React from 'react';
import { useHistory } from 'react-router';


function Index() {
  var history = useHistory();

  const finalizar = () => {
    history.push('/pedido');
  }

  const selected = (id) => {
    var buttonSelected = document.getElementById(id);
    buttonSelected.classList.toggle("selected");
  }

  const add = [
    {
      id: '1',
      name: 'Granola',
    },
    {
      id: '2',
      name: 'Paçoca',
    },
    {
      id: '3',
      name: 'Leite ninho',
    },
  ] 

  return (
    <div className="container">
      <div className="content">
        <h1>Personalize seu açaí</h1>

        <p className="title">PERSONALIZAÇÃO:</p>
        <div className="button-container">
          {add.map(el => (
            <div className="button">
              <input type="radio" name="add" value={el.name} id={el.name}/>
              <label for={el.name}>{el.name}</label>
            </div>
          ))}
        </div>
        
        <div className="continue-button enabled">
          <input type="button" id="button" value="Finalizar pedido"/>
        </div>
      </div>
    </div>
  )
}

export default Index;
