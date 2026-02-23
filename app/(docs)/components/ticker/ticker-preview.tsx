"use client"

import { useState, useEffect } from "react"
import { Ticker } from "@/registry/default/ui/ticker/ticker"

const texts = [
  "Shawshank Redemption (1994)",
  "Rye Lane (2023)",
  "Fight Club (1999)",
  "Hijack (2023)",
  "Snowden (2016)",
  "About Time (2013)",
]

export function TickerPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 1500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <Ticker text={texts[currentIndex]} />
    </div>
  )
}
