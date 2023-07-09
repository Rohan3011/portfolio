import { Project } from "@/types/project"

export const ProjectList = [
  {
    title: "WanderStay",
    website: "https://wanderstay.vercel.app/",
    github: "https://github.com/Rohan3011/wanderstay",
    image: "/images/blog.webp",
    description: [
      "Developed a travel advisor web application using Next.js, Tailwind CSS, Mantine UI, and Firebase.",
      "WanderStay allows users to search for accommodations, view detailed information, and sign in using their Google accounts.",
      "Implemented features such as user authentication, database integration, and responsive design.",
      "Leveraged Firebase Authentication for secure user sign-in and management.",
      "Utilized Firebase Firestore for storing and retrieving accommodation data.",
    ],
    duration: ["DEC", 2022],
  },
  {
    title: "SharePlay",
    website: "https://shareplay.vercel.app/",
    github: "https://github.com/Rohan3011/r-spotify",
    image: "/images/shareplay.png",
    description: [
      "Yet another spotify clone; Stream your favorite songs or Search for new one, even by Albums, Artists, playlists.",
      "Revamped spotify with Next.js (React) and styled with Tailwind.css and HeadlessUI.",
      "Implemented Authorization with spotify’s OAuth authorization using NextAuth.",
      "Used Recoil.js for state management and can also handle song playback from other devices on the same account",
    ],
    duration: ["JAN", 2022],
  },
] satisfies Project[]
