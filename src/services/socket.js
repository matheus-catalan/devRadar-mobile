import sockeio from 'socket.io-client';

const socket = sockeio('http://10.255.2.55:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subcribeFunction) {
    socket.on('new-dev', subcribeFunction);
}

function connect(latitude, longitude, techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    
    socket.connect();

}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};