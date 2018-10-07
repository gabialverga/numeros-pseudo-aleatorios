var a = 123456789,
    b = 12345,
    m = Math.pow(2,31),
    seed = 1234568798798; //x0, ou xAnterior na função em java

function gerador(){
    seed = (a * seed + b) % m;
    return seed;
}

var canvas = document.getElementById("canvas"),
    ctxCanvas = canvas.getContext("2d");

var div = document.getElementById("div");

var numeros = [];
var y = 0;

canvas.width = screen.width - 100;
canvas.height = 500;

draw();

function draw(){
    for(var x = 0; x < canvas.width; x++){
        var n = gerador();
        if( n < m/2){
            ctxCanvas.fillRect(x,y,1,1);
        }
    }
    y++;
    if(y < canvas.height){
        requestAnimationFrame(draw);
    }
}