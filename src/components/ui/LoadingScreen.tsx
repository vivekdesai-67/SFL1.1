import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.8s, then fully unmount after the transition ends
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`loading-screen ${fadeOut ? "loading-screen--out" : ""}`}
      aria-label="Loading Sangam Fasteners"
      role="status"
    >
      {/* Ambient glow blobs */}
      <div className="loading-blob loading-blob--blue" />
      <div className="loading-blob loading-blob--gold" />

      {/* Hourglass spinner */}
      <div className="loading-content">
        <div className="lds-hourglass" />

        {/* Brand wordmark */}
        <div className="loading-brand">
          <span className="loading-brand__name">SFL</span>
          <span className="loading-brand__tagline">Precision Engineered</span>
        </div>

        {/* Progress bar */}
        <div className="loading-progress">
          <div className="loading-progress__bar" />
        </div>
      </div>
    </div>
  );
}
