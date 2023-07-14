import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Project } from "@/types/project"

import { Button, buttonVariants } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

interface ProjectCardProps {
  children?: React.ReactNode
  project: Project
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="max-w-md overflow-hidden">
      <Image
        className="object-fit"
        src={project.image}
        width={800}
        height={800}
        alt={project.title}
      />
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>
          <Link
            title="Website"
            href={project.website}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-2xl text-primary underline-offset-4 hover:underline">
              {project.title}
            </span>
          </Link>
        </CardTitle>

        <Link
          title="Github"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              variant: "ghost",
            })}
          >
            <span className="">GitHub</span>
          </div>
        </Link>
      </CardHeader>
      <CardContent>
        <CardDescription>{project.description.at(0)} </CardDescription>
        <Button className="p-0" size="sm" variant="link">
          read more
        </Button>
      </CardContent>
    </Card>
  )
}
