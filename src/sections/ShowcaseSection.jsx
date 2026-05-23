import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  // Project URLs - Update these with your actual project links
  const PROJECT_URLS = {
    ryde: "https://your-ryde-project-url.com",
    library: "https://your-library-project-url.com",
    ycDirectory: "https://your-yc-directory-project-url.com",
  };

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase mb-0">
      <div className="w-full">
        <div className="showcaselayout ">
          <a
            href={'https://paper-checker-woad.vercel.app/'}
            target="_blank"
            rel="noopener noreferrer"
            ref={rydeRef}
            className="first-project-wrapper cursor-pointer hover:opacity-80 transition-opacity mb-0"
          >
            <div className="image-wrapper ">
              <img src="/images/projects1.png" alt="Evalica Project mb-0" />
            </div>
            <div className="text-content">
              <h2>
                "Evalica- An intelligent tool for evaluating papers and giving feedback"
              </h2>
              <p className="text-white-50 md:text-xl ">
                Built using Next.js, Node.js, Expo, Supabase, Azure Vision API, and Gemini API for a full-stack AI-powered evaluation system.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            <a
              href={'https://quiz-cloud-app-lxgl.vercel.app/'}
              target="_blank"
              rel="noopener noreferrer"
              ref={libraryRef}
              className="project cursor-pointer hover:opacity-80 transition-opacity inline-block w-full"
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/areebazafar.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>A production-level cloud-based quiz system for automated assessment and real-time analytics</h2>
            </a>

            <a
              href={'https://github.com/Laiba-Zafar7/inventory-dashboard'}
              target="_blank"
              rel="noopener noreferrer"
              ref={ycDirectoryRef}
              className="project cursor-pointer hover:opacity-80 transition-opacity inline-block w-full"
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>A full-stack inventory management system with real-time CRUD, analytics, and scalable architecture</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
