import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"

export default function DocsLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[290px_40px_1fr] w-full h-[calc(100vh-3.5rem)]">
        <Sidebar />
        <div className="col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-gray-50/35 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10" />
        <div
          id="content"
          className="px-14 pt-10 overflow-y-auto bg-gray-50/35 overscroll-contain"
        >
          {children}
        </div>
      </div>
    </>
  )
}
