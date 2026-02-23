"use client"

import { Check, Copy } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export function CopyButton({ text }: any) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex cursor-pointer items-center justify-center"
      aria-label="Copy to clipboard"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={isCopied ? "check" : "copy"}
          initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        >
          {isCopied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
