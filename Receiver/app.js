console.log('loaded2');

//document.body.style.cursor = 'wait'
require([
    'assets/jquery-2.1.b1.js',
    'assets/TweenLite.min.js',
    'assets/blueGrass.js',
    'assets/CSSPlugin.min.js',
    'http://ws.algorithms.io/socket.io/socket.io.js',
    'assets/more/keymaster.min.js'
], function () {
    CSSPlugin.defaultTransformPerspective = 500;
    openCats();

    //var socket = io.connect('http://ws.algorithms.io')
    setTimeout(function () {
        //socket.on('query_get_last_motion_data', onSocket)
    }, 500);

    key('d', function () {
        console.log('right');
    });
    key('a', function () {
        console.log('left');
    });
    key('w', function () {
        console.log('up');
    });
    key('s', function () {
        console.log('down');
    });
    key('q', function () {
        console.log('home');
    });
});

function onSocket(data) {
    console.log(data.rotation_x);
    console.log(data.rotation_y);
    console.log(data.rotation_x);
}

//http://www.greensock.com/css3
var setDur = .3;
viewDir = 'view/';
var categories = [];
var threads = [];
var posts = [];
var level = 1;
var position = 1;
function onCard(nID) {
    console.log(nID);
    categories.push(nID);
    position++;
    var card = document.getElementById(nID);
    TweenLite.from(card, setDur, { rotationX: -40 });
    TweenLite.to(card, setDur, { scaleX: .8, scaleY: .8 });
}

function openCats() {
    var list = ["Hello", "World"];
    for (var i = 0; i < list.length; i++) {
        forward('cat', 'cat', onCard);
    }
}
//# sourceMappingURL=app.js.map
