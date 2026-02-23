export function PageLayout({ category, title, children }: any) {
  return (
    <div className="max-w-4xl">
      <p className="font-jetbrains-mono text-[12px] leading-6 font-semibold tracking-widest text-gray-600">
        {category}
      </p>
      <p className="mt-3 font-sans text-3xl leading-6 font-medium">{title}</p>
      <div className="font-inter mt-6 space-y-6 leading-7 text-gray-700">{children}</div>
    </div>
  )
}
