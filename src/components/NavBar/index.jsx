import React from 'react';
import CartWidget from '../CarWidget';

export const NavBar = () => {
    return (

<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Magic Clothes Argentina</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Clothes</a>
        <a class="nav-link" href="#">Accesories</a>
        <a class="nav-link" href="#">Combos</a>
        <a class="nav-link disabled" href="#"> <CartWidget /></a>
      </div>
    </div>
  </div>
</nav>
</div>


    );
}

export default NavBar;