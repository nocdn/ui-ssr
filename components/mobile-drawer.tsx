"use client"

import { Menu, Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Drawer } from "vaul"
import { sections } from "./sidebar"

export function MobileDrawer() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
    setSearch("")
  }, [pathname])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener("open-mobile-drawer", handler)
    return () => window.removeEventListener("open-mobile-drawer", handler)
  }, [])

  const filtered = sections
    .map((section) => ({
      ...section,
      links: section.links.filter((link) => link.name.toLowerCase().includes(search.toLowerCase())),
    }))
    .filter((section) => section.links.length > 0)

  return (
    <Drawer.Root shouldScaleBackground open={open} onOpenChange={setOpen}>
      <Drawer.Trigger asChild>
        <button className="cursor-pointer md:hidden" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="fixed right-0 bottom-0 left-0 flex max-h-[85dvh] flex-col rounded-t-[10px] bg-white dark:bg-neutral-900 outline-none">
          <div className="mx-auto mt-3 h-1 w-10 shrink-0 rounded-full bg-gray-300 dark:bg-neutral-600" />
          <Drawer.Title className="sr-only">Navigation</Drawer.Title>
          <div className="shrink-0 p-4">
            <div className="flex items-center gap-2 rounded-lg border border-gray-950/5 bg-gray-950/2 dark:border-white/8 dark:bg-white/5 px-3 py-2">
              <Search size={16} className="text-gray-400 dark:text-neutral-500" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-[16px] outline-none placeholder:text-gray-400 dark:placeholder:text-neutral-500"
              />
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-16">
            <div className="flex flex-col gap-8">
              {filtered.map((section) => (
                <div key={section.title} className="flex flex-col">
                  <h3 className="font-jetbrains-mono mb-2 text-[12px] leading-6 font-medium tracking-widest text-gray-500 dark:text-neutral-500">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-2 border-l border-gray-950/5 dark:border-white/8">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        prefetch={true}
                        className="font-inter pl-3 text-left text-[14px] leading-6 font-normal text-gray-950/60 dark:text-neutral-400"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
