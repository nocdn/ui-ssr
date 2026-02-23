import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"

export default function DocsLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="grid h-[calc(100vh-3.5rem)] w-full grid-cols-1 md:grid-cols-[290px_40px_1fr]">
        <div className="row-span-5 row-start-1 hidden h-full md:block">
          <Sidebar />
        </div>
        <div className="col-start-2 row-span-5 row-start-1 hidden border-x border-x-(--pattern-fg) bg-gray-50/35 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 md:block dark:bg-neutral-950/80 dark:[--pattern-fg:var(--color-white)]/10" />
        <div
          id="content"
          className="row-span-5 row-start-1 min-h-0 overflow-y-auto overscroll-contain bg-gray-50/35 px-5 pt-10 pb-14 md:px-14 md:pb-0 dark:bg-neutral-950/80"
        >
          {children}
        </div>
      </div>
    </>
  )
}
