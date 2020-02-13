const net = require('net');
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  //conn.on( 'connect', () => conn.write('Connected to Sssserver!'));
  conn.on( 'connect', () => conn.write('Name: NDZ'));

  conn.on('connect', () => {
    conn.write("Move: up");
  });

  return conn;
}

module.exports = { connect };