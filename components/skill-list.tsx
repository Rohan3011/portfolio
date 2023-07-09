import React from "react"

import { skill } from "@/config/skill"

import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function SkillList() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Languages</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-wrap gap-2">
            {skill.tech.languages.map((val, idx) => (
              <Badge key={idx}>{val}</Badge>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Web Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-wrap gap-2">
            {skill.tech.web.map((val, idx) => (
              <Badge key={idx}>{val}</Badge>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-wrap gap-2">
            {skill.tech.tools.map((val, idx) => (
              <Badge key={idx}>{val}</Badge>
            ))}
          </ul>
        </CardContent>
      </Card> */}
    </>
  )
}
