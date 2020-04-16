import React, { useEffect, useState } from 'react';
import Peer from 'peerjs';

export function Provider() {
  const [localStream, setLocalStream] = useState(null);
  const peer = new Peer('123456', {
    host: 'localhost',
    port: 9000,
    path: '/myapp'
  });
  peer.on('open', console.log)
  peer.on('connection', () => console.log('Someone connected to us'))
  peer.on('call', call => { console.log('Someone is calling'); call.answer(window.localStream1); console.log(window.localStream1); });
  function checkNavigator() {
    if (navigator.mediaDevices.getDisplayMedia) {
      navigator.mediaDevices.getDisplayMedia({ video: true })
        .then(screen => {
          const video = document.querySelector('video');
          video.srcObject = screen;
          window.localStream1 = screen;
        })
        .catch(console.error);
    } else {
      navigator.getDisplayMedia({ video: true }).then(console.log).catch(console.error);
    }
  }
  useEffect(() => {
    checkNavigator();
  }, [])
  return (
    <video controls autoPlay playsInline muted={false} volume={0} style={{ width: 1000, height: 600 }} />
  );
}