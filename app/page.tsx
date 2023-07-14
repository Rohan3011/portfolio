"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { ProjectList } from "@/config/project"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import ProjectCard from "@/components/project-card"
import SkillList from "@/components/skill-list"

export default function IndexPage() {
  return (
    <>
      <section
        style={{
          height: "calc(100vh - 65px)",
        }}
        className="container box-border space-y-6 pb-8 pt-6 md:pt-10 lg:py-32"
      >
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            ROHAN KAMBLE
          </h1>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            FULLSTACK ENGINEER
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Passionate Software Engineer Specializing in Web Development and
            React.js
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Let’s Connect
          </Link>

          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Github
          </Link>
        </div>
      </section>
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{
        height: "calc(100vh - 65px)",
      }}
      className="container space-y-6 py-8 md:py-12 lg:py-32"
    >
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
        About
      </h1>
      <div className="flex flex-col justify-center gap-4 align-baseline md:flex-row md:gap-8">
        <article className="space-y-4 p-4 text-lg md:w-1/2 md:p-6 md:text-xl lg:text-2xl">
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
        <aside className="flex flex-col gap-4 md:w-1/3">
          <SkillList />
        </aside>
      </div>
    </motion.section>
  )
}

function ProjectSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{
        height: "calc(100vh - 65px)",
      }}
      className="container relative z-10 grid items-center gap-6 pb-8 pt-20  md:py-10"
    >
      <motion.h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
        Projects
      </motion.h1>
      <div className="flex flex-col items-baseline justify-center gap-4 md:flex-row md:gap-8">
        {ProjectList.map((project, id) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </motion.section>
  )
}

function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{
        height: "calc(100vh - 65px)",
      }}
      className="container relative z-10 grid items-center gap-6 pb-8 pt-20  md:py-10"
    >
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
        Get in Touch
      </h1>
      <div className="flex h-full flex-col items-baseline justify-center gap-4 md:flex-row md:gap-8">
        <div className="space-y-4 p-4 text-lg md:w-1/2 md:p-6 md:text-xl lg:text-2xl">
          <p className="">
            If you&apos;re looking for a highly motivated and skilled software
            engineer who is passionate about delivering high-quality solutions,
            I would be thrilled to contribute my expertise to your team.
          </p>
        </div>
        <ul className=" flex flex-1 flex-col items-center space-x-1">
          <Link
            title="Github"
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "lg",
                variant: "link",
              })}
            >
              <span className="text-2xl">GitHub</span>
              <Icons.externalLink className="h-5 w-5 group-hover:animate-bounce" />
            </div>
          </Link>
          <Link title="Email" href={`mailto : ${siteConfig.contact.email}`}>
            <div
              className={buttonVariants({
                size: "sm",
                variant: "link",
              })}
            >
              <span className="text-2xl">Email</span>
              <Icons.externalLink className="h-5 w-5" />
            </div>
          </Link>
          <Link
            title="LinkedIn"
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "link",
              })}
            >
              <span className="text-2xl">LinkedIn</span>
              <Icons.externalLink className="h-5 w-5" />
            </div>
          </Link>
          <Link
            title="Twitter"
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "link",
              })}
            >
              <span className="text-2xl">Twitter</span>
              <Icons.externalLink className="h-5 w-5" />
            </div>
          </Link>
        </ul>
      </div>
    </motion.section>
  )
}
