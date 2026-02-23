import { TerminalCodeBlock } from "@/components/terminal-code-block"
import { PageLayout } from "@/components/page-layout"

export const metadata = { title: "Installation" }

export default function InstallationPage() {
  return (
    <PageLayout category="INSTALLATION" title="Installing the components">
      <p>
        The components use a shadcn/ui registry to distribute them, so you will
        need to install the shadcn package first. Check the official{" "}
        <a
          href="https://ui.shadcn.com/docs/installation"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-700"
        >
          documentation page
        </a>{" "}
        for your preferred framework.
      </p>
      <p>
        Once shadcn is configured for your environment, you can install each
        component through the shadcn command line like so:
      </p>
      <TerminalCodeBlock code="bunx --bun shadcn@latest add https://ui.bartoszbak.org/r/cornered-button.json" />
      <p>
        This will install the cornered button component, which you can check out
        in more detail here:{" "}
        <a
          href="/components/cornered-button"
          className="font-medium text-blue-700 cursor-pointer"
        >
          cornered button
        </a>
        .
      </p>
    </PageLayout>
  )
}
