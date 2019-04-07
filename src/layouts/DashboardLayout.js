import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import * as Feather from 'react-feather';
import {
  Button,
  Badge,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import {
  Header,
  SidebarNav,
  Footer,
  PageContent,
  Avatar,
  PageAlert,
  Page
} from '../vibe'

import nav from '../_nav'
import routes from '../views'
import ContextProviders from '../vibe/components/utilities/ContextProviders'

const Logo = '/images/logo-img-word.png'
const MOBILE_SIZE = 992

export default class DashboardLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarCollapsed: false,
      isMobile: window.innerWidth <= MOBILE_SIZE
    }
  }

  handleResize = () => {
    if (window.innerWidth <= MOBILE_SIZE) {
      this.setState({ sidebarCollapsed: false, isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  }

  componentDidUpdate (prev) {
    if (
      this.state.isMobile &&
      prev.location.pathname !== this.props.location.pathname
    ) {
      this.toggleSideCollapse()
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  toggleSideCollapse = () => {
    this.setState(prevState => ({
      sidebarCollapsed: !prevState.sidebarCollapsed
    }))
  }

  render () {
    const { sidebarCollapsed } = this.state
    const sidebarCollapsedClass = sidebarCollapsed ? 'side-menu-collapsed' : ''
    console.log(Feather)
    return (
      <ContextProviders>
        <div className={`app ${sidebarCollapsedClass}`}>
          <PageAlert />
          <div className='app-body'>
            <SidebarNav
              nav={nav}
              logo={Logo}
              logoText='Steez.'
              isSidebarCollapsed={sidebarCollapsed}
              toggleSidebar={this.toggleSideCollapse}
              {...this.props}
            />
            <Page>
              <Header
                toggleSidebar={this.toggleSideCollapse}
                isSidebarCollapsed={sidebarCollapsed}
                routes={routes}
                {...this.props}
              >
                <HeaderNav />
              </Header>
              <PageContent>
                <Switch>
                  {routes.map((page, key) => (
                    <Route
                      path={page.path}
                      component={page.component}
                      key={key}
                    />
                  ))}
                  <Redirect from='/' to='/home' />
                </Switch>
              </PageContent>
            </Page>
          </div>
          <Footer>
      
          </Footer>
          {/* <Chat.Container>
            {this.state.showChat1 && (
              <Chat.ChatBox name="Messages" status="online" image={avatar1} close={this.closeChat} />
            )}
          </Chat.Container> */}
        </div>
      </ContextProviders>
    )
  }
}

function HeaderNav () {
  return (
    <React.Fragment>
      <NavItem>
          
              <NavLink to={'/apps/cms'}>
                <Button>Create New Project</Button>
              </NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
          <Feather.Menu />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
          <Feather.LogOut />  Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </React.Fragment>
  )
}
