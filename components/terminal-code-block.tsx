import { cn } from "@/lib/utils"
import { CopyButton } from "./copy-button"

const stripyStyle = {
  backgroundImage: `
    linear-gradient(to right, white 0%, rgba(255,255,255,0.85) 1%, transparent 5%, transparent 95%, rgba(255,255,255,0.85) 99%, white 100%),
    linear-gradient(to bottom, white 0%, rgba(255,255,255,0.85) 1.25%, transparent 2.5%, transparent 97.5%, rgba(255,255,255,0.85) 98.75%, white 100%),
    repeating-linear-gradient(135deg, rgba(59,130,246,0.025) 0px, rgba(59,130,246,0.025) 10px, transparent 10px, transparent 20px)
  `,
}

export function TerminalCodeBlock({ code, className }: any) {
  return (
    <div
      className={cn(
        "group font-ioskeley-mono relative flex w-full items-center justify-between gap-3 rounded-lg border border-[#e5e5e5] bg-[#fafafa81] py-3.5 pr-4 pl-4.5 text-[13px] text-[#18181b]",
        className
      )}
      style={stripyStyle}
    >
      <code className="font-ioskeley-mono flex-1 overflow-x-auto whitespace-nowrap">{code}</code>
      <CopyButton text={code} />
    </div>
  )
}
