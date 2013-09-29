
function conInit() {
	console.log('con init')

    var pubnub = PUBNUB.init({
        publish_key   : 'pub-c-68ea2e31-5344-44cd-915d-c22450e012d7',
        subscribe_key : 'sub-c-93ec9a2e-2944-11e3-a434-02ee2ddab7fe'
    });

    // sock *****************************
    //var socket = io.connect('http://ws.algorithms.io')

    //socket.emit('query_get_last_motion_data', {'authToken': '02cfc86d9992e822510318adebccb4d3', 'device_id': 'navigo'});

    //console.log('created websocket');

   // socket.on('query_get_last_motion_data', function(data){
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

    // LISTEN
    pubnub.subscribe({
        channel : "navigo",
        message : function(m){

            //console.log(m);
            var obj = eval ("(" + m + ")");

            //console.log(m);
            console.log(obj.gyroscope_x);

            if(  (obj.gyroscope_z > 20 ) ){
                //$('#prediction').text('right');
                console.log('right');
                onRight();
            }
            if( (obj.gyroscope_z < -20 ) ){
                //$('#prediction').text('left');
                console.log('left');
                onLeft();
            }
            if( (obj.gyroscope_y > 40 ) ){
                //$('#prediction').text('up');
                console.log('up');
                onUp();
            }
            if( (obj.gyroscope_y < 15 ) ){
                //$('#prediction').text('down');
                console.log('down');
                onDown();
            }

        }
        //connect : publish
    })

    /*

        console.log('getting query data');

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
    */

    //});

}


