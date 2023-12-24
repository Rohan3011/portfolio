"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Icons } from "@/components/icons"
import SkillList from "@/components/skill-list"

gsap.registerPlugin(ScrollTrigger)

const AboutSection: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!boxRef.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: true,
      },
    })

    tl.to(boxRef.current, {
      x: 800,
    })
  }, [])

  return (
    <section id="about" className="container space-y-6 py-8 md:py-12 lg:py-32 ">
      <div ref={boxRef} className="box  h-20 w-20">
        <Icons.logo className="h-full w-full" />
      </div>
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
        About
      </h1>
      <div className="flex flex-col items-center gap-4 align-baseline md:flex-row md:gap-8">
        <article className="flex-1 space-y-4  text-lg  md:text-xl lg:text-2xl">
          <p>
            Hello, I&apos;m Rohan Kamble, a passionate and driven software
            engineer with experience in developing web applications. Proficient
            in languages like C/C++, JavaScript, TypeScript, and Go, I
            specialize in frameworks such as React, Next.js, and Node.js.
          </p>
          <p>
            With a strong foundation in computer science, I have contributed to
            revenue growth and improved efficiency through projects like
            integrating subscription functionality and developing user-friendly
            dashboards. I thrive on challenges and continuously seek
            opportunities to expand my knowledge and skills.
          </p>
        </article>
        <aside className="flex flex-1 flex-col gap-4">
          <SkillList />
        </aside>
      </div>
    </section>
  )
}

export default AboutSection
