import { ComponentLayout } from "@/components/component-layout"
import { TickerPreview } from "./ticker-preview"

export const metadata = { title: "Animated Ticker" }

export default function TickerPage() {
  return (
    <ComponentLayout
      componentName="Animated Ticker"
      description="A status ticker that animates nicely when the text prop changes."
      installCode="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/ticker.json"
      usageCode={`import { Ticker } from '@/components/ui/ticker'

<Ticker text="Shawshank Redemption (1994)" />`}
      apiReference={[
        { prop: "className", type: "string", default: "-" },
        { prop: "text", type: "string", default: "-" },
      ]}
      previewChildren={<TickerPreview />}
    />
  )
}
