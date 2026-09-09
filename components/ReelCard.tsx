"use client";

import { useEffect, useRef, useState } from "react";

export default function ReelCard({
  reel,
  landscape = false,
  className = "",
}: {
  reel: {
    src: string;
    title: string;
    category: string;
  };
  landscape?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pause when video leaves the screen.
  // Landscape video plays automatically while visible.
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (landscape) {
            video.play().catch(() => {});
          }
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [landscape]);

  // Force browser to decode an initial frame.
  function handleLoadedMetadata() {
    const video = videoRef.current;

    if (!video || landscape) return;

    if (video.duration > 0) {
      try {
        video.currentTime = 0.05;
      } catch {
        // Browser can ignore this if seeking isn't ready yet.
      }
    }
  }

  async function toggleVideo() {
    if (landscape) return;

    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        setLoading(true);

        await video.play();

        setPlaying(true);
      } catch {
        setPlaying(false);
      } finally {
        setLoading(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <article className={`group ${className}`}>
      <button
        type="button"
        onClick={toggleVideo}
        className="
          relative
          block
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-white/5
          bg-[#080808]
          text-left
        "
      >
        <div
          className={`
            relative
            w-full
            overflow-hidden
            bg-[#080808]
            ${landscape ? "aspect-video" : "aspect-[9/16]"}
          `}
        >
          <video
            ref={videoRef}
            src={reel.src}
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedMetadata={handleLoadedMetadata}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="
              h-full
              w-full
              object-cover
            "
          />

          {/* DARK GRADIENT */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-transparent
              to-black/5
            "
          />

          {/* PLAY BUTTON — ONLY SHOW WHEN PAUSED */}
          {!landscape && !playing && (
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                flex
                h-12
                w-12
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/25
                bg-black/25
                text-white
                backdrop-blur-sm
                transition
                duration-300
              "
            >
              {loading ? (
                <span className="text-[7px] uppercase tracking-[0.12em] text-white/70">
                  Wait
                </span>
              ) : (
                <span className="ml-0.5 text-sm">▶</span>
              )}
            </div>
          )}

          {/* VIDEO INFO */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              p-4
              md:p-5
            "
          >
            <h3 className="text-sm font-medium text-white md:text-base">
              {reel.title}
            </h3>

            <p className="mt-1 text-[8px] uppercase tracking-[0.18em] text-zinc-400">
              {reel.category}
            </p>
          </div>
        </div>
      </button>
    </article>
  );
}