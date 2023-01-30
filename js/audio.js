var maximo,
    barra,
    progreso,
    estado,
    repetir,
    favorito,
    pista,
    icono,
    dur,
    tiempo,
    fav,
    minutos = 0,
    segundos = 0,
    horas = 0,
    duracion = 0,
    minutos2,
    segundos2,
    horas2,
    duracion2,
    r = false,
    maximo = 346,
    f = false,
    seg = 0;

function elementos(){
        barra= document.getElementById('barra');
        progreso= document.getElementById('progreso');
        icono = document.getElementById('estado');
        estado = document.getElementsByClassName('max')[0];
        repetir = document.getElementsByClassName('rep')[0];
        favorito = document.getElementsByClassName('favorito')[0];
        pista = document.getElementsByTagName('audio')[0];
        dur = document.getElementsByClassName('dur')[0];
        tiempo = document.getElementsByClassName('pro')[0];
        fav = document.getElementById('fav');

        estado.addEventListener('click, reproduccion,false');
        repetir.addEventListener('click', bucle, false);
        favorito.addEventListener('click, agregar,false');
    }

function reproduccion(){
    if ((pista.paused==false) && (pista.ended==false)){
        pista.pause();
        icono.className= "fas fa-play-circle";
    } else {
        pista.play();
        icono.className= "fas fa-pause-circle";

        load = setInterval(rep,1);
    }    
    }

function agregar(){
    if(f==false){
        fav.className="fas fa-heart";
        f = true;
        alert('cancion agregada');
    }else{
        fav.className="fas fa-heart";
        f= false;
        alert('cancion eliminada');

    }
}

function bucle(){
    if(r==false){
        repetir.style.color="#53DC0D";
        r=true;
    }else{
        repetir.style.color="#FFF";
        r= false;
    }
}
    window.addEventListener('load', elementos, false);