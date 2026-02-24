import { ComponentLayout } from "@/components/component-layout"
import { AnimatedButton } from "@/registry/default/ui/animated-button/animated-button"
import { Box, Check, CircleCheck, Component, Copy, Link, Link2, Unlink2 } from "lucide-react"

export const metadata = { title: "Animated Button" }

export default function AnimatedButtonPage() {
  return (
    <ComponentLayout
      componentName="Animated Button"
      description="A button that smoothly transitions between it's two child states."
      installCode="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/animated-button.json"
      usageCode={`import { AnimatedButton } from '@/components/ui/animated-button'
import { Copy, Check } from 'lucide-react'

<AnimatedButton
  className='size-4.5'
  secondaryChildren={<Check />}
  ariaLabel='Copy'
>
  <Copy className='size-4' />
</AnimatedButton>`}
      apiReference={[
        { prop: "className", type: "string", default: "-" },
        { prop: "children", type: "React.ReactNode", default: "-" },
        { prop: "secondaryChildren", type: "React.ReactNode", default: "-" },
        { prop: "onClick", type: "() => void", default: "-" },
        { prop: "ariaLabel", type: "string", default: "-" },
        { prop: "showingSecondary", type: "boolean", default: "-" },
        { prop: "timeout", type: "number", default: "1000" },
      ]}
      frameScale="160"
      previewChildren={
        <div className="flex items-center gap-6">
          <AnimatedButton
            className="border-shadow cursor-pointer rounded-[8px] p-2"
            secondaryChildren={<CircleCheck size={14} fill="#F6F7F7" />}
            ariaLabel="Copy"
          >
            <Copy size={14} strokeWidth={2.15} />
          </AnimatedButton>
          <AnimatedButton
            className="border-shadow cursor-pointer rounded-[8px] p-2"
            secondaryChildren={<CircleCheck size={14} fill="#F6F7F7" />}
            ariaLabel="Copy"
          >
            <Link size={14} />
          </AnimatedButton>
          <AnimatedButton
            className="border-shadow cursor-pointer rounded-[8px] p-2"
            secondaryChildren={<Box size={14} fill="#F6F7F7" />}
            ariaLabel="Copy"
          >
            <Component size={14} />
          </AnimatedButton>
        </div>
      }
    />
  )
}
