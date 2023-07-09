export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "rohanop",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },

    {
      title: "About",
      href: "#about",
    },

    {
      title: "Projects",
      href: "#projects",
    },

    {
      title: "Contact",
      href: "#contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/_rohankamble",
    github: "https://github.com/Rohan3011",
    linkedin: "https://ui.shadcn.com",
  },
  contact: {
    email: "rohankamble3011@gmail.com",
    phone: "+91 8169241264",
    resume: "/assets/resume.pdf",
  },
}
