"use client";

import Image from "next/image";
import { useState } from "react";
import { photos } from "@/data/photos";

type Photo = (typeof photos)[number];

type ImageShape = "portrait" | "landscape" | "square";

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const [imageShapes, setImageShapes] = useState<
    Record<string, ImageShape>
  >({});

  function detectShape(
    src: string,
    width: number,
    height: number
  ) {
    const ratio = width / height;

    let shape: ImageShape;

    if (ratio > 1.2) {
      shape = "landscape";
    } else if (ratio < 0.85) {
      shape = "portrait";
    } else {
      shape = "square";
    }

    setImageShapes((current) => ({
      ...current,
      [src]: shape,
    }));
  }

  function getLayout(shape?: ImageShape) {
  switch (shape) {
    case "landscape":
      return `
        aspect-[3/2]
        lg:aspect-auto
        lg:col-span-8
        lg:row-span-7
      `;

    case "portrait":
      return `
        aspect-[4/5]
        lg:aspect-auto
        lg:col-span-4
        lg:row-span-14
      `;

    case "square":
      return `
        aspect-square
        lg:aspect-auto
        lg:col-span-4
        lg:row-span-7
      `;

    default:
      return `
        aspect-[4/5]
        lg:aspect-auto
        lg:col-span-4
        lg:row-span-7
      `;
  }
}
  return (
    <>
      {/* EDITORIAL PHOTO GRID */}

      <div
  className="
    mx-auto
    grid
    max-w-[1160px]
    grid-cols-1
    gap-3
    sm:grid-cols-2
    lg:grid-cols-12
    lg:auto-rows-[40px]
    lg:grid-flow-dense
  "
>
        {photos.map((photo) => {
          const shape = imageShapes[photo.src];

          return (
            <button
              key={photo.src}
              onClick={() => setSelectedPhoto(photo)}
              className={`
                group
                relative
                overflow-hidden
                rounded-xl
                bg-[#101010]
                text-left
                ${getLayout(shape)}
              `}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                quality={95}
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  66vw
                "
                onLoad={(event) => {
                  detectShape(
                    photo.src,
                    event.currentTarget.naturalWidth,
                    event.currentTarget.naturalHeight
                  );
                }}
                className="
                  object-cover
                  transition
                  duration-700
                  ease-out
                  group-hover:scale-[1.015]
                "
              />

              {/* subtle caption gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/65
                  via-transparent
                  to-transparent
                "
              />

              {/* caption */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  flex
                  items-end
                  justify-between
                  p-4
                  md:p-5
                "
              >
                <div>
                  <h3
                    className="
                      text-sm
                      font-medium
                      tracking-[-0.025em]
                      text-white
                      md:text-base
                    "
                  >
                    {photo.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-zinc-400
                    "
                  >
                    {photo.category}
                  </p>
                </div>

                <span
                  className="
                    translate-y-1
                    text-base
                    text-white/50
                    opacity-60
                    transition
                    duration-300
                    group-hover:translate-y-0
                    group-hover:text-white
                    group-hover:opacity-100
                  "
                >
                  ↗
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {selectedPhoto && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/95
            p-4
            backdrop-blur-md
          "
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="
              absolute
              right-6
              top-6
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/40
              text-2xl
              text-white
              transition
              hover:bg-white
              hover:text-black
            "
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="
              flex
              max-h-[90vh]
              max-w-[95vw]
              flex-col
              items-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="
                max-h-[82vh]
                max-w-full
                rounded-lg
                object-contain
              "
            />

            <div className="mt-4 text-center">
              <p className="text-sm text-white">
                {selectedPhoto.title}
              </p>

              <p
                className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-zinc-500
                "
              >
                {selectedPhoto.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}