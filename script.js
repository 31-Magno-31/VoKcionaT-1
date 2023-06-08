const $btnRegistro= document.querySelector('.crear-cuenta-btn'),
      $btnInicio= document.querySelector('.iniciar-sesion-btn'),
      $Registro= document.querySelector('.iniciar-sesion'),
      $Inicio= document.querySelector('.crear-cuenta');

document.addEventListener('click', e =>{
    if(e.target === $btnRegistro || e.target === $btnInicio){
        $Registro.classList.toggle('active');
        $Inicio.classList.toggle('active')
}

}
);