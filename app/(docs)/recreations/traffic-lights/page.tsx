import { PageLayout } from "@/components/page-layout"
import { TrafficLights } from "./traffic-lights"

export const metadata = { title: "iPadOS Controls" }

export default function TrafficLightsPage() {
  return (
    <PageLayout category="RECREATIONS" title="iPadOS Controls">
      <p>A recreation of the iPadOS traffic light window controls.</p>
      <TrafficLights />
    </PageLayout>
  )
}
