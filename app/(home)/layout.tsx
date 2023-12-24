"use client"

import React, { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

const HomeLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on("scroll", (e: HTMLElement) => {
      console.log(e)
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <>{children}</>
}
export default HomeLayout
