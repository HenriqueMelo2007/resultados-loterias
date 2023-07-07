import { useRef, useState, useEffect } from "react"
import { NumeroResultado } from "./components/NumeroResultado"
import axios from "axios"

export function App() {

  const megaSena = useRef('megasena')
  const quina = useRef('quina')
  const lotomania = useRef('lotomania')
  const lotofacil = useRef('lotofacil')

  const selectRef = useRef(null)

  const [loteriaSelecionada, setLoteriaSelecionada] = useState('megasena')
  const [dezenasLoteria, setDezenasLoteria] = useState([])

  function selecionarLoteria () {
    const valueSelect = selectRef.current.value
    setLoteriaSelecionada(valueSelect)
  }

  useEffect(() => {

    async function requisitarDadosNaAPI () {
      const meuToken = 'T8EKhk8UaGklKsf'
      const urlAPI = `https://apiloterias.com.br/app/resultado?loteria=${loteriaSelecionada}&token=${meuToken}`
      const dados = await (await axios.get(urlAPI)).data
      const dezenas = dados.dezenas
      setDezenasLoteria(dezenas)
    }
    requisitarDadosNaAPI()

    
  }, [loteriaSelecionada])


  return (
    <>

    <div className="container">

        <select onClick={selecionarLoteria} ref={selectRef}>
          <option value={megaSena.current}>Mega-sena</option>
          <option value={quina.current}>Quina</option>
          <option value={lotomania.current}>Lotomania</option>
          <option value={lotofacil.current}>Lotofácil</option>
        </select>

      <div className="containerInfos">
        <img src="http://1.bp.blogspot.com/-ArUXgrrhxnw/VH5QbU9eASI/AAAAAAAARfI/J3hJtCPfJXM/s1600/Trevo_CEF.png" alt="" />
        <h1>{loteriaSelecionada.toUpperCase()}</h1>
      </div>

      <div className="numerosResultado">
        {dezenasLoteria.map((item) => <NumeroResultado numeroDezena={item} />)}
      </div>

    </div>
    
 
    </>
  )
}