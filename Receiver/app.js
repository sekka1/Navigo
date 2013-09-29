console.log('loaded v02');

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

    // sock *****************************
    //var socket = io.connect('http://ws.algorithms.io')
    setTimeout(function () {
        //socket.on('query_get_last_motion_data', onSocket)
    }, 500);

    //nav *****************************
    key('d', onRight);
    key('a', function () {
        console.log('left');
    });
    key('w', onUp);
    key('s', onDown);
    key('q', onUp);
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

function onCat(nID) {
    categories.push(nID);
    var card = document.getElementById(nID);
    TweenLite.from(card, setDur, { rotationX: -40 });
    TweenLite.to(card, setDur, { scaleX: .8, scaleY: .8 });
}
function onThread(nID) {
    threads.push(nID);
    var card = document.getElementById(nID);
    TweenLite.from(card, setDur, { rotationX: -40 });
    TweenLite.to(card, setDur, { scaleX: .8, scaleY: .8 });
}

function openCats() {
    var list = ["Sports", "Politics", "Kardashians"];
    for (var i = 0; i < list.length; i++) {
        forward2('cat', 'kontainer1', 'cat', onCat);
    }
    setTimeout(function () {
        select(categories[0]);
    }, 400);
}
function openThread(catId) {
    onThreadData();
}
function onThreadData(data) {
    threads = [];
    var list = ["Sports", "Politics", "Kardashians"];
    for (var i = 0; i < list.length; i++) {
        forward('thread', 'kontainer2', 'thread', onThread);
    }
    setTimeout(function () {
        select(threads[0]);
    }, 400);
}

// NAV: ********************************
var level = 1;
var catNav = 0;
var threadNav = 0;
var postNav = 0;
function onDown() {
    console.log('down');
    deSelectAll();
    select(categories[++catNav]);
}
function onUp() {
    console.log('up');
    deSelectAll();
    --catNav;
    select(categories[catNav]);
}
function onRight() {
    console.log('right');
    openThread(categories[catNav]);
}

function select(id) {
    console.log(id);
    $('html, body').animate({
        scrollTop: $('#' + id).offset().top
    }, 600);
    $('#' + id).css('border', '3px solid black');
}
function deSelectAll() {
    $('.cats').css('border-width', '0');
}
//# sourceMappingURL=app.js.map
