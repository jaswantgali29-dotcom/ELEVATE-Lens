import React, { useEffect, useState } from 'react';

export default function FocusCard({ objectName, tone, onClose }) {
  const [story, setStory] = useState("");

  useEffect(() => {
    async function fetchStory() {
      const res = await fetch('/api/describe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ objectName, tone })
      });
      const data = await res.json();
      setStory(data.story);
      setTimeout(onClose, 14000);
    }
    fetchStory();
  }, [objectName, tone]);

  const copyToClipboard = () => navigator.clipboard.writeText(story);
  const exportPNG = () => alert("Export PNG placeholder");

  return (
    <div style={{
      position: "absolute", top: 100, left: 100, background: "#fff", padding: 20, borderRadius: 10, boxShadow: "0 0 10px #000"
    }}>
      <h3>{objectName}</h3>
      <p>{story}</p>
      <button onClick={copyToClipboard}>Copy</button>
      <button onClick={exportPNG}>Export PNG</button>
    </div>
  );
}
