import Link from "next/link"
import { ArrowUpRight, Search } from "lucide-react"

export function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-gray-50/35 h-14 flex items-center gap-6 px-5 text-sm font-inter antialiased font-[430] border-b border-gray-950/5">
      <Link
        href="/introduction"
        prefetch={true}
        className="mr-auto cursor-pointer group"
      >
        nocdn
        <span className="group-hover:mx-1.5 mx-0.5 transition-all duration-200 ease-[cubic-bezier(0.19,1,0.22,1)]">
          /
        </span>
        ui
      </Link>
      <div className="flex items-center gap-3 bg-gray-950/2 border border-gray-950/5 pl-2 pr-2.5 py-1.25 rounded-full cursor-pointer">
        <Search size={14} />
        <p className="text-xs">⌘ + K</p>
      </div>
      <Link href="/installation" prefetch={true} className="cursor-pointer">
        Docs
      </Link>
      <Link
        href="/components/cornered-button"
        prefetch={true}
        className="cursor-pointer"
      >
        Components
      </Link>
      <a
        href="https://github.com/nocdn/ui-ssr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 cursor-pointer"
      >
        Source{" "}
        <ArrowUpRight
          size={16}
          strokeWidth={2.15}
          className="translate-y-[1px]"
        />
      </a>
    </div>
  )
}
