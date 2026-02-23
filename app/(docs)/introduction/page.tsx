import { PageLayout } from "@/components/page-layout"
import Link from "next/link"

export const metadata = { title: "Introduction" }

export default function IntroductionPage() {
  return (
    <PageLayout category="INTRODUCTION" title="Introduction to nocdn/ui">
      <p>
        This is a collection of quite simple components, but ones that aren&apos;t usually found in
        your typical shadcn, OriginUI, Hero UI, etc UI libraries (no shade to those, they&apos;re
        great).
      </p>
      <p>
        I use these components, or variations of them quite often in my own projects, so adding them
        to a shadcn registry is also quite helpful for me.
      </p>
      <p>
        Feel free to look around, use them in your own projects, and contribute to the library if
        you&apos;d like. You can find a list of the components in the sidebar, but if you are not
        familiar with UI libraries, I recommend reading the{" "}
        <Link href="/installation" prefetch={true} className="font-medium text-blue-700">
          installation guide
        </Link>
        .
      </p>
    </PageLayout>
  )
}
