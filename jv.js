 const turnon = document.getElementById ( 'turnon' );
const turnof = document.getElementById ( 'turnoff' );
const lamp = document.getElementById ('lamp')

function islampbroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampon (){
    if ( !islampbroken () ) {
        lamp.src = './ligada.jpg';
    }
}

function lampoff () {
    if ( !islampbroken () ) {
         lamp.src = './desligada.jpg'; 
    }
}

function lampbroke (){
    lamp.src = './quebrada.jpg';
}


turnon.addEventListener ( 'click', lampon );
turnof.addEventListener ( 'click', lampoff );
lamp.addEventListener ('mouseover', lampon );
lamp.addEventListener ('mouseleave', lampoff );
lamp.addEventListener ('dblclick', lampbroke );
