import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import './vibe/scss/styles.scss'
import Auth from '@aws-amplify/auth'
import Analytics from '@aws-amplify/analytics'
import awsconfig from './aws-exports'
import { withAuthenticator } from 'aws-amplify-react'

Auth.configure(awsconfig)
Analytics.configure(awsconfig)

class App extends Component {
  componentDidMount () {
    console.log(this.props)
    /*
  Analytics.record('User Signed In').then(evt => {
  const url =
    'https://' +
    awsconfig.aws_mobile_analytics_app_region +
    '.console.aws.amazon.com/pinpoint/home/?region=' +
    awsconfig.aws_mobile_analytics_app_region +
    '#/apps/' +
    awsconfig.aws_mobile_analytics_app_id +
    '/analytics/events'
  AnalyticsResult.innerHTML = '<p>Event Submitted.</p>'
  AnalyticsResult.innerHTML += '<p>Events sent: ' + ++EventsSent + '</p>'
  AnalyticsResult.innerHTML +=
    '<a href="' +
    url +
    '" target="_blank">View Events on the Amazon Pinpoint Console</a>'
})

  */
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={DashboardLayout} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default withAuthenticator(App)
