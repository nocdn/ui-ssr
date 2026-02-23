"use client"

import { AnimatedButton } from "@/registry/default/ui/animated-button/animated-button"
import { Check, Copy } from "lucide-react"

export function CopyButton({ text }: any) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
  }

  return (
    <AnimatedButton
      onClick={handleCopy}
      ariaLabel="Copy to clipboard"
      className="flex items-center justify-center"
      secondaryChildren={<Check className="size-3.5" />}
      timeout={1000}
    >
      <Copy className="size-3.5" />
    </AnimatedButton>
  )
}
