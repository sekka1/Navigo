console.log('loaded2');

//document.body.style.cursor = 'wait'
require([
    'assets/jquery-2.1.b1.js',
    'assets/TweenLite.min.js',
    'assets/blueGrass.js',
    'assets/CSSPlugin.min.js',
    'http://ws.algorithms.io/socket.io/socket.io.js'
], function () {
    CSSPlugin.defaultTransformPerspective = 500;
    forward('card', 'card', onCard);

    //var socket = io.connect('http://ws.algorithms.io')
    setTimeout(function () {
        //socket.on('query_get_last_motion_data', onSocket)
    }, 500);
});

function onSocket(data) {
    console.log(data.rotation_x);
    console.log(data.rotation_y);
    console.log(data.rotation_x);
}

//http://www.greensock.com/css3
var setDur = .5;
viewDir = 'view/';
var categories = [];
var threads = [];
var posts = [];
var level = 1;
function onCard(nID) {
    console.log(nID);
    categories.push(nID);
    var card = document.getElementById(nID);
    TweenLite.to(card, setDur, { rotationX: -40, x: 100 });
}

function openTopics() {
}
//# sourceMappingURL=app.js.map
