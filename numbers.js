var a = 123456789,
    b = 12345,
    m = Math.pow(2,31),
    seed = 1234568798798; //x0, ou xAnterior na função em java

var y = 0;

var canvas = document.getElementById("canvas"),
    ctxCanvas = canvas.getContext("2d");
canvas.width = 1050;
canvas.height = 480;

function gerador(){
    seed = (a * seed + b) % m;
    return seed;
}

function load(){
    ctxCanvas.clearRect(0, 0, canvas.width, canvas.height);
    y=0;
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    m = parseInt(document.getElementById("m").value);
    seed = parseInt(document.getElementById("seed").value);
    console.log(a,b,m,seed);
    draw();
}

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