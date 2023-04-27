import React from 'react'
import NavbarItem from './NavbarItem'
import IconCart from '../CardWidget/IconCart'


const NavBar = (props) => {



  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <p className= "navbar-brand text-danger" href="#">
        {props.navbarLogo}
        </p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavbarItem texto={"Home"} />
        <NavbarItem texto={"Contact"}/>
        <NavbarItem texto={"About"}/>
        <NavbarItem texto={"Extras"}/>
        <IconCart></IconCart>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
