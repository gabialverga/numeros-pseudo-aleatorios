var a = 123456789,
    b = 12345,
    m = Math.pow(2,31),
    seed = 1234568798798; //x0, ou xAnterior na função em java

var y = 0;

var canvas = document.getElementById("canvas"),
    ctxCanvas = canvas.getContext("2d");
canvas.width = 1050;
canvas.height = 480;

var chart = document.getElementById("chart"),
    ctxChart = chart.getContext("2d");

function loadChart(){
    var lbls = [], dt = [];
    for(var i = 0; i < 200; i++){
        lbls.push(i);
        dt.push(gerador());
    }
    var myChart = new Chart(ctxChart, {
            type: 'line',
            data: {
                labels: lbls,
                datasets: [{
                    label: '#Números pseudo-aleatórios',
                    data: dt,
                    backgroundColor: "rgba(0,0,255,0.5)"
                }]
            }
        });
}


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
    draw();
    loadChart();
}

draw();
loadChart();

function draw(){
    for(var x = 0; x < canvas.width; x+=3){
        var n = gerador();        
        var r = 0;
        var g = 0;
        var b = n%255;
        ctxCanvas.fillStyle = "rgb("+r+","+g+","+b+")";
        ctxCanvas.fillRect(x,y,3,3);
    }
    y+=3;
    if(y < canvas.height){
        requestAnimationFrame(draw);
    }
}
