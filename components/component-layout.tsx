import { Suspense } from "react"
import { CodeBlock } from "./code-block"
import { TerminalCodeBlock } from "./terminal-code-block"

function PreviewSkeleton() {
  return (
    <div className="mb-3 h-96 max-w-3xl animate-pulse rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 p-1">
      <div className="h-full w-full rounded-[7px] border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5" />
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
          comingSoon ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-neutral-500"
        } font-semibold`}
      >
        {comingSoon ? "COMING SOON" : "COMPONENTS"}
      </p>
      <p className="mt-3 font-sans text-3xl leading-6 font-medium">{componentName}</p>
      <p className="mt-6 font-sans leading-7 font-[420] text-[#737373] dark:text-neutral-400">{description}</p>
      {!comingSoon && (
        <>
          <div className="mt-12 flex flex-col gap-4">
            <div className="flex items-center gap-4 font-sans text-[16px] font-medium">
              <p>Preview</p>
            </div>
            <Suspense fallback={<PreviewSkeleton />}>
              <div className="mb-3 h-96 max-w-3xl rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/5 p-1">
                <div className="grid h-full w-full place-items-center rounded-[7px] border border-gray-200 dark:border-white/6 bg-white dark:bg-neutral-900">
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
          <p className="font-jetbrains-mono mt-6 text-[12px] leading-6 font-semibold tracking-widest text-gray-600 dark:text-neutral-500">
            INSTALLATION:
          </p>
          <TerminalCodeBlock code={installCode} className="mt-4" />
          <p className="font-jetbrains-mono mt-6 text-[12px] leading-6 font-semibold tracking-widest text-gray-600 dark:text-neutral-500">
            USAGE:
          </p>
          <Suspense
            fallback={
              <div className="mt-4 h-32 animate-pulse rounded-lg border border-[#e5e5e5] dark:border-white/10 bg-gray-50 dark:bg-white/5" />
            }
          >
            <CodeBlock code={usageCode} className="mt-4" />
          </Suspense>
          {apiReference && (
            <>
              <p className="font-jetbrains-mono mt-6 text-[12px] leading-6 font-semibold tracking-widest text-gray-600 dark:text-neutral-500">
                PROPS:
              </p>
              <div className="mt-4 overflow-x-auto overscroll-x-auto rounded-lg border border-gray-200 dark:border-white/10">
                <table className="font-ioskeley-mono w-full">
                  <thead className="border-b border-gray-200 dark:border-white/10 bg-gray-100/40 dark:bg-white/5">
                    <tr>
                      <th className="px-4 py-3 text-left text-[12.5px] font-medium text-gray-950 dark:text-neutral-200 md:text-[14px]">
                        Prop
                      </th>
                      <th className="px-4 py-3 text-left text-[12.5px] font-medium text-gray-950 dark:text-neutral-200 md:text-[14px]">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-[12.5px] font-medium text-gray-950 dark:text-neutral-200 md:text-[14px]">
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiReference.map((item: any, index: any) => (
                      <tr
                        key={item.prop}
                        className={
                          index !== apiReference.length - 1 ? "border-b border-gray-200 dark:border-white/10" : ""
                        }
                      >
                        <td className="px-4 py-3 text-[12.5px] text-[#2B67EB] dark:text-blue-400 antialiased md:text-[14px]">
                          {item.prop}
                        </td>
                        <td className="px-4 py-3 text-[12.5px] antialiased md:text-[14px]">{item.type}</td>
                        <td className="px-4 py-3 text-[12.5px] antialiased md:text-[14px]">{item.default}</td>
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
