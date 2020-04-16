import React from 'react';
import Peer from 'peerjs';

export function Viewer() {
  const peer = new Peer('234567', {
    host: 'localhost',
    port: 9000,
    path: '/myapp'
  });
  navigator.mediaDevices.getDisplayMedia({ video: true }).then(_ => {
    const call = peer.call('123456', _);
    call.on('stream', stream => {
      const video = document.querySelector('video');
      video.srcObject = stream;
    })
  })
  return (
    <div className="App">
      <video controls autoPlay playsInline muted={false} volume={0} style={{ width: 1000, height: 600 }} />
    </div>
  );
}