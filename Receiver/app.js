console.log('loaded1');

//document.body.style.cursor = 'wait'
require([
    'assets/jquery-2.1.b1.js',
    'assets/TweenLite.min.js',
    'assets/blueGrass.js',
    'assets/CSSPlugin.min.js',
    'http://ws.algorithms.io/socket.io/socket.io.js'
], function () {
    CSSPlugin.defaultTransformPerspective = 500;
    forward('topic1', 'topic1', onTopic);

    var socket = io.connect('http://ws.algorithms.io', function () {
        socket.on('query_get_last_motion_data', onSocket);
    });
});

function onSocket(data) {
    console.log(data.rotation_x);
    console.log(data.rotation_y);
    console.log(data.rotation_x);
}

//http://www.greensock.com/css3
duration = 1;
viewDir = 'view/';
function onTopic(nID) {
    console.log('topic1');
    var topic1 = document.getElementById(nID);
    console.log(topic1);
    TweenLite.to(topic1, duration, { rotationX: -40, x: 100 });
}
//# sourceMappingURL=app.js.map
