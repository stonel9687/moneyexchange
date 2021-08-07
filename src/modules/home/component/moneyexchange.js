import argentFlag from '../../../assets/images/argentina.png'
import usaFlag from '../../../assets/images/usa1.png'
import colombiaFlag from '../../../assets/images/colombia.png'
import paraguayFlag from '../../../assets/images/paraguay.png'
import chileFlag from '../../../assets/images/chile.png'
import mexFlag from '../../../assets/images/mexico.png'

const MoneyExchange = (props) => {
  const {
    argentina,
    chile,
    mexico,
    paraguay,
    colombia,
    date,
    amounthArg,
    amounth,
    handleAmounth,
    handleAmounthArg,
    amounthChi,
    amounthCol,
    amounthMex,
    amounthPar,
  } = props

  return (
    <div className='container d-flex justify-content-center'>
      <div className='text-aling-center col'>
        <div className='justify-aling-center col p-5'>
          <h2> La Forma mas Facil de </h2>
          <h2>Convertir Tus Monedas</h2>
        </div>
      </div>
      <div class='card divbox col' style={{ width: '463px' }}>
        <div class='card-body div-money col'>
          <h5 class='card-title text-center'>Money Exchange</h5>
          <p class='card-text'>Tasacion Actual por Paises</p>
        </div>
        <div className='d-flex justify-content-between col'>
          <span>Ultima Actualizacion:</span>
          <span>{date} </span>
        </div>
        <hr />
        <div className='div-money col '>
          <div className='d-flex justify-content-between mb-1 col'>
            <img src={usaFlag} alt='logo' className='iconFlag' />
            <p>Dolar</p>
            <input placeholder='0' onChange={handleAmounth} value={amounth} type='text' className='input-change' />
          </div>
          <hr />
          <div className='d-flex justify-content-between mb-2 col'>
            <img src={argentFlag} alt='logo' className='iconFlag' />
            <p>Argentina</p>
            <span>{argentina}</span>
            <input
              placeholder='0'
              onChange={handleAmounthArg}
              value={amounthArg.toFixed(2)}
              type='number'
              className='input-change'
            />
          </div>
          <div className='d-flex justify-content-between mb-2 col'>
            <img src={chileFlag} alt='logo' className='iconFlag' />
            <p>Chile</p>
            <span>{chile}</span>
            <input
              placeholder='0'
              onChange={handleAmounthArg}
              value={amounthChi.toFixed(2)}
              type='number'
              className='input-change'
            />
          </div>
          <div className='d-flex justify-content-between mb-2 col'>
            <img src={colombiaFlag} alt='logo' className='iconFlag' />
            <p>Colombia</p>
            <span>{colombia}</span>
            <input
              placeholder='0'
              onChange={handleAmounthArg}
              value={amounthCol.toFixed(2)}
              type='number'
              className='input-change'
            />
          </div>
          <div className='d-flex justify-content-between mb-2 col'>
            <img src={mexFlag} alt='logo' className='iconFlag' />
            <p>Mexico</p>
            <span>{mexico}</span>
            <input
              placeholder='0'
              onChange={handleAmounthArg}
              value={amounthMex.toFixed(2)}
              type='number'
              className='input-change'
            />
          </div>
          <div className='d-flex justify-content-between mb-2 col'>
            <img src={paraguayFlag} alt='logo' className='iconFlag' />
            <p>Paraguay</p>
            <span>{paraguay}</span>
            <input
              placeholder='0'
              onChange={handleAmounthArg}
              value={amounthPar.toFixed(2)}
              type='number'
              className='input-change'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyExchange
