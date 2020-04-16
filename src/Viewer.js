import React from 'react';
import Peer from 'peerjs';
import { createEmptyVideoTrack, createEmptyAudioTrack } from './utils'

export function Viewer() {
  const peer = new Peer('234567', {
    host: 'localhost',
    port: 9000,
    path: '/myapp'
  });
  const audioTrack = createEmptyAudioTrack();
  const videoTrack = createEmptyVideoTrack({ width: 640, height: 480 });
  const mediaStream = new MediaStream([audioTrack, videoTrack]);
  const call = peer.call('123456', mediaStream);
  call.on('stream', stream => {
    const video = document.querySelector('video');
    video.srcObject = stream;
  });
  return (
    <div className="App">
      <video controls autoPlay playsInline muted={false} volume={0} style={{ width: 1000, height: 600 }} />
    </div>
  );
}