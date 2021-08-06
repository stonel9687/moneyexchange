import { useEffect, useState } from 'react'
import Navbar from '../../shared/example.shared'
import MoneyExchange from './component/moneyexchange'

const Home = () => {
  const [amounth, setAmounth] = useState('')
  const [amounthArg, setAmounthArg] = useState('')
  const [dataArgentina, setDataArgentina] = useState('')
  const [dataChile, setDataChile] = useState('')
  const [dataColombia, setDataColombia] = useState('')
  const [dataMexico, setDataMexico] = useState('')
  const [dataParaguay, setDataParaguay] = useState('')
  const [lastUpdate, setLastUpdate] = useState('')
  const [amouthInFromCurrency, setAmouthInFromCurrency] = useState(true)
  const [exchangeRate, setExchangeRate] = useState('')
  console.log(exchangeRate)
  console.log(amounth)

  const handleAmounthArg = (e) => {
    setAmounthArg(e.target.value)
  }

  const handleAmounth = (e) => {
    setAmounth(e.target.value)
  }
  const sumRate = () => {
    if (amounth >= 1) {
      let dolarArg = dataArgentina
      let multi = amounth * dolarArg
      setAmounthArg(multi)
    } else {
      setAmounthArg(0)
      setAmounth(0)
    }
  }

  const dataRequest = () => {
    fetch('http://api.currencylayer.com/live?access_key=8468d131ff9fc41223ad0a8a2beb3d26', {
      headers: {},
    })
      .then((resp) => {
        return resp.json()
      })
      .then((data) => {
        //Agregar todo el codigo necesario para lograr los objetivos
        //La respuesta guardada en "data" lista para ser usada
        let timestamp = data.timestamp * 1000
        let dateObj = new Date(timestamp)
        let month = dateObj.getMonth() + 1
        let year = dateObj.getFullYear()
        let date = dateObj.getDate()
        let newDate = `${date}/${month}/${year}`
        console.log(newDate)
        console.log(lastUpdate)
        setDataArgentina(data.quotes.USDARS.toFixed(2))
        setDataChile(data.quotes.USDCLP.toFixed(2))
        setDataColombia(data.quotes.USDCOP.toFixed(2))
        setDataParaguay(data.quotes.USDPYG.toFixed(2))
        setDataMexico(data.quotes.USDMXN.toFixed(2))
        setLastUpdate(newDate)
        sumRate(handleAmounth)
      })
      .catch((error) => console.log('Error:', error))
  }

  useEffect(() => {
    dataRequest()
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <MoneyExchange
          argentina={dataArgentina}
          chile={dataChile}
          colombia={dataColombia}
          mexico={dataMexico}
          paraguay={dataParaguay}
          date={lastUpdate}
          amounthArg={amounthArg}
          amounth={amounth}
          handleAmounthArg={handleAmounthArg}
          handleAmounth={handleAmounth}
          exchangeRate={exchangeRate}
        />
      </div>
    </div>
  )
}

export default Home