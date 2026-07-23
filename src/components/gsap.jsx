"use client";
import { useGSAP } from "@gsap/react";
import { Button } from "@heroui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Open_Sans } from "next/font/google";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GSAP = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "elastic",
    });
  }, []);

  useGSAP(() => {
    gsap.from("#green-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 2,
        ease: "power1.inOut",
      }
    );
  }, []);

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });
  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      scale: 1,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      y: 50,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  }, []);

  const handlePlayPause = () => {
    console.log(timeline);
    if (timeline.paused()) {
      timeline.play();
    } else {
      timeline.pause();
    }
  };

  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 50,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      // stagger: 1,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  });

  const scrollRef = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(scrollRef.current.children);
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 150 * (boxes.indexOf(box) + 5),
          rotation: 360,
          borderRadius: "100%",
          scale: 2,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      });
    },
    { scope: scrollRef },
    []
  );

  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });
    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 1.5,
      }
    );
  }, []);

  return (
    <div className="mt-20 space-y-8">
      <h1 id="text" className="text-center text-4xl opacity-0 translate-y-10">
        Inshallah ! Allah will help me . . .
      </h1>
      <p className="mt-5 text-gray-500 para">
        I have learned today about gsap , the main are : <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code>,{" "}
        <code>gsap.animate()</code>
        <br />I will use these effectively to make cooler animations insha
        allah!
      </p>
      <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg"></div>
      <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg"></div>
      <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg"></div>
      <div className="mt-20 space-y-10">
        <Button onClick={handlePlayPause}>Play/Pause</Button>
        <div
          id="yellow-box"
          className="w-20 h-20 bg-yellow-500 rounded-lg"
        ></div>
      </div>
      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box"></div>
        </div>
      </div>
      <div className="mt-40 w-full h-screen" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box  w-20 h-20 bg-pink-500 rounded-lg"
        ></div>
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 bg-orange-500 rounded-lg"
        ></div>
      </div>
    </div>
  );
};

export default GSAP;
