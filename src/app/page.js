"use client"

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Loading from "@/components/loading";
import introPaper from "../lotties/introduction-paper.json";
import email from "../lotties/email.json";
import windowDimensions from "../utils/windowDimensions";

const styles = {
  spacer: {
    aspectRatio: 900 / 150,
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    zIndex: -1,
  },
  layeredWaves: {
    backgroundImage: "url('/layered-waves.svg')",
  },
};

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setLoading((_) => false);
  //   }, 3000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  const horizontalScroll = useRef();
  const horizontalScrollPageStart = useRef();
  const finalPage = useRef();

  const dimensions = windowDimensions();
  gsap.registerPlugin(ScrollTrigger);
  function getScrollAmount() {
    return -(dimensions.width);
  }

  useGSAP(() => {
    gsap.to(horizontalScroll.current, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: horizontalScroll.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        scrub: 0.667,
        snap: {
          snapTo: 1,
          duration: 0.667,
          ease: "power2.inOut",
        },
        pin: true,
      },
    });
  }, { dependencies: [dimensions.width], revertOnUpdate: true });

  useGSAP(() => {
    gsap.from(".animated-horizontal-start", {
      opacity: 0,
      y: -200,
      duration: 0.667,
      stagger: {
        each: 0.333,
      },
      scrollTrigger: {
        trigger: ".animated-horizontal-start",
        start: 'top 67%',
      },
    });
  }, { scope: horizontalScrollPageStart.current });

  useGSAP(() => {
    gsap.from(".animated-final", {
      opacity: 0,
      y: -200,
      duration: 0.667,
      stagger: {
        each: 0.333,
      },
      scrollTrigger: {
        trigger: ".animated-final",
        start: 'top 67%',
      },
    });
  }, { scope: finalPage.current });

  return (
    <main>
      {/* {loading && <Loading />} */}
      <section className="h-screen bg-cafe_noir *:text-white flex flex-col items-center justify-center">
        <h1 className="text-6xl">
          All the <span className="text-caramel">Turkish</span> grammar put to <span className="text-caramel">one place</span>.
        </h1>
        <br />
        <p className="text-3xl">
          You can explore or study the Turkish language through our comprehensively and meticulously designed topics.
        </p>
      </section>
      <section ref={horizontalScroll} className="h-screen relative flex w-[200vw]">
        <div style={{ ...styles.spacer, ...styles.layeredWaves }} />
        <div className="w-screen px-8 flex flex-col md:flex-row justify-evenly items-center" ref={horizontalScrollPageStart}>
          <div className="basis-1/2 flex flex-col justify-center items-start animated-horizontal-start">
            <h1 className="text-6xl">Turkish language made easy</h1><br /><p className="text-xl">Unlock the beauty and depth of the Turkish language with our user-friendly Turkish grammar guide. Whether you're a beginner or an advanced learner, this resource is your key to understanding the structure, rules, and nuances of Turkish. Dive into the essentials and elevate your Turkish language skills.</p>
          </div>
          <div className="animated-horizontal-start"><Lottie className="w-[320px]" animationData={introPaper} loop={true} /></div>
        </div>
        <div className="w-screen px-8 flex flex-col-reverse md:flex-row justify-evenly items-center">
          <div><Lottie className="w-[320px]" animationData={introPaper} loop={true} /></div>
          <div className="basis-1/2 flex flex-col justify-center items-start">
            <h1 className="text-6xl">Grouped and thorough guides</h1><br /><p className="text-xl">Enhance your ability to construct Turkish sentences. Explore the rules of syntax, phonetics, and subtle differences in meanings. Gain insights into the Turkish sentence & word structure and the nuances of expressing thoughts and ideas.</p>
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-col md:flex-row md:justify-evenly items-center px-8" ref={finalPage}>
        <div className="basis-1/2 flex flex-col justify-center items-start animated-final"><h1 className="text-6xl">Your feedback matters</h1><br /><p className="text-xl">We care about Turkish catalogue to be configured the ways that are most favourable for learners. Therefore, you can submit your suggestions and reports at anytime; we would love to review them to improve our website.</p></div>
        <div className="animated-final"><Lottie className="w-[320px]" animationData={email} loop={true} /></div>
      </section>
    </main>
  );
}
