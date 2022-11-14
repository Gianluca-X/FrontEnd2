/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 let nombre = prompt('Ingrese su nombre: ');
    while(nombre === '' || nombre.length < 3 || !isNaN(nombre)){
      nombre = prompt('Ingrese un nombre valido: ');
    }
 let anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
 const anioActual = new Date();
    while(isNaN(anioDeNacimiento) || anioDeNacimiento < 1900 || anioDeNacimiento > anioActual.getFullYear()){
    anioDeNacimiento = parseInt(prompt("Por favor ingrese un año valido"));}
 const ciudad = prompt('Ingrese su ciudad: ');
 const javascript = confirm('Le interesa Javascript? ');
   
  datosPersona.nombre = nombre;
  datosPersona.edad = anioActual.getFullYear() - anioDeNacimiento;
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = javascript ? 'Si' : 'No';

}
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const ciudad = document.getElementById("ciudad");
  const javascript = document.getElementById("javascript");
  nombre.innerText += datosPersona.nombre;
  edad.innerText += datosPersona.edad;
  ciudad.innerText += datosPersona.ciudad;
  javascript.innerText += datosPersona.interesPorJs;

}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const materias = document.querySelector("#fila");
  materias.innerHTML = "";

  listado.forEach((lista) => {
    materias.innerHTML += `
    <article class="caja">
        <img src="${lista.imgUrl}" alt="${lista.lenguajes}">
        <p class="lenguajes">"${lista.lenguajes}"</p>
        <p class= "bimestre">"${lista.bimestre}"</p>
    </article>
    `;
  });


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const sitio = document.getElementById('sitio');
  sitio.classList.toggle('dark');


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.querySelector('#sobre-mi');
window.addEventListener("keydown",(e)=>{
  if(e.key === 'f'){
    sobreMi.classList.remove('oculto');
  }
});
