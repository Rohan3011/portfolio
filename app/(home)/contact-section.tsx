import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function ContactSection() {
  return (
    <section
      id="contact"
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
    </section>
  )
}
