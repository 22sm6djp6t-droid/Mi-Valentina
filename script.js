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
