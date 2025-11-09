import React, { useRef, useState } from 'react';
import VideoCanvas from './VideoCanvas';
import FocusCard from './FocusCard';

export default function AREngine() {
  const [selected, setSelected] = useState(null);
  const [tone, setTone] = useState("Poetic");
  const [demoMode, setDemoMode] = useState(false);

  return (
    <div>
      <VideoCanvas onSelect={setSelected} demoMode={demoMode} />
      {selected && (
        <FocusCard
          objectName={selected}
          tone={tone}
          onClose={() => setSelected(null)}
        />
      )}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <button onClick={() => setTone("Poetic")}>Poetic</button>
        <button onClick={() => setTone("Playful")}>Playful</button>
        <button onClick={() => setTone("Helpful")}>Helpful</button>
        <label style={{ marginLeft: 20 }}>
          <input type="checkbox" checked={demoMode} onChange={() => setDemoMode(!demoMode)} /> Demo Snapshot Mode
        </label>
      </div>
    </div>
  );
}
