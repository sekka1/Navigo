
function conInit() {
	console.log('con init')
}


// sock *****************************
var socket = io.connect('http://ws.algorithms.io')

socket.emit('query_get_last_motion_data', {'authToken': '02cfc86d9992e822510318adebccb4d3', 'device_id': 'navigo'});

socket.on('query_get_last_motion_data', function(data){
    /*
    $('#motion_data').text('motion: accelerometer_x: ' + data.data.accelerometer_x
        + '|  accelerometer_y: ' + data.data.accelerometer_y
        + '|  accelerometer_z: ' + data.data.accelerometer_z
        + '|  gyroscope_x: ' + data.data.gyroscope_x
        + '|  gyroscope_y: ' + data.data.gyroscope_y
        + '|  gyroscope_z: ' + data.data.gyroscope_z
        + '|  rotation_x: ' + data.data.rotation_x
        + '|  rotation_y: ' + data.data.rotation_y
        + '|  rotation_z: ' + data.data.rotation_z
    );
    */

    if(  (data.data.gyroscope_z > 20 ) ){
        //$('#prediction').text('right');
        console.log('right');
        onRight();
    }
    if( (data.data.gyroscope_z < -20 ) ){
        //$('#prediction').text('left');
        console.log('left');
        onLeft();
    }
    if( (data.data.gyroscope_y > 40 ) ){
        //$('#prediction').text('up');
        console.log('up');
        onUp();
    }
    if( (data.data.gyroscope_y < 15 ) ){
        //$('#prediction').text('down');
        console.log('down');
        onDown();
    }


});


