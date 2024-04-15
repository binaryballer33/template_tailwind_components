import { Outlet } from "react-router-dom"
import Hero from "../Hero/Hero"

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100dvh",
        minWidth: "100dvw",
      }}
    >
      <Hero />

      {/* Need this in order to show the components being rendered as sub routes after this */}
      <Outlet />
    </div>
  )
}
