"use client";

import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
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
  }, []);

  return (
    <article className={`group ${className}`}>
      <div
        className={`
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/5
          bg-black
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
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            ease-out
            group-hover:scale-[1.015]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/55
            via-transparent
            to-transparent
          "
        />

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
    </article>
  );
}