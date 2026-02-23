import { PageLayout } from "@/components/page-layout"

export const metadata = { title: "Compatibility" }

export default function CompatibilityPage() {
  return (
    <PageLayout category="COMPATIBILITY" title="Compatibility">
      <p>The components are compatible with the following technologies:</p>
      <ul>
        <li>React 18+</li>
        <li>TypeScript 5.3+</li>
        <li>Tailwind CSS 4.x</li>
      </ul>
      <p>
        The code also assumes that you are using the <span className="code-inline">@ → src</span>{" "}
        alias for the bundler.
      </p>
      <p className="font-jetbrains-mono text-[12px] leading-6 font-semibold tracking-widest text-gray-600 dark:text-neutral-500">
        SSR AND ANIMATIONS
      </p>
      <p>
        Motion works server-side, but initial mount transitions can flash; if needed, disable
        initial animations on first paint or gate with hydration checks.
      </p>
      <p className="font-jetbrains-mono text-[12px] leading-6 font-semibold tracking-widest text-gray-600 dark:text-neutral-500">
        TROUBLESHOOTING
      </p>
      <div>
        <p>
          <span className="code-inline">Module not found &apos;@/lib/utils&apos;</span> → check your
          bundler alias config and that cn util is resolvable.
        </p>
        <p>
          <span className="code-inline">Types not found</span> → ensure TypeScript is 5.3+ and
          skipLibCheck is true or libs are installed.
        </p>
      </div>
    </PageLayout>
  )
}
