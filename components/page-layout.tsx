export function PageLayout({ category, title, children }: any) {
  return (
    <div className="max-w-4xl">
      <p className="font-jetbrains-mono text-[12px] font-semibold leading-6 tracking-widest text-gray-600">
        {category}
      </p>
      <p className="mt-3 font-sans text-3xl font-medium leading-6">{title}</p>
      <div className="mt-6 font-inter text-gray-700 leading-7 space-y-6">
        {children}
      </div>
    </div>
  )
}
