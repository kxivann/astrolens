"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ContactModal({
  buttonText = "Start a Project",
  className = "",
}: {
  buttonText?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function closeModal() {
    setOpen(false);
    setStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xbgjqoqb",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const modal =
    mounted && open
      ? createPortal(
          <div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/85
              px-4
            "
            onClick={closeModal}
          >
            <div
              className="
                relative
                z-[10000]
                w-full
                max-w-xl
                overflow-hidden
                rounded-2xl
                border
                border-white/15
                bg-[#080808]
                p-6
                text-white
                shadow-[0_30px_100px_rgba(0,0,0,0.9)]
                md:p-8
              "
              onClick={(event) => event.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                type="button"
                onClick={closeModal}
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  text-2xl
                  text-zinc-500
                  transition
                  hover:text-white
                "
                aria-label="Close contact form"
              >
                ×
              </button>

              {/* HEADER */}
              <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-[#ff4f9d]">
                Astrolens / Enquiries
              </p>

              <h2 className="max-w-md text-4xl leading-[0.95] tracking-[-0.05em] md:text-5xl">
                Let&apos;s make something real.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-zinc-500">
                Tell me what you&apos;re working on and what you need.
              </p>

              {/* SUCCESS STATE */}
              {status === "success" ? (
                <div className="mt-10">
                  <p className="text-xl font-medium">
                    Enquiry sent.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    Thanks for getting in touch. I&apos;ll get back to you as
                    soon as I can.
                  </p>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="
                      mt-8
                      rounded-full
                      bg-white
                      px-6
                      py-4
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-black
                      transition
                      hover:bg-[#ff4f9d]
                      hover:text-white
                    "
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* FORM */
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                      Name
                    </label>

                    <input
                      required
                      name="name"
                      type="text"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-white/10
                        bg-[#101010]
                        px-4
                        py-3
                        text-sm
                        text-white
                        outline-none
                        transition
                        focus:border-white/30
                      "
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                      Email
                    </label>

                    <input
                      required
                      name="email"
                      type="email"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-white/10
                        bg-[#101010]
                        px-4
                        py-3
                        text-sm
                        text-white
                        outline-none
                        transition
                        focus:border-white/30
                      "
                    />
                  </div>

                  {/* PROJECT TYPE */}
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                      Project Type
                    </label>

                    <select
                      name="projectType"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-white/10
                        bg-[#101010]
                        px-4
                        py-3
                        text-sm
                        text-white
                        outline-none
                      "
                    >
                      <option>Photography</option>
                      <option>Videography</option>
                      <option>Commercial Campaign</option>
                      <option>Music / Artist Visuals</option>
                      <option>Event</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                      Tell me about the project
                    </label>

                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="
                        w-full
                        resize-none
                        rounded-lg
                        border
                        border-white/10
                        bg-[#101010]
                        px-4
                        py-3
                        text-sm
                        text-white
                        outline-none
                        transition
                        focus:border-white/30
                      "
                    />
                  </div>

                  {/* SEND */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="
                      mt-2
                      w-full
                      rounded-full
                      bg-white
                      px-6
                      py-4
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-black
                      transition
                      hover:bg-[#ff4f9d]
                      hover:text-white
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    {status === "sending"
                      ? "Sending..."
                      : "Send Enquiry ↗"}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-sm text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`
          uppercase
          tracking-[0.15em]
          text-white
          transition
          hover:opacity-60
          ${className}
        `}
      >
        {buttonText}
      </button>

      {modal}
    </>
  );
}