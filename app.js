var startStop = document.getElementById('start-stop');
var reset = document.getElementById('reset');
var record = document.getElementById('record');

var stopwatch = document.getElementById('stopwatch');
var recordList = document.getElementById('past-times');

var startStopToggle = true;
var timer, time=0.0;
function startStopCounter() {
    if(startStopToggle) {
        timer = setInterval(function(){
            time += 0.01;
            stopwatch.innerHTML = time.toFixed(2);
        }, 10);
    } else {
        clearInterval(timer);
    }
    startStopToggle = !startStopToggle;
}

function resetCounter() {
    time=0.0;
    stopwatch.innerHTML = time.toFixed(2);
    recordList.innerHTML = "";
}

function lap() {
    var list = document.createElement('li');
    list.innerHTML = time.toFixed(2);
    recordList.appendChild(list);
}

startStop.addEventListener('click', startStopCounter);
this.addEventListener('keydown', function(event){
    if(event.key === 's') startStopCounter();
});
reset.addEventListener('click', resetCounter);
this.addEventListener('keydown', function(event){
    if(event.key === 'r') resetCounter();
});
record.addEventListener('click', lap);
this.addEventListener('keydown', function(){
    if(event.key === 't') lap();
});
