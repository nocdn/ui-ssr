import { cn } from "@/lib/utils"
import { cacheLife } from "next/cache"
import { codeToHtml } from "shiki"
import { CopyButton } from "./copy-button"

async function highlightCode(code: any, language: any) {
  "use cache"
  cacheLife("max")
  return codeToHtml(code, {
    lang: language,
    themes: { light: "github-light", dark: "github-dark" },
  })
}

export async function CodeBlock({ code, language = "tsx", filename, className }: any) {
  const html = await highlightCode(code, language)

  return (
    <div className={cn("relative overflow-hidden rounded-lg border border-[#e5e5e5]", className)}>
      <div className="flex items-center justify-between border-b border-[#e5e5e5] bg-[#FAFBFB] py-2.5 pr-4 pl-3">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="font-ioskeley-mono text-xs font-medium text-[#71717a]">
              {filename}
            </span>
          )}
          {language && (
            <span className="font-ioskeley-mono rounded-sm bg-[#e5e5e5] px-2 py-1 text-xs text-[#52525b]">
              {language}
            </span>
          )}
        </div>
        <CopyButton text={code} />
      </div>
      <div
        className="[&_code]:font-ioskeley-mono overflow-x-auto p-4 antialiased [&_code]:text-[13px] [&_code]:leading-[1.2] [&_pre]:bg-transparent! [&_pre]:leading-[1.3]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
