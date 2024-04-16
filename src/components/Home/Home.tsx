import { Outlet } from "react-router-dom"
import Hero from "../Hero/Hero"
import FeatureShort from "../Feature/FeatureShort"
import FeatureLong from "../Feature/FeatureLong"
import PricingCards from "../Pricing/PricingCards"
import Contact from "../Contact/Contact"
import Team from "../Team/Team"
import FAQ from "../Accordion/FaqAccordion"

export default function Home() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <FeatureShort />
      <FeatureLong />
      <PricingCards />
      <Contact />
      <Team />
      <FAQ />

      {/* Need this in order to show the components being rendered as sub routes after this */}
      <Outlet />
    </div>
  )
}
