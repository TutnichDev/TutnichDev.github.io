// traigo el lienzo y le doy contexto 2d
var canv = document.getElementById("lienzo");
var d2 = canv.getContext("2d");

//direcciones de imagenes
var fondo = {
    "url":"imagenes/tile.png",
    "isLoad" :false};
    
    var pollo = {
        "url":"imagenes/pollo.png",
        "isLoad" :false};
        
        var cerdo = {
            "url":"imagenes/cerdo.png",
            "isLoad" :false};
            var vaca = {
                "url":"imagenes/vaca.png",
                "isLoad" :false};
                
                // construyo objeto Image y le deposito la imagen
                //      obj 1
                fondo.imag = new Image();
                fondo.imag.src = fondo.url;
                fondo.imag.counter = 0;
                //      obj 2
                pollo.imag = new Image();
                pollo.imag.src = pollo.url;
                pollo.imag.counter = 0;
                //      obj 3
                cerdo.imag = new Image();
                cerdo.imag.src = cerdo.url;
                cerdo.imag.counter = 0;
                //      obj 4
                vaca.imag = new Image();
                vaca.imag.src = vaca.url;
                vaca.imag.counter = 0;
                
                // evento que avisa cuando la imagen se carga, y relanza la funcion que pone en orden mis objetos, de esta manera estan todos.
                fondo.imag.addEventListener("load",dibujarFondo);
                cerdo.imag.addEventListener("load",dibujarCerdo);
                pollo.imag.addEventListener("load",dibujarPollo);
                vaca.imag.addEventListener("load",dibujarVaca);
                
                // var para rango de numeros aleatorios para ubicacion de animales
                var escala = 60
                var xmin=0;
                //  console.log("ancho de cerdo "+xmin);
                var xmax=(fondo.imag.width-cerdo.imag.width)/escala;
                //  console.log("ancho de fondo - ancho de cerdo "+xmin)
                var xvacamin = 6;
                var xvacamax = 14;
                
//creo un addListenerEvent que mueva al chancho con mis teclas
window.addEventListener("keydown",chanchitoVe);

var chanchiX = 0;
var chanchiY = 0;

var polloX = aleatorio(xmin,xmax);
console.log("gilada" & polloX);
var polloY = aleatorio(xmin,xmax);
//console.log(polloY);

// Creo estructura json / array para mantener las vacas y sus cooredenadas, y pasarselo a la funcion loop
var vacaAleatoria = aleatorio(1,10);
var vacaPrueba = {
    x:[vacaAleatoria],
    y:[vacaAleatoria]
};
console.log(vacaPrueba)

for(i=0;i<vacaAleatoria;i++)
{
    vacaPrueba.x[i] = aleatorio(xmin,xmax);
    vacaPrueba.y[i] = aleatorio(xmin,xmax);
    console.log(vacaPrueba)
};

var vacaX = aleatorio(xmin,xmax);
var vacaY = aleatorio(xmin,xmax);

function dibujarFondo()
{
    fondo.isLoad = true;   
    fondo.imag.counter = 1;
    console.log("fondo ok")
    looper()
};
function dibujarCerdo()
{
    cerdo.isLoad = true;  
    cerdo.imag.counter = 1 
    console.log("cerdo ok");
    looper()
};
function dibujarPollo()
{
    pollo.isLoad = true;  
    pollo.imag.counter = 1 ;
    console.log("pollo ok");
    looper()
};
function dibujarVaca()
{
    vaca.isLoad = true;   
    vaca.imag.counter = 1;
    console.log("vaca ok");
    looper()
};
function looper()
{
    if(fondo.isLoad){
        if(cerdo.isLoad){
            if(pollo.isLoad){
                if(vaca.isLoad){
                    d2.drawImage(fondo.imag,0,0);
                    d2.drawImage(cerdo.imag,chanchiX,chanchiY);
                    d2.drawImage(pollo.imag,polloX*escala,polloY*escala);
                    for(i=0;i<vacaAleatoria;i++)
                    {
                        d2.drawImage(vaca.imag,vacaPrueba.x[i]*escala,vacaPrueba.y[i]*escala)
                    }
                };
            };
        };
    }
    else {console.log("falta cargar algo")};
}

function aleatorio(xMin , xMax)
{
    var nAleatorio = Math.round((Math.random()*(xMax-xMin)))+xMin;
    return(nAleatorio);
    console.log("devuelve:" & nAleatorio)
}

function chanchitoVe(estado) 
{
    var escala = 5;
    if (estado.keyCode == 37) {
        chanchiX = chanchiX - escala;
        //console.log(chanchiX)
    }
    if (estado.keyCode == 38) {
        chanchiY = chanchiY - escala;
        //console.log(chanchiY)
    }
    if (estado.keyCode == 39) {
        chanchiX = chanchiX + escala;
        //console.log(chanchiX)
    }
    if (estado.keyCode == 40) {
        chanchiY = chanchiY + escala;
        //console.log(chanchiY)
    }
    else { "no es flecha" };
    looper();
};