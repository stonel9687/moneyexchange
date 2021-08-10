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
    <div className='row mb-5 mx-auto'>
      <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
        <div className='p-5'>
          <h2 className='text-align-center'>
            La Forma mas Facil de <br />
            Convertir Tus Monedas
          </h2>
        </div>
      </div>
      <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
        <div class='card divbox mx-auto currency-card'>
          <div class='card-body div-money'>
            <h5 class='card-title text-center'>Money Exchange</h5>
            <p class='card-text'>Tasacion Actual por Paises</p>
          </div>
          <div className='d-flex justify-content-between'>
            <span>Ultima Actualizacion:</span>
            <span>{date} </span>
          </div>
          <hr />
          <div className='div-money'>
            <div className='row'>
              <div className='col-2'>
                <img src={usaFlag} alt='logo' className='iconFlag' />
              </div>
              <div className='col-5'>
                <p>Dolar</p>
              </div>
              <div className='col-5'>
                <input
                  placeholder='0'
                  onChange={handleAmounth}
                  value={amounth}
                  type='text'
                  className='input-change currency-input'
                />
              </div>
            </div>
            <hr />
            <div className='row '>
              <div className='col-2'>
                <img src={argentFlag} alt='logo' className='iconFlag' />
              </div>
              <div className='col-3'>
                <p>Argentina</p>
              </div>
              <div className='col-2'>
                <span>{argentina}</span>
              </div>
              <div className='col-5'>
                <input
                  placeholder='0'
                  onChange={handleAmounthArg}
                  value={amounthArg}
                  type='number'
                  className='input-change  currency-input'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>
                <img src={chileFlag} alt='logo' className='iconFlag' />
              </div>
              <div className='col-3'>
                <p>Chile</p>
              </div>
              <div className='col-2'>
                <span>{chile}</span>
              </div>
              <div className='col-5'>
                <input
                  placeholder='0'
                  onChange={handleAmounthArg}
                  value={amounthChi}
                  type='number'
                  className='input-change currency-input'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>
                <img src={colombiaFlag} alt='logo' className='iconFlag' />
              </div>
              <div className='col-3'>
                <p>Colombia</p>
              </div>
              <div className='col-2'>
                <span>{colombia}</span>
              </div>
              <div className='col-5'>
                <input
                  placeholder='0'
                  onChange={handleAmounthArg}
                  value={amounthCol}
                  type='number'
                  className='input-change currency-input'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>
                <img src={mexFlag} alt='logo' className='iconFlag' />
              </div>
              <div className='col-3'>
                <p>Mexico</p>
              </div>
              <div className='col-2'>
                <span>{mexico}</span>
              </div>
              <div className='col-5'>
                <input
                  placeholder='0'
                  onChange={handleAmounthArg}
                  value={amounthMex}
                  type='number'
                  className='input-change currency-input'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>
                <img src={paraguayFlag} alt='logo' className='iconFlag' />
              </div>
              <div className='col-3'>
                <p>Paraguay</p>
              </div>
              <div className='col-2'>
                <span>{paraguay}</span>
              </div>
              <div className='col-5'>
                <input
                  placeholder='0'
                  onChange={handleAmounthArg}
                  value={amounthPar}
                  type='number'
                  className='input-change currency-input'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyExchange
