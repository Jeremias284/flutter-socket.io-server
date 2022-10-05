const {io} = require('../index');

//Mensajes de Sockets
io.on('connection', client =>{
    console.log('Cliente Conectado');

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });

    client.on('mensaje',() =>{
        console.log('Mensaje!!', payload);

        io.emit('mensaje', {admin:'Nuevo Mensaje'});

        Socket.on('mensaje', function(payload){
            console.log('Escuchando:', payload);

            io.emit('mensaje', {admin: 'Nuevo Mensaje'});
        });
    });

});