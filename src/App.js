import { useState } from 'react';
import './app.css';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('dfgd');

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    // Alerta definindo 2 casas decimais
    // alert(imc.toFixed(2)); 

    if(imc < 18.6){
      alert("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      alert("Peso ideal! Seu IMC: " + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9){
      alert("Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2))
    }else if(imc > 34){
      alert("Cuidado! Você está obeso(a)! Seu IMC: " + imc.toFixed(2))
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <div className="area-input">
      <input
      type="text" placeholder="Peso em (Kg) - Ex: 90"
      value={peso}
      onChange={ (e) => setPeso(e.target.value)}
      />
      <input
       type="text" placeholder="Altura em (cm) - Ex: 180"
       value={altura}
       onChange={ (e) => setAltura(e.target.value)}
       />      
      <button onClick={calcularIMC}>Calcular</button>
    </div>
    <h2>{mensagem}</h2>
    </div>
  )
}
