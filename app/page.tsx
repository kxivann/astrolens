import Image from "next/image";
import { photos } from "@/data/photos";
import PhotoGallery from "@/components/PhotoGallery";
import { projects } from "@/data/projects";
import { reels } from "@/data/reels";
import ContactModal from "@/components/ContactModal";
import ReelCard from "@/components/ReelCard";


const films = [
  {
    title: "",
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
          <a className="hidden md:block hover:opacity-60" href="#film">
            Film
          </a>

          <a className="hidden md:block hover:opacity-60" href="#work">
            Work
          </a>

          <ContactModal />
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
            I like Films. I like Photography. I Coded this website. 
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:block">
              Scroll to explore ↓
            </p>

          </div>
        </div>
      </section>

      {/* MOTION */}
<section
  id="film"
  className="bg-[#0b0b0b] px-5 py-24 md:px-12 lg:px-16"
>
  <SectionHeader
    index="01 / MOTION"
    title="Things that move."
  />

  <div className="mx-auto max-w-[1250px] space-y-4">

  {/* TOP ROW */}
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-center">

    {/* LEFT PORTRAIT */}
    <ReelCard
      reel={reels[0]}
      className="lg:col-span-3"
    />

    {/* TWO MIDDLE PORTRAITS */}
    <div className="grid grid-cols-2 gap-4 lg:col-span-6">
      <ReelCard reel={reels[3]} />
      <ReelCard reel={reels[4]} />
    </div>

    {/* RIGHT PORTRAIT */}
    <ReelCard
      reel={reels[2]}
      className="lg:col-span-3"
    />

  </div>


  {/* LANDSCAPE UNDERNEATH */}
  <div className="grid grid-cols-1 lg:grid-cols-12">

    <ReelCard
      reel={reels[1]}
      landscape
      className="lg:col-span-6 lg:col-start-4"
    />

  </div>

</div>

</section>

     {/* SELECTED WORK */}
<section
  id="work"
  className="px-5 py-24 md:px-12 lg:px-16"
>
  <SectionHeader
    index="02 / SELECTED WORK"
    title="What I specialise in."
    description="Commercial campaigns, artist visuals, branded content and projects created to help people and businesses stand out."
  />

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
              group-hover:scale-[1.035]
            "
          />

          {/* IMAGE OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/10
              to-transparent
              transition
              duration-500
              group-hover:from-black/65
            "
          />

          {/* PROJECT INFO */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-5
              transition
              duration-500
              group-hover:-translate-y-1
              md:p-6
            "
          >
            <h3
              className="
                text-xl
                font-medium
                tracking-[-0.04em]
                md:text-2xl
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-2
                text-[9px]
                uppercase
                tracking-[0.17em]
                text-zinc-400
              "
            >
              {project.type}
            </p>
          </div>
        </article>
      ))}

    </div>

    {/* CTA */}
    <div
      className="
        mt-10
        flex
        flex-col
        gap-5
        border-t
        border-white/10
        pt-8
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <p className="text-sm text-zinc-500">
        Have something in mind?
      </p>

      <ContactModal
        buttonText="Start a project ↗"
        className="
          w-fit
          border-b
          border-zinc-600
          pb-1
          text-sm
          normal-case
          tracking-normal
          hover:border-white
        "
      />
    </div>
  </div>
</section>

      {/* PHOTOGRAPHY */}
<section className="px-5 py-24 md:px-12 lg:px-16">

  <SectionHeader
    index="03 / PHOTOGRAPHY"
    title="Frames from different worlds."
    description="Portraits, sport, artists, commercial projects and whatever catches my eye."
  />

  <PhotoGallery />

</section>

      {/* ABOUT */}
      <section className="px-5 py-24 md:px-12 lg:px-16">

        <SectionHeader
          index="05 / BEHIND THE LENS"
          title="From idea to final frame."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">

          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Based in London
          </p>

          <div>
            <p className="max-w-3xl text-3xl leading-[1.1] tracking-[-0.045em] md:text-5xl">
              I’m a London based photographer and filmmaker creating commercial campaigns, artist visuals, sports content, portraits and branded media.

            </p>

            <p className="mt-8 max-w-md text-sm leading-7 text-zinc-500">
                I help businesses and brands turn ideas into content that gets attention. From concept and planning through to shooting, editing and final delivery, I create visuals designed to make your business look credible, memorable and easier to market helping you attract new customers and stand out online.
        
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

          <ContactModal buttonText="Start a project ↗" />

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