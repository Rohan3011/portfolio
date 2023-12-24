export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "rohanop",
  description: "Portfolio site",
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
    {
      title: "Blogs",
      href: "/blogs",
    },
  ],
  links: {
    twitter: "https://twitter.com/_rohankamble",
    github: "https://github.com/Rohan3011",
    linkedin: "https://www.linkedin.com/in/rohan-kamble",
  },
  contact: {
    email: "rohankamble3011@gmail.com",
    phone: "+91 8169241264",
    resume: "/assets/resume.pdf",
  },
}
