'use client';
import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted((prev) => !prev);
    if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
  };

  return (
    <div style={{ position: "relative", width: "400px", margin: "auto" }}>
      <video
        src="/images/video/most-demanded-hr-cloud-course.mp4"
        ref={videoRef}
        style={{ width: "100%", borderRadius: "1rem" }}
        autoPlay
        loop
        muted={muted}
        playsInline
      />
      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          top: 10,
          left: 0,
          right: 0,
          width: "50%",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
          margin: 'auto'
        }}
      >
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
}
