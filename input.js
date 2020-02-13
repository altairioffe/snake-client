const handleUserInput = key => {
  if (key === '\u0003') {
    process.exit();
  }
}

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  stdin.on('data', (key) => {
    if (key === 'w') {
      conn.write("Move: up")
    }
    if (key === 'd') {
      conn.write("Move: right");
    };
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 's') {
      conn.write("Move: down");
    };
    if (key === 'p') {
      conn.write("Say: GET OVER HERE");
    };
    if (key === 'o') {
      conn.write("Say: FINISH HIM");
    };
  });

  return stdin;
}

module.exports = {
  setupInput
}