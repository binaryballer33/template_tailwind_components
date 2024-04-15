import { Outlet } from "react-router-dom"
import Hero from "../Hero/Hero"
import FeatureShort from "../Feature/FeatureShort"
import FeatureLong from "../Feature/FeatureLong"

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
      <FeatureShort />
      <FeatureLong />

      {/* Need this in order to show the components being rendered as sub routes after this */}
      <Outlet />
    </div>
  )
}
