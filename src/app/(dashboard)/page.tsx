import React from 'react'
import { DashboardOverview } from './_components/dashboard-overview'
import DashboardOverviewHeader from './_components/dashboard-overview-header'
import RecentRequests from './_components/recent-requests'
// import { RecentTransactions } from './_components/recent-transactions'
// import { TotalEarningChart } from './_components/total-earning'

const DashboardOverviewPage = () => {
  return (
    <div>
      <DashboardOverviewHeader title='Dashboard Overview' description="Welcome back! Here's what's happening with Naturopath.ai today."/>
      <DashboardOverview/>
      <RecentRequests />
      {/* <TotalEarningChart/>
      <RecentTransactions/> */}
    </div>
  )
}

export default DashboardOverviewPage
