import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PROJECT DATA
   Projects 01–06 = single image + live URL
   Project 07 = multiple images + slider
   Project 08 = single image + Figma URL
   Projects 09–10 = videos
========================================================= */

const projects = [
  {
    number: "01",
    title: " E-Commerce Store — WordPress",
    description:
     " Designed and developed a modern, responsive WordPress e-commerce website for a shoe brand, featuring product listings, categories, shopping cart, checkout, and user-friendly navigation.",
    image: "/images/clothing.png",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://live-webla.pantheonsite.io/",
  },

  {
    number: "02",
    title: "Travel Bag E-Commerce Store — WordPress",
    description:
      " Built a responsive WordPress e-commerce website for a travel bag brand, showcasing travel backpacks, luggage, and accessories with product categories, cart, checkout, and a clean shopping experience.",
      image: "/images/bag.png",
    stack: [
      "React",
"Node.js" , "Express",
"MongoDB",
"AWS S3" ," CloudFront"
    ],
    liveUrl: "https://live-intellio.pantheonsite.io/",
  },

  

  {
    number: "04",
    title: "Evalica — Intelligent Paper Checker System",
    description:
      "Evalica is an intelligent AI-powered assessment platform built to simplify and modernize the evaluation of handwritten answer sheets. It combines OCR technology with advanced AI to digitize student responses, evaluate answers efficiently, generate meaningful feedback, and provide teachers with actionable insights into student performance.",
    image: "/images/project1.png",
    stack: ["Next.js",
      "Node.js",
      "Supabase",
      "Azure Vision API",
      "Gemini API",],
    liveUrl: "https://paper-checker-woad.vercel.app/login",
  },

  {
    number: "05",
    title: "QuizCloud",
    description:
      "A modern quiz platform designed to provide an engaging and intuitive experience for creating, managing, and completing online quizzes.",
    image: "/images/quizcloud.png",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://quiz-cloud-app-lxgl.vercel.app/",
  },

  {
    number: "06",
    title: "CreatorHub AI",
    description:
      "An AI-powered platform designed to help creators streamline content workflows, generate ideas, and improve productivity through intelligent automation.",
    image: "/images/creatorhubs.png",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "https://creatorhub-ai-frontend.vercel.app/",
  },

  /* =====================================================
     PROJECT 07 — MULTIPLE IMAGES
  ===================================================== */

  {
    number: "07",
    title: "Inventory Management System",
    description:
      "A modern inventory management application designed to simplify product tracking, stock management, and business operations through a clean and responsive interface.",
    images: [
      "/images/project3.png",
      "/images/inventory1.png",
      "/images/inventory2.png",
      "/images/inventory3.png",
      "/images/inventory4.png",
    ],
    stack: ["React", "Express", "MySQL"],
  },

  /* =====================================================
     PROJECT 08 — FIGMA DESIGN
  ===================================================== */

  {
    number: "08",
    title: "Figma Designs",
    description:
      "A collection of modern interface designs created with a strong focus on usability, visual hierarchy, responsive layouts, and clean user experiences.",
    image: "/images/foodapp.png",
    stack: ["Figma", "UI/UX Design", "Prototyping"],
    liveUrl:
      "https://www.figma.com/design/oDS1eGkcaTvepoQw5vnWmF/Untitled?node-id=0-1&p=f",
  },

  /* =====================================================
     PROJECT 09 — VIDEO
  ===================================================== */

  
];

/* =========================================================
   CORNER BRACKETS
========================================================= */

const CornerBrackets = () => (
  <>
    <span className="pointer-events-none absolute -top-px -left-px h-6 w-6 border-t-2 border-l-2 border-[#FF5C28]/70 opacity-0 corner-bracket transition-opacity duration-500" />

    <span className="pointer-events-none absolute -top-px -right-px h-6 w-6 border-t-2 border-r-2 border-[#FF5C28]/70 opacity-0 corner-bracket transition-opacity duration-500" />

    <span className="pointer-events-none absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-[#FF5C28]/70 opacity-0 corner-bracket transition-opacity duration-500" />

    <span className="pointer-events-none absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-[#FF5C28]/70 opacity-0 corner-bracket transition-opacity duration-500" />
  </>
);

/* =========================================================
   MULTI IMAGE SLIDER
========================================================= */

