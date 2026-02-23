import { Suspense } from "react"
import { CodeBlock } from "./code-block"
import { TerminalCodeBlock } from "./terminal-code-block"

function PreviewSkeleton() {
  return (
    <div className="rounded-lg max-w-3xl h-96 border border-gray-200 p-1 bg-gray-50/50 mb-3 animate-pulse">
      <div className="rounded-[7px] w-full h-full border bg-gray-100 border-gray-200" />
    </div>
  )
}

export async function ComponentLayout({
  componentName,
  description,
  installCode,
  usageCode,
  apiReference,
  previewChildren,
  frameScale = "160",
  comingSoon = false,
}: any) {
  return (
    <div className="max-w-3xl pb-12">
      <p
        className={`font-jetbrains-mono text-[12px] leading-6 tracking-widest ${
          comingSoon ? "text-blue-600" : "text-gray-600"
        } font-semibold`}
      >
        {comingSoon ? "COMING SOON" : "COMPONENTS"}
      </p>
      <p className="font-sans text-3xl leading-6 font-medium mt-3">
        {componentName}
      </p>
      <p className="mt-6 font-sans text-[#737373] leading-7 font-[420]">
        {description}
      </p>
      {!comingSoon && (
        <>
          <div className="flex flex-col gap-4 mt-12">
            <div className="flex items-center gap-4 font-sans text-[16px] font-medium">
              <p>Preview</p>
            </div>
            <Suspense fallback={<PreviewSkeleton />}>
              <div className="rounded-lg max-w-3xl h-96 border border-gray-200 p-1 bg-gray-50/50 mb-3">
                <div className="rounded-[7px] w-full h-full border bg-white border-gray-200 grid place-items-center">
                  <div
                    className="flex items-center gap-10"
                    style={{
                      transform: `scale(${Number(frameScale) / 100})`,
                    }}
                  >
                    {previewChildren}
                  </div>
                </div>
              </div>
            </Suspense>
          </div>
          <p className="mt-6 font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
            INSTALLATION:
          </p>
          <TerminalCodeBlock code={installCode} className="mt-4" />
          <p className="mt-6 font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
            USAGE:
          </p>
          <Suspense
            fallback={
              <div className="mt-4 h-32 rounded-lg border border-[#e5e5e5] bg-gray-50 animate-pulse" />
            }
          >
            <CodeBlock code={usageCode} className="mt-4" />
          </Suspense>
          {apiReference && (
            <>
              <p className="mt-6 font-jetbrains-mono text-[12px] leading-6 tracking-widest text-gray-600 font-semibold">
                PROPS:
              </p>
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full font-ioskeley-mono">
                  <thead className="bg-gray-100/40 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-4 py-3 text-[14px] font-medium text-gray-950">
                        Prop
                      </th>
                      <th className="text-left px-4 py-3 text-[14px] font-medium text-gray-950">
                        Type
                      </th>
                      <th className="text-left px-4 py-3 text-[14px] font-medium text-gray-950">
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiReference.map((item: any, index: any) => (
                      <tr
                        key={item.prop}
                        className={
                          index !== apiReference.length - 1
                            ? "border-b border-gray-200"
                            : ""
                        }
                      >
                        <td className="antialiased px-4 py-3 text-[14px] text-[#2B67EB]">
                          {item.prop}
                        </td>
                        <td className="antialiased px-4 py-3 text-[14px]">
                          {item.type}
                        </td>
                        <td className="antialiased px-4 py-3 text-[14px]">
                          {item.default}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}
