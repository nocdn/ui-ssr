"use client"

export function OpenDrawerButton() {
  return (
    <p className="mt-6 md:hidden">
      Alternatively,{" "}
      <button
        onClick={() => window.dispatchEvent(new Event("open-mobile-drawer"))}
        className="cursor-pointer font-medium text-blue-700 dark:text-blue-400"
      >
        open the navigation panel
      </button>
      .
    </p>
  )
}
