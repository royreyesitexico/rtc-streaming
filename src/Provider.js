import React from 'react';
import Peer from 'peerjs';
import { Button } from 'reactstrap';

export function Provider() {
  const peer = new Peer('123456', {
    host: 'localhost',
    port: 9000,
    path: '/myapp'
  });
  peer.on('open', console.log)
  peer.on('connection', () => console.log('Someone connected to us'))
  peer.on('call', call => { console.log('Someone is calling'); call.answer(window.localStream1); });
  function startStreaming() {
    if (navigator.mediaDevices.getDisplayMedia) {
      navigator.mediaDevices.getDisplayMedia({ video: true })
        .then(screen => {
          const video = document.querySelector('video');
          video.srcObject = screen;
          window.localStream1 = screen; // couldn't find a way to store in state. Can it be stored in Redux?
        })
        .catch(console.error);
    } else {
      navigator.getDisplayMedia({ video: true }).then(console.log).catch(console.error);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <video controls autoPlay playsInline muted={false} volume={0} style={{ width: 1000, height: 600 }} />
      <div style={{ marginTop: 15 }}>
        <Button color="primary" onClick={startStreaming}>
          Start Sharing
        </Button>
      </div>
    </div>
  );
}