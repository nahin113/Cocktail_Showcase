"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars,words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      delay: 1,
      stagger: 0.06,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <Image
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
          width={130}
          height={130}
        />
        <Image
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
          width={130}
          height={130}
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool . Crisp . Classic</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair and timeless recipes — designed to delight your
                senses.
              </p>
              <Link href="#cocktails">View Cocktails</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
