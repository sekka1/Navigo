console.log('loaded v03');

//document.body.style.cursor = 'wait'
require([
    'assets/jquery-2.1.b1.js',
    'assets/TweenLite.min.js',
    'assets/blueGrass.js',
    'assets/CSSPlugin.min.js',
    'http://ws.algorithms.io/socket.io/socket.io.js',
    'assets/more/keymaster.min.js',
    'http://cdn.pubnub.com/pubnub-3.5.4.min.js'
], function () {
    CSSPlugin.defaultTransformPerspective = 500;
    viewDir = 'view/';
    openCats();

    // sock *****************************
    //var socket = io.connect('http://ws.algorithms.io')
    setTimeout(function () {
        //socket.on('query_get_last_motion_data', onSocket)
    }, 500);

    //nav *****************************
    key('d', onRight);
    key('a', onLeft);
    key('w', onUp);
    key('s', onDown);
    key('q', onLeft);
});

function onSocket(data) {
    console.log(data.rotation_x);
    console.log(data.rotation_y);
    console.log(data.rotation_x);
}

//http://www.greensock.com/css3
var setDur = .3;
var categories = [];
var threads = [];
var posts = [];

function onCat(nID) {
    categories.push(nID);
    var card = document.getElementById(nID);
    TweenLite.from(card, setDur, { rotationX: -40 });
    //TweenLite.to(card, setDur, {y:25});
}
function openCats() {
    var list = ["Sports", "Politics", "Kardashians"];
    for (var i = 0; i < list.length; i++) {
        forward2('cat', 'kontainer1', 'cat', onCat);
    }
    setTimeout(function () {
        select(categories[0]);
    }, 100);
}

function onThread(nID) {
    threads.push(nID);
    var card = document.getElementById(nID);
    TweenLite.from(card, setDur, { rotationX: -40 });
    //TweenLite.to(card, setDur, { y: 100 });
}
function openThreads(catId) {
    level = 2;
    onThreadData(null);
    //ROTATE ALL CAT CARDS
    TweenLite.to($('.cats'), setDur, { rotationX: -80 , rotationY: -30, scaleX: .8, scaleY: .8});
    //BUT UNROTATE THE FOCUS CAT CARD
    TweenLite.to($('#' + catId), setDur, { rotationX: 0, rotationY: -30, scaleX: 1, scaleY: 1});
}
function onThreadData(data) {
    threads = [];
    var list = ["Sports", "Politics", "Kardashians"];
    for (var i = 0; i < list.length; i++) {
        forward2('thread', 'kontainer2', 'thread', onThread);
    }
    setTimeout(function () {
        select(threads[0]);
    }, 100);
}
function removeThreads() {
    level = 1;
    threadNav = 0;
    TweenLite.to($('.threads'), setDur, { rotationX: -90, scaleX:.8, scaleY:.8});
    TweenLite.to($('.cats'), setDur, { rotationX: 0 , rotationY: 0, scaleX:1, scaleY:1});

    setTimeout(function () {
        var views = $('#kontainer2').children();
        console.log(views.length);
        while (views.length > 0) {
            var old = views.get(0);
            old.parentNode.removeChild(old);
            views = $('#kontainer2').children();
        }
    }, 400);
}

function onPost(nID) {
    posts.push(nID);
    var card = document.getElementById(nID);
    TweenLite.from(card, setDur, { rotationX: -40 });
    //TweenLite.to(card, setDur, { scaleX: .8, scaleY: .8 });
}
function openPosts(threadId) {
    level = 3;
    postNav = 0;
    onPostData(null);
    TweenLite.to($('.cats'), setDur, { rotationY: -60 });
    TweenLite.to($('.threads'), setDur, { rotationX: -80 , rotationY: -30, scaleX:.8, scaleY:.8, x:-50});
    TweenLite.to($('#' + threadId), setDur, { rotationX: 0 , rotationY: -30, scaleX:1, scaleY:1, x:-50});
}
function onPostData(data) {
    posts = [];
    var list = ["Sports", "Politics", "Kardashians"];
    for (var i = 0; i < list.length; i++) {
        forward2('post', 'kontainer3', 'post', onPost);
    }
    setTimeout(function () {
        select(posts[0]);
    }, 100);
}
function removePosts() {
    level = 2;
    TweenLite.to($('.cats'), setDur, { rotationY: -30 });
    TweenLite.to($('.posts'), setDur, { rotationX: -90 , scaleX:.8, scaleY:.8});
    TweenLite.to($('.threads'), setDur, { rotationX: 0, rotationY: 0, scaleX:1, scaleY:1,x:0});

    setTimeout(function () {
        var views = $('#kontainer3').children();
        console.log(views.length);
        while (views.length > 0) {
            var old = views.get(0);
            old.parentNode.removeChild(old);
            views = $('#kontainer3').children();
        }
    }, 400);
}

// NAV: ********************************
var level = 1;
var catNav = 0;
var threadNav = 0;
var postNav = 0;
function onDown() {
    console.log('down');
    deSelect();
    if (1 == level)
        select(categories[++catNav]);
    if (2 == level)
        select(threads[++threadNav]);
    if (3 == level)
        select(posts[++postNav]);
}
function onUp() {
    console.log('up');
    deSelect();
    if (1 == level) {
        --catNav;
        select(categories[catNav]);
    }
    if (2 == level) {
        --threadNav;
        select(threads[threadNav]);
    }
    if (3 == level) {
        --postNav;
        select(posts[postNav]);
    }
}

function onRight() {
    console.log('right' + level);
    if (1 == level) {
        openThreads(categories[catNav]);
        return;
    }
    if (2 == level)
        openPosts(threads[threadNav]);
}
function onLeft() {
    console.log('left');
    if (2 == level)
        removeThreads();
    if (3 == level)
        removePosts();
}

function select(id) {
    console.log(id);
    $('html, body').animate({
        scrollTop: $('#' + id).offset().top - 50
    }, 400);
    $('#' + id).css({"box-sizing":"border-box","-moz-box-sizing":"border-box","-webkit-box-sizing":"border-box","border-color": "#A7DBD8","border-width":"4px","border-style":"solid"});
}
function deSelect() {
    if (1 == level)
        $('.cats').css('border-width', '0');
    if (2 == level)
        $('.threads').css('border-width', '0');
    if (3 == level)
        $('.posts').css('border-width', '0');
}
//# sourceMappingURL=app.js.map
