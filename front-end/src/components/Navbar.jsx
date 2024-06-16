import '/home/gambi/P3/P3-project/front-end/src/index.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className= "nav-logo"> The Ultimate Dealership</div>
        <ul className="nav-menu">
            <li className="nav-item">Catalogue</li>
            <li className="nav-item">About</li>
            <li className="nav-contact">Contact Us</li>

        </ul>
    </div>
  )
}

export default Navbar;