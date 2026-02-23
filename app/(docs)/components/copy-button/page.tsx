import { ComponentLayout } from "@/components/component-layout"
import { AnimatedButton } from "@/registry/default/ui/animated-button/animated-button"
import { Check, Copy, Link2, MoveRight, Unlink2 } from "lucide-react"

export const metadata = { title: "Copy Button" }

export default function CopyButtonPage() {
  return (
    <ComponentLayout
      componentName="Copy Button"
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
      ]}
      frameScale="160"
      previewChildren={
        <div className="flex flex-col gap-4 text-[14px]">
          <div className="flex items-center gap-4 font-sans font-[430]">
            <span className="-translate-y-[1px] opacity-30">Copy Animation</span>
            <MoveRight strokeWidth={1.25} className="mr-0.25 opacity-20" />
            <AnimatedButton
              className="size-4.5 cursor-pointer"
              secondaryChildren={<Check />}
              ariaLabel="Copy"
            >
              <Copy className="size-4" />
            </AnimatedButton>
          </div>
          <div className="flex items-center gap-4 font-sans font-[430]">
            <span className="-translate-y-[1px] opacity-30">Link animation</span>
            <MoveRight strokeWidth={1.25} className="mr-0.25 opacity-20" />
            <AnimatedButton
              className="size-4.5 cursor-pointer"
              secondaryChildren={<Unlink2 />}
              ariaLabel="Copy"
            >
              <Link2 />
            </AnimatedButton>
          </div>
        </div>
      }
    />
  )
}
