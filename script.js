// =====================================
// MI VALENTINA ❤️
// Primera versión del sistema
// =====================================


// Crear estrellas adicionales

const stars = document.querySelector(".stars");


for(let i = 0; i < 120; i++){

    let star = document.createElement("span");

    star.className = "star";


    star.style.position = "absolute";

    star.style.width =
    Math.random() * 3 + "px";


    star.style.height =
    star.style.width;


    star.style.background =
    "white";


    star.style.borderRadius =
    "50%";


    star.style.left =
    Math.random()*100 + "%";


    star.style.top =
    Math.random()*100 + "%";


    star.style.opacity =
    Math.random();


    star.style.animation =
    `twinkle ${2 + Math.random()*4}s infinite`;



    stars.appendChild(star);

}



// Animación inicial

setTimeout(()=>{

    document.querySelector(".intro")
    .style.opacity="0";


},8000);





// Mensaje especial

setTimeout(()=>{


    console.log(
    "✨ Bienvenido al universo de Mi Valentina ❤️"
    );


},9000);





// Preparación para contador

const fechaInicio =
new Date("2022-05-16");



function actualizarTiempo(){


    const ahora =
    new Date();


    const diferencia =
    ahora - fechaInicio;



    const dias =
    Math.floor(
    diferencia /
    (1000*60*60*24)
    );


    console.log(
    "Tiempo juntos:",
    dias,
    "días ❤️"
    );


}



actualizarTiempo();



setInterval(
actualizarTiempo,
60000
);
// =================================
// CREACIÓN DEL CORAZÓN DE PARTÍCULAS
// =================================


const heartContainer =
document.getElementById(
"particleHeart"
);



for(let i=0;i<180;i++){


    let particle =
    document.createElement("span");


    particle.className =
    "particle";



    let t =
    Math.PI * 2 *
    (i/180);



    let x =
    16 *
    Math.pow(Math.sin(t),3);



    let y =
    -(13*Math.cos(t)
    -5*Math.cos(2*t)
    -2*Math.cos(3*t)
    -Math.cos(4*t));



    particle.style.left =
    (130+x*7)
    +"px";


    particle.style.top =
    (110+y*7)
    +"px";



    particle.style.animationDelay =
    Math.random()*2
    +"s";



    heartContainer.appendChild(
    particle
    );


}
// =============================
// GALERÍA DE RECUERDOS
// =============================


const gallery =
document.getElementById("gallery");



const fotos = [

"foto1.jpg",

"foto2.jpg",

"foto3.jpg",

"foto4.jpg",

"foto5.jpg"

];



fotos.forEach((foto)=>{


    let img =
    document.createElement("img");


    img.src =
    "assets/fotos/" + foto;


    img.className =
    "photo";


    gallery.appendChild(img);


});
// =============================
// CARTA ESCRITA AUTOMÁTICAMENTE
// =============================


const carta = `

Mi Valentina ❤️


Desde aquel 16 de mayo de 2022
comenzó una historia que cambió mi vida.


Gracias por cada sonrisa,
cada momento y cada recuerdo.


Quiero que sepas que entre millones
de estrellas en este universo,
siempre elegiría encontrarte a ti.


Adoro tus patitas ❤️


Y así será por toda la eternidad.


Te amo.


`;



const letterBox =
document.getElementById("letterText");



let posicion = 0;



function escribirCarta(){


    if(posicion < carta.length){


        letterBox.innerHTML +=
        carta.charAt(posicion);


        posicion++;


        setTimeout(
        escribirCarta,
        50
        );


    }


}



setTimeout(()=>{

    escribirCarta();

},10000);
// =============================
// CONTADOR DESDE 16 MAYO 2022
// =============================


function actualizarContador(){


    const inicio =
    new Date("2022-05-16T00:00:00");


    const ahora =
    new Date();



    let diferencia =
    ahora - inicio;



    const segundos =
    Math.floor(diferencia / 1000);


    const minutos =
    Math.floor(segundos / 60);


    const horas =
    Math.floor(minutos / 60);


    const dias =
    Math.floor(horas / 24);



    const years =
    Math.floor(dias / 365);



    const months =
    Math.floor((dias % 365) / 30);



    const days =
    (dias % 365) % 30;



    document.getElementById("years").innerHTML =
    years;


    document.getElementById("months").innerHTML =
    months;


    document.getElementById("days").innerHTML =
    days;


    document.getElementById("hours").innerHTML =
    horas % 24;


    document.getElementById("minutes").innerHTML =
    minutos % 60;


    document.getElementById("seconds").innerHTML =
    segundos % 60;


}



actualizarContador();


setInterval(
actualizarContador,
1000
);
