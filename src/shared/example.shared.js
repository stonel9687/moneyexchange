import logo from '../assets/images/exchage.png'
const Navbar = () => {
  return (
    <>
      <nav className='nav-div-top'>
        <div className='d-flex '>
          <img src={logo} alt='logo' className='img-logo' />
          <h1 className='text-aling-center pt-5'>
            <span className='bg-green'>Money</span>
            <span className='bg-blue'>Exchange</span>
          </h1>
        </div>
      </nav>
    </>
  )
}

export default Navbar