const ProjectImageSlider = ({ images, title }) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-[#0E1219] flex items-center justify-center">
        <p className="font-mono text-xs uppercase tracking-widest text-[#888D98]">
          No images available
        </p>

        <CornerBrackets />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative overflow-hidden border border-white/10 bg-[#0E1219]">
      <div
        className="project-image-mask relative aspect-[16/9] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <img
          key={images[currentImage]}
          src={images[currentImage]}
          alt={`${title} screenshot ${currentImage + 1}`}
          className="absolute inset-0 w-full h-full object-contain object-center p-4 md:p-8 animate-fade-in"
        />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0B0E14]/30 via-transparent to-transparent" />

        <div className="absolute top-4 right-4 z-30 px-3 py-1.5 rounded-full border border-white/10 bg-[#0B0E14]/80 backdrop-blur-md font-mono text-[10px] tracking-widest text-[#B7B9BF]">
          {String(currentImage + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        <button
          type="button"
          onClick={previousImage}
          aria-label="Previous project image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/20 bg-[#0B0E14]/80 backdrop-blur-md text-white flex items-center justify-center text-lg hover:border-[#FF5C28] hover:text-[#FF5C28] hover:scale-105 transition-all duration-300"
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextImage}
          aria-label="Next project image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-white/20 bg-[#0B0E14]/80 backdrop-blur-md text-white flex items-center justify-center text-lg hover:border-[#FF5C28] hover:text-[#FF5C28] hover:scale-105 transition-all duration-300"
        >
          →
        </button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 bg-[#0B0E14]/75 backdrop-blur-md">
          {images.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentImage(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImage === index
                  ? "w-7 bg-[#FF5C28]"
                  : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <CornerBrackets />
    </div>
  );
};

/* =========================================================
   SINGLE PROJECT IMAGE
========================================================= */

const SingleProjectImage = ({ project }) => {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block"
      aria-label={`View ${project.title} live project`}
    >
      <div className="relative overflow-hidden border border-white/10 bg-[#0E1219]">
        <div
          className="project-image-mask relative aspect-[16/9] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <img
            src={project.image}
            alt={`${project.title} project`}
            className="absolute inset-0 w-full h-full object-contain object-center p-4 md:p-8 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-[#0B0E14]/0 group-hover:bg-[#0B0E14]/50 transition-all duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
              <span className="inline-flex items-center gap-3 border border-[#FF5C28] bg-[#0B0E14]/80 backdrop-blur-sm text-[#EDEEF0] px-6 py-3 font-mono text-xs tracking-widest uppercase">
                View Live Project
                <span className="text-[#FF5C28]">↗</span>
              </span>
            </div>
          </div>
        </div>

        <CornerBrackets />
      </div>
    </a>
  );
};

/* =========================================================
   PROJECT VIDEO
   Used ONLY for projects 09–10
========================================================= */

const ProjectVideo = ({ project }) => {
  return (
    <div className="relative overflow-hidden border border-white/10 bg-[#0E1219]">
      <div
        className="project-image-mask relative aspect-[16/9] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* VIDEO */}

       <div className="relative aspect-[16/9] overflow-hidden bg-black">
  <video
    src={project.video}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>

        {/* DARK GRADIENT */}

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0B0E14]/40 via-transparent to-transparent" />

        {/* VIDEO LABEL */}

        <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full border border-white/10 bg-[#0B0E14]/80 backdrop-blur-md font-mono text-[10px] tracking-widest text-[#B7B9BF]">
          PROJECT VIDEO
        </div>
      </div>

      <CornerBrackets />
    </div>
  );
};

/* =========================================================
   MAIN SHOWCASE
========================================================= */

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      /* Section fade in */

      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          }
        );
      }

      /* Project animations */

      cards.forEach((card) => {
        const image = card.querySelector(".project-image-mask");
        const brackets = card.querySelectorAll(".corner-bracket");
        const header = card.querySelector(".datasheet-header");

        /*
          Prevent GSAP from trying to animate missing elements.
          This fixes:
          GSAP target null not found
          GSAP target "" not found
        */

        if (!card || !image || !header) {
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          header,
          {
            opacity: 0,
            y: 16,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          }
        )
          .fromTo(
            card,
            {
              y: 60,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
            },
            "<"
          )
          .fromTo(
            image,
            {
              clipPath: "inset(0 0 100% 0)",
            },
            {
              clipPath: "inset(0 0 0% 0)",
              duration: 1,
              ease: "power4.out",
            },
            "-=0.6"
          )
          .to(
            brackets,
            {
              opacity: 1,
              duration: 0.4,
              stagger: 0.05,
            },
            "-=0.4"
          );
      });
    },
    {
      scope: sectionRef,
  });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full bg-[#0B0E14] text-[#EDEEF0] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-white/10 pb-10">
          <div>
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#FF5C28] mb-4">
              /// Selected Work
            </p>

            <h2 className="font-[Space_Grotesk,sans-serif] text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05]">
              Projects that
              <br />
              <span className="text-[#EDEEF0]/35">
                deliver impact.
              </span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-[#888D98] text-base leading-relaxed">
              A selection of digital products, business websites,
              AI-powered applications, and full-stack solutions built to
              solve real-world problems.
            </p>

            <p className="mt-4 font-mono text-xs text-[#888D98]/70 tracking-wide">
              {String(projects.length).padStart(2, "0")} ENTRIES · SORTED BY
              RECENT
            </p>
          </div>
        </div>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {

            const hasMultipleImages =
              Array.isArray(project.images) &&
              project.images.length > 0;

            const hasSingleImage = Boolean(project.image);

            const hasVideo = Boolean(project.video);

            const hasLiveUrl = Boolean(project.liveUrl);

            return (
              <article
                key={project.number}
                className="project-card group"
              >

                {/* =================================================
                    DATASHEET HEADER
                ================================================= */}

                <div className="datasheet-header flex items-center justify-between gap-4 mb-4 font-mono text-xs md:text-sm tracking-wide">

                  <div className="flex items-center gap-3 text-[#888D98]">

                    <span className="text-[#FF5C28]">
                      PROJECT — {project.number}
                    </span>

                    <span className="hidden sm:inline text-white/15">
                      /
                    </span>

                    <span className="hidden sm:flex items-center gap-1.5">

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          hasLiveUrl
                            ? "bg-[#3DDC84] animate-pulse"
                            : hasVideo
                            ? "bg-[#FF5C28] animate-pulse"
                            : "bg-[#FF5C28]"
                        }`}
                      />

                      {hasLiveUrl
                        ? "LIVE"
                        : hasVideo
                        ? "VIDEO"
                        : "PROJECT"}
                    </span>

                  </div>

                  {/* RIGHT SIDE */}

                  {hasLiveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#888D98] hover:text-[#FF5C28] transition-colors"
                    >
                      [ VIEW SPEC ↗ ]
                    </a>
                  ) : (
                    <span className="text-[#888D98]">
                      [
                      {" "}
                      {hasMultipleImages
                        ? `${project.images.length} IMAGES`
                        : hasVideo
                        ? "VIDEO"
                        : "PROJECT"}
                      {" "}
                      ]
                    </span>
                  )}

                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3 className="font-[Space_Grotesk,sans-serif] text-3xl md:text-5xl font-medium tracking-tight mb-7">
                  {project.title}
                </h3>

                {/* =================================================
                    MEDIA AREA

                    01–06 = Single image
                    07 = Image slider
                    08 = Single image
                    09–10 = Video
                ================================================= */}

                {hasVideo ? (
                  <ProjectVideo project={project} />
                ) : hasMultipleImages ? (
                  <ProjectImageSlider
                    images={project.images}
                    title={project.title}
                  />
                ) : hasSingleImage ? (
                  <SingleProjectImage project={project} />
                ) : (
                  <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-[#0E1219] flex items-center justify-center">
                    <p className="font-mono text-xs uppercase tracking-widest text-[#888D98]">
                      No media available
                    </p>

                    <CornerBrackets />
                  </div>
                )}

                {/* =================================================
                    PROJECT INFORMATION
                ================================================= */}

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 mt-9">

                  {/* DESCRIPTION */}

                  <p className="text-[#B7B9BF] text-base md:text-lg leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  {/* STACK */}

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#888D98] mb-4">
                      Stack
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {project.stack.map((technology) => (
                        <span
                          key={technology}
                          className="inline-flex items-center gap-1.5 border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-[#B7B9BF]"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#FF5C28]/70" />

                          {technology}
                        </span>
                      ))}

                    </div>
                  </div>

                </div>

                {/* =================================================
                    DIVIDER
                ================================================= */}

                {index !== projects.length - 1 && (
                  <div className="mt-20 md:mt-32 h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent" />
                )}

              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;