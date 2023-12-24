import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

function IntroSection() {
  return (
    <section className="container box-border space-y-6 pb-8 pt-6 md:pt-10 lg:py-32">
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

      {/* <div className="blur-lg -z-10 absolute h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500 to-red-800"></div> */}
      <div className="blur-lg -z-10 absolute  top-90 left-80  h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800"></div>
      <div className="blur-lg -z-10 absolute top-24 right-20 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-200 to-green-500"></div>
    </section>
  )
}

export default IntroSection
