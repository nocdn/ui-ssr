"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export const sections = [
  {
    title: "GETTING STARTED",
    links: [
      { name: "Introduction", href: "/introduction" },
      { name: "Installation", href: "/installation" },
      { name: "Compatibility", href: "/compatibility" },
    ],
  },
  {
    title: "COMPONENTS",
    links: [
      { name: "Cornered Button", href: "/components/cornered-button" },
      { name: "Animated Ticker", href: "/components/ticker" },
      { name: "Copy Button", href: "/components/copy-button" },
      { name: "Corner Banner", href: "/components/corner-banner" },
      { name: "Reasoning Traces", href: "/components/reasoning-traces" },
    ],
  },
  {
    title: "EXPERIMENTS",
    links: [{ name: "Expanding Menu", href: "/experiments/expanding-menu" }],
  },
  {
    title: "RECREATIONS",
    links: [{ name: "iPadOS Controls", href: "/recreations/traffic-lights" }],
  },
  {
    title: "CONTACT",
    links: [
      { name: "Get in touch", href: "/get-in-touch" },
      { name: "Contributing", href: "/contributing" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="h-full overflow-y-auto bg-gray-50/35 dark:bg-neutral-900/60 px-5 pt-5">
      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col">
            <h3 className="font-jetbrains-mono mb-2 text-[12px] leading-6 font-medium tracking-widest text-gray-500 dark:text-neutral-500">
              {section.title}
            </h3>
            <div className="flex flex-col gap-2 border-l border-gray-950/5 dark:border-white/8">
              {section.links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`font-inter pl-3 text-left text-[14px] leading-6 cursor-pointer transition-[font-weight] duration-200 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                      isActive
                        ? "relative -ml-px border-l border-blue-800/90 font-[550] text-blue-900/90 dark:border-blue-400/80 dark:text-blue-400"
                        : "font-normal text-gray-950/60 dark:text-neutral-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
