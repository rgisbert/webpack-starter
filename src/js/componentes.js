import "../css/componentes.css";

// Esta es una forma de importar una imagen
// import webPackLogo from '../assets/img/webpack-logo.png';
// ! Tb se puede importar directamente desde el HTML


export const saludar = ( nombre ) => {
    const h1 = document.createElement( 'h1' );
    h1.innerText = `Hola ${ nombre }!!`

    document.body.append( h1 );

    // imagen
    // console.log( webPackLogo );
    // const img = document.createElement( 'img' );
    // img.src = webPackLogo;
    // document.body.append( img );
};