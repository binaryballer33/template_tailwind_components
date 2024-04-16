import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {
  NavBar,
  Home,
  Footer,
  Hero,
  HeroImage,
  FeatureShort,
  FeatureLong,
  FeatureInformation,
  FeatureWithImage,
  PricingCards,
  PricingPlanComparisons,
  Team,
  FAQ,
} from "./components"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="hero" element={<Hero />} />
                <Route path="heroimage" element={<HeroImage />} />
                <Route path="featureshort" element={<FeatureShort />} />
                <Route path="featurelong" element={<FeatureLong />} />
                <Route path="featurewithimage" element={<FeatureWithImage />} />
                <Route path="pricingcards" element={<PricingCards />} />
                <Route path="pricingplancomparisons" element={<PricingPlanComparisons />} />
                <Route path="team" element={<Team />} />
                <Route path="faq" element={<FAQ />} />

                {/* just demonstrating how to use to nested routes, because I always forget */}
                <Route path="/home/*" element={<Home />}>
                  <Route path="cards" element={<Home />} />
                  <Route path="featureinformation" element={<FeatureInformation />} />
                  <Route path="featureshort" element={<FeatureShort />} />
                  <Route path="featurelong" element={<FeatureLong />} />
                  <Route path="featurewithimage" element={<FeatureWithImage />} />
                  <Route path="pricingcards" element={<PricingCards />} />
                  <Route path="pricingplancomparisons" element={<PricingPlanComparisons />} />
                  <Route path="team" element={<Team />} />
                  <Route path="faq" element={<FAQ />} />
                </Route>
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}
