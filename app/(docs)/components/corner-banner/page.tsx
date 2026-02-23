import { ComponentLayout } from "@/components/component-layout"

export const metadata = { title: "Corner Banner" }

export default function CornerBannerPage() {
  return (
    <ComponentLayout
      componentName="Corner Banner"
      description="A banner that is anchored to the corner of a component. Follows accessibility guidelines."
      comingSoon={true}
    />
  )
}
