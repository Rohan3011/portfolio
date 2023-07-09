import { lazy } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import SkillList from "@/components/skill-list"

const AnimatedBG = lazy(() => import("@/components/animated-bg"))

export default function IndexPage() {
  return (
    <>
      <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            ROHAN KAMBLE
          </h1>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
            FULLSTACK ENGINEER
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque at
            similique odio delectus ex atque, sapiente quia accusantium, velit
            perspiciatis distinctio aliquam repudiandae. Cum dolorum, aperiam
            deleniti ex ratione modi.
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
      <section
        id="about"
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
          About
        </h1>
        <div className="flex flex-col md:flex-row">
          <article className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            reprehenderit maxime, non illum nam impedit incidunt iure deleniti
            officiis aut repellendus, aliquid, quibusdam optio ad? Hic doloribus
            quisquam alias quis.
          </article>
          <aside className="flex flex-col gap-4">
            <SkillList />
          </aside>
        </div>
      </section>
      <section
        id="contact"
        className="container relative z-10 grid items-center gap-6 pb-8 pt-20  md:py-10"
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
          Get in Touch
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-4">
            <p>
              Intrigued by what you’ve seen? Rohan would love to hear from you,
              so don’t be shy!
            </p>
            <p>
              Whether you’ve got a burning question or a project proposal, he’s
              always ready to connect.
            </p>
            <p>
              In a world of mundane developers, Rohan’s creativity, skill, and
              passion truly set him apart. Reach out now to witness his magic
              firsthand!
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
      </section>
    </>
  )
}
