class planeta {
    constructor(intervalos, distancia, elemento){
        this.intervalos = intervalos;
        this.distancia = distancia;
        this.elemento = elemento;
        this.grados = 0;
    }
    mover() {
        this.grados += Math.PI * this.intervalos;
        this.elemento.style.transform = 'translate(' + Math.cos(this.grados) * this.distancia + 'px, ' + Math.sin(this.grados) * this.distancia * 0.5+ 'px)';
    }
}

const interglobal = 50;

var planetita1 = document.getElementById("planeta1");
var planeta1 = new planeta(0.055, 70, planetita1);
setInterval(function() {
    planeta1.mover();
}, interglobal);
var planetita2 = document.getElementById("planeta2");
var planeta2 = new planeta(0.025, 140, planetita2);
setInterval(function() {
    planeta2.mover();
}, interglobal);
var planetita3 = document.getElementById("planeta3");
var planeta3 = new planeta(0.02, 200, planetita3);
setInterval(function() {
    planeta3.mover();
}, interglobal);
var luna = document.getElementById("luna");
var luna = new planeta(0.02, 20, luna);
setInterval(function() {
    luna.mover();
}, interglobal);
var planetita4 = document.getElementById("planeta4");
var planeta4 = new planeta(0.04, 260, planetita4);
setInterval(function() {
    planeta4.mover();
}, interglobal);
var planetita5 = document.getElementById("planeta5");
var planeta5 = new planeta(-0.02, 350, planetita5);
setInterval(function() {
    planeta5.mover();
}, interglobal);