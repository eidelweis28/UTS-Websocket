const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = 4000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('🔌 Pengguna terhubung');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('❌ Pengguna keluar');
  });
});

http.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
