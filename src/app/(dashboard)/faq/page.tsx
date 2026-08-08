import React from 'react'
import FaqContainer from './_components/faq-container'
import DashboardOverviewHeader from '../_components/dashboard-overview-header'

const FaqPage = () => {
  return (
    <div>
          <DashboardOverviewHeader title='FAQ Section' description="Feature highlights shown in the banner below the hero · 4 items"/>
      <FaqContainer/>
    </div>
  )
}

export default FaqPage
