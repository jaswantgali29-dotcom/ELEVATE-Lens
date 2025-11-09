import React, { useRef, useEffect } from 'react';

export default function VideoCanvas({ onSelect, demoMode }) {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    async function setupCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
    setupCamera();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <video ref={videoRef} width="640" height="480" style={{ border: "2px solid #00f" }} />
      <canvas ref={canvasRef} width="640" height="480" style={{ position: "absolute", top: 0, left: 0 }} />
    </div>
  );
}
