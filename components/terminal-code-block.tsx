import { cn } from "@/lib/utils"
import { CopyButton } from "./copy-button"

export function TerminalCodeBlock({ code, className }: any) {
  return (
    <div
      className={cn(
        "terminal-stripy group font-ioskeley-mono relative flex w-full items-center justify-between gap-3 rounded-lg border border-[#e5e5e5] bg-[#fafafa81] py-3.5 pr-4 pl-4.5 text-[13px] text-[#18181b] dark:border-white/10 dark:bg-white/5 dark:text-neutral-200",
        className
      )}
    >
      <code className="font-ioskeley-mono flex-1 overflow-x-auto whitespace-nowrap">{code}</code>
      <CopyButton text={code} />
    </div>
  )
}
