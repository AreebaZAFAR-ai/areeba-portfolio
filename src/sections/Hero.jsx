import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      {/* Main Layout */}
      <div className="hero-layout grid lg:grid-cols-2 grid-cols-1 items-center gap-10 relative z-20 flex-1 py-24 lg:py-32">

        {/* LEFT SIDE */}
        <header className="flex flex-col justify-center md:px-20 px-5">
          <div className="flex flex-col gap-6">

            {/* Heading */}
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            {/* Description */}
            <p className="text-white-50 md:text-xl text-base leading-relaxed">
              Hi, I'm Areeba — a developer building clean, scalable, and
              production-ready solutions.
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start mt-2">
              <Button
                text="See My Work"
                className="md:w-80 md:h-16 w-60 h-12"
                id="btn-work"
              />
            </div>

          </div>
        </header>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center justify-center gap-6 px-5">

          {/* Profile Image */}
          <img
            src="/images/innovative.jpeg"
            alt="Laiba"
            className="w-[280px] md:w-[360px] rounded-3xl shadow-2xl object-cover border border-white/10"
          />

          {/* Achievement Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-xl shadow-xl">
            <h3 className="text-white text-2xl font-semibold mb-4">
              Innovative Pakistan 2026
            </h3>
            <p className="text-white-50 text-sm md:text-base leading-relaxed">
              Proud to share that our project, PsycheCare, was selected among the Top 50 Projects at Innovative Pakistan 2026 after a rigorous evaluation process by industry experts, academic leaders, and technical evaluators.
Honored to showcase our innovation on one of Pakistan’s largest national platforms for technology, research, and entrepreneurship.

            </p>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="relative z-20 w-full pb-16">
        <AnimatedCounter />
      </div>

    </section>
  );
};

export default Hero;