import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {
  NavBar,
  Home,
  Footer,
  Information,
  Hero,
  HeroImage,
  MarketingShort,
  MarketingLong,
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
                <Route path="marketingshort" element={<MarketingShort />} />
                <Route path="marketinglong" element={<MarketingLong />} />
                <Route path="info1" element={<Information />} />
                {/* just demonstrating how to use to nested routes, because I always forget */}
                <Route path="/home/*" element={<Home />}>
                  <Route path="cards" element={<Home />} /> {/* Cards Section 1 */}
                  <Route path="marketingshort" element={<MarketingShort />} />
                  <Route path="marketinglong" element={<MarketingLong />} />
                  <Route path="pricing" element={<Home />} /> {/* Pricing Section With Toggle */}
                  <Route path="faq" element={<Home />} /> {/* FAQ Accordion */}
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
