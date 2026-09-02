import Image from "next/image";
import { photos } from "@/data/photos";
import PhotoGallery from "@/components/PhotoGallery";
import { projects } from "@/data/projects";


const films = [
  {
    title: "Brand Film",
    type: "Commercial / 2026",
    background: "from-[#07161b] to-[#355769]",
  },
  {
    title: "Artist Visual",
    type: "Music / 2026",
    background: "from-[#2c111e] to-[#5e283e]",
  },
  {
    title: "Cinematic Short",
    type: "Personal / 2026",
    background: "from-[#151515] to-[#4b3926]",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#070707] text-[#f4f1ea]">

      {/* NAV */}
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-6 mix-blend-difference md:px-12 lg:px-16">
        <a
          href="#"
          className="text-sm font-bold tracking-[0.14em] text-white"
        >
          ASTROLENS®
        </a>

        <div className="flex items-center gap-7 text-[11px] uppercase tracking-[0.15em] text-white">
          <a className="hidden md:block hover:opacity-60" href="#work">
            Work
          </a>

          <a className="hidden md:block hover:opacity-60" href="#film">
            Film
          </a>

          <a className="hover:opacity-60" href="#contact">
            Start a Project
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-10 pt-32 md:px-12 md:pb-14 lg:px-16">

        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,.92),rgba(0,0,0,.06)),linear-gradient(120deg,#0b1120,#07191d_55%,#24111b)]" />

        <div className="pointer-events-none absolute -right-[10%] top-[5%] h-[50vw] w-[50vw] rounded-full bg-[#ff4f9d]/10 blur-[100px]" />

        <div className="relative z-10 w-full">

          <p className="mb-5 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
            Film / Photography / London
          </p>

          <h1 className="max-w-6xl text-[17vw] font-semibold leading-[0.78] tracking-[-0.075em] sm:text-[14vw] lg:text-[9rem]">
            STORIES
            <br />
            THROUGH
            <br />
            A LENS.
          </h1>

          <div className="mt-10 flex items-end justify-between">

            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              Astrolens is the visual work of Keivan — cinematic photography
              and film for people, brands and stories worth remembering.
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:block">
              Scroll to explore ↓
            </p>

          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <section className="bg-[#0b0b0b] px-5 py-24 md:px-12 lg:px-16">

        <SectionHeader
          index="01 / SHOWREEL"
          title="Motion before explanation."
        />

        <div
  className="
    group
    relative
    mx-auto
    max-w-[1280px]
    overflow-hidden
    rounded-2xl
    border
    border-white/5
    bg-black
  "
>
  <video
    src="/media/films/showreel.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="
      aspect-video
      w-full
      object-cover
    "
  />

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-gradient-to-t
      from-black/35
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
      flex
      items-end
      justify-between
      p-5
      md:p-6
    "
  >
    <div>
      <p className="text-sm font-medium tracking-[-0.02em] text-white">
        Astrolens Showreel
      </p>

      <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-zinc-400">
        Film / Photography / Direction
      </p>
    </div>
  </div>
</div>

      </section>

      {/* SELECTED WORK */}

      <div className="mx-auto max-w-[1200px]">
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
    {projects.map((project) => (
      <article
        key={project.title}
        className="
          group
          relative
          aspect-[4/3]
          overflow-hidden
          rounded-2xl
          border
          border-white/5
          bg-[#111]
        "
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          quality={95}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="
            object-cover
            transition
            duration-700
            ease-out
            group-hover:scale-[1.015]
          "
        />

        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/65
          via-black/5
          to-transparent
        " />

        <div className="
          absolute
          bottom-0
          left-0
          right-0
          flex
          items-end
          justify-between
          p-5
          md:p-6
        ">
          <div>
            <h3 className="
              text-xl
              font-medium
              tracking-[-0.04em]
              md:text-2xl
            ">
              {project.title}
            </h3>

            <p className="
              mt-2
              text-[9px]
              uppercase
              tracking-[0.17em]
              text-zinc-400
            ">
              {project.type}
            </p>
          </div>

          <span className="
            text-xl
            text-zinc-300
            transition
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
          ">
            ↗
          </span>
        </div>
      </article>
    ))}
  </div>
</div>


      {/* PHOTOGRAPHY */}
<section className="px-5 py-24 md:px-12 lg:px-16">

  <SectionHeader
    index="03 / PHOTOGRAPHY"
    title="Frames from different worlds."
    description="Portraits, sport, artists, commercial projects and whatever catches my eye."
  />

  <PhotoGallery />

</section>

      {/* FILM */}
      <section id="film" className="px-5 py-24 md:px-12 lg:px-16">

        <SectionHeader
          index="04 / FILM"
          title="Things that move."
          description="Commercial films, artist visuals, short-form stories and experiments."
        />

        <div className="grid gap-8 md:grid-cols-3">

          {films.map((film) => (
            <article key={film.title} className="group cursor-pointer">

              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${film.background}`}
              >
                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 backdrop-blur-sm transition duration-300 group-hover:scale-110">
                  ▶
                </div>
              </div>

              <h3 className="mt-4 text-base font-medium">{film.title}</h3>

              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                {film.type}
              </p>

            </article>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-5 py-24 md:px-12 lg:px-16">

        <SectionHeader
          index="05 / ASTROLENS"
          title="Cinematic without pretending."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">

          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Based in London
          </p>

          <div>
            <p className="max-w-3xl text-3xl leading-[1.1] tracking-[-0.045em] md:text-5xl">
              I make visual work that sits somewhere between documentary,
              commercial imagery and cinema.
            </p>

            <p className="mt-8 max-w-md text-sm leading-7 text-zinc-500">
              Astrolens works across photography, short-form film, branded
              content, artist visuals and personal projects. The aim is simple:
              make work people remember after they&apos;ve stopped looking at
              it.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-12 md:px-12 lg:px-16">

        <div className="grid border-y border-white/10 md:grid-cols-3">

          <Service
            title="Photography"
            text="Portraits, campaigns, sport, events and visual storytelling."
          />

          <Service
            title="Film"
            text="Branded films, artist visuals, campaigns and short-form stories."
          />

          <Service
            title="Creative Direction"
            text="Concepts, visual identity, campaigns and content development."
          />

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="flex min-h-[75vh] flex-col justify-center border-t border-white/10 px-5 py-24 md:px-12 lg:px-16"
      >

        <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          Available for selected projects
        </p>

        <h2 className="max-w-6xl text-[15vw] font-semibold leading-[0.8] tracking-[-0.075em] md:text-[10vw]">
          LET&apos;S MAKE
          <br />
          SOMETHING{" "}
          <span className="text-[#ff4f9d]">
            REAL.
          </span>
        </h2>

        <div className="mt-12 flex flex-col gap-8 text-sm md:flex-row md:items-end md:justify-between">

          <p className="text-zinc-500">
            London, United Kingdom
          </p>

          <a
            href="mailto:your@email.com"
            className="w-fit border-b border-zinc-600 pb-1 transition hover:border-white"
          >
            Start a project ↗
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="flex flex-col gap-4 border-t border-white/10 px-5 py-8 text-[10px] uppercase tracking-[0.15em] text-zinc-600 md:flex-row md:justify-between md:px-12 lg:px-16">

        <p>© 2026 Astrolens</p>

        <div className="flex gap-5">
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>

      </footer>

    </main>
  );
}

function SectionHeader({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end">

      <div>
        <p className="mb-4 text-[10px] tracking-[0.18em] text-[#ff4f9d]">
          {index}
        </p>

        <h2 className="max-w-3xl text-4xl leading-[0.95] tracking-[-0.055em] md:text-6xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-sm text-sm leading-6 text-zinc-500">
          {description}
        </p>
      )}

    </div>
  );
}

function Service({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">

      <h3 className="mb-3 text-base">{title}</h3>

      <p className="max-w-xs text-sm leading-6 text-zinc-500">
        {text}
      </p>

    </div>
  );
}