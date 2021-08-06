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
    exchangeRate,
  } = props

  return (
    <div className='container d-flex justify-content-center '>
      <div className='text-aling-center '>
        <div className='justify-aling-center col-auto p-5'>
          <h2> La Forma mas Facil de </h2>
          <h2>Convertir Tus Monedas</h2>
        </div>
      </div>
      <div class='card divbox' style={{ width: '463px' }}>
        <div class='card-body div-money'>
          <h5 class='card-title text-center'>Money Exchange</h5>
          <p class='card-text'>Tasacion Actual por Paises</p>
        </div>
        <div className='div-money'>
          <div className='d-flex justify-content-between mb-1'>
            <img src={usaFlag} alt='logo' className='iconFlag' />
            <p>Dolar</p>
            <input placeholder='0' onChange={handleAmounth} value={amounth} type='number' className='input-change' />
          </div>
          <div className='d-flex justify-content-between'>
            <p>Ultima Actualizacion:</p>
            <p>{date} </p>
          </div>
          <div className='d-flex justify-content-between mb-2'>
            <img src={argentFlag} alt='logo' className='iconFlag' />
            <p>Argentina</p>
            <span>{argentina}</span>
            <input placeholder='0' onChange={handleAmounthArg} value={amounthArg} type='number' className='input-change' />
          </div>
          <div className='d-flex justify-content-between mb-2'>
            <img src={chileFlag} alt='logo' className='iconFlag' />
            <p>Chile</p>
            <span>{chile}</span>
            <input placeholder='0' onChange={handleAmounthArg} value={amounthArg} type='number' className='input-change' />
          </div>
          <div className='d-flex justify-content-between mb-2'>
            <img src={colombiaFlag} alt='logo' className='iconFlag' />
            <p>Colombia</p>
            <span>{colombia}</span>
            <input placeholder='0' onChange={handleAmounthArg} value={amounthArg} type='number' className='input-change' />
          </div>
          <div className='d-flex justify-content-between mb-2'>
            <img src={mexFlag} alt='logo' className='iconFlag' />
            <p>Mexico</p>
            <span>{mexico}</span>
            <input placeholder='0' onChange={handleAmounthArg} value={amounthArg} type='number' className='input-change' />
          </div>
          <div className='d-flex justify-content-between mb-2'>
            <img src={paraguayFlag} alt='logo' className='iconFlag' />
            <p>Paraguay</p>
            <span>{paraguay}</span>
            <input placeholder='0' onChange={handleAmounthArg} value={amounthArg} type='number' className='input-change' />
          </div>
        </div>
        <div class='card-body'>
          <a href='#' class='card-link'></a>
          <a href='#' class='card-link'></a>
        </div>
      </div>
    </div>
  )
}

export default MoneyExchange
