import React from 'react'
import HeroSection from './_components/HeroSection'
import CtaButton from './_components/CtaButton'
import Hospitality from './_components/Hospitality'
import StateSection from './_components/StateSection'
import Technology from './_components/Technology'
import StepToBetter from './_components/StepToBetter'
import OurMissiion from './_components/OurMissiion'
import FaqSection from './_components/FaqSection'

function page() {
  return (
    <div>
      <HeroSection />
      <CtaButton />
      <Hospitality />
      <StateSection />
      <Technology />
      <StepToBetter />
      <OurMissiion />
      <FaqSection />
    </div>
  )
}

export default page
