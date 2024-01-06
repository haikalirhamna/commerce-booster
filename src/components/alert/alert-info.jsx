import { RiMessage2Line, RiCloseLine } from "@remixicon/react"

export default function AlertInfo({text}) {
  return (
    <div className="w-[343px] lg:w-[880px] h-20 bg-primary-100 rounded-lg flex items-center gap-2 font-basier-square font-semibold text-sm text-light-200 leading-6 p-4">
      <RiMessage2Line
      size={32}
      color="white"
      className="alert-error-icon"/>
      <p>This is an alert notification. Messages vary by context.</p>
      <RiCloseLine
      size={32}
      color="white"
      className="close-icon"/>
    </div>
  )
}