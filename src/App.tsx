/* eslint-disable prefer-const */

import { FormEvent, useState } from 'react';
import './App.css';
import logoImg from "./assets/logo.png";

interface InfoProps{
  titulo: string,
  gasolina: number | string,
  alcool: number | string
}

function App() {
const [gasolina, setGasolina] = useState(0)
const [alcool, setAlcool] = useState(0)
const [info, setInfo] = useState<InfoProps>()

function calcular(e: FormEvent) {
  e.preventDefault()
  const calculo = (alcool / gasolina)
  if(calculo <= 0.7) {
      setInfo({
        titulo: "Compensa usar Alcool",
        gasolina: formatar(gasolina),
        alcool: formatar(alcool)
      })
  } else {
    setInfo({
      titulo: "Compensa usar Gasolina",
      gasolina: formatar(gasolina),
      alcool: formatar(alcool)
    })
  }
}

function formatar(valor: number) {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   let valorFormatado = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
   return valorFormatado
}

  return (
    <div>
      <main className='container'>
          <img src={logoImg} alt="logo bomba de gasolina" />
          <h1>Qual melhor opção</h1>
          <form onSubmit={calcular}>
            <label htmlFor="">Álcool (preço por litro):</label>
            <input type="number" placeholder='4.90'  min="1" step="0.01" required value={alcool} onChange={(e) => setAlcool(+e.target.value)} />

            <label htmlFor="">Gasolina (preço por litro):</label>
            <input type="number" placeholder='4.90'  min="1" step="0.01" required value={gasolina} onChange={(e) => setGasolina(+e.target.value)}  />
            <input type="submit" value="Calcular" className='button' onClick={calcular} />
          </form>
          {info && Object.keys(info).length > 0 && (
            <section className='result'>
              <h2>{info.titulo}</h2>
              <span>Álcool {info.alcool}</span>
              <span>Gasolina {info.gasolina}</span>
              
            </section>
            
            )}

      </main>
    </div>
  )
}

export default App
