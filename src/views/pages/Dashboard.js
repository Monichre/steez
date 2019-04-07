import React, { Component } from 'react'
import reactFeature from '../../assets/images/react-feature.svg'
import { NavLink } from 'react-router-dom'

import { Card, CardBody, Row, Col, Button } from 'reactstrap'

class Dashboard extends Component {
  render () {
    const heroStyles = {
      padding: '50px 0 70px'
    }

    return (
      <div>
        <Row>
          <Col md={6}>
            <div className='home-hero' style={heroStyles}>
              <h1>This is Steez. Your Styleguide generator</h1>
              <p className='text-muted'>
                Grab your designer. Fill out a form and export your beautiful
                custom styleguide as a PDF. Oh and grab your favorite dev
                because we export your styleguide as JSON to make theme
                extensibility a breeze. API coming soon.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className='home-hero' style={heroStyles}>
              <h1>Projects</h1>
            </div>
          </Col>
          <Col md={6}>
            <div className='home-hero' style={heroStyles}>
              <NavLink to={'/apps/cms'}>
                <Button>Create New Project</Button>
              </NavLink>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <CardBody className='display-flex'>
                <img
                  src={reactFeature}
                  style={{ width: 70, height: 70 }}
                  alt='react.js'
                  aria-hidden
                />
                <div className='m-l'>
                  <h2 className='h4'>Starter Project</h2>
                  <p className='text-muted'>
                    Built to quickly get your MVPs off the ground.
                  </p>
                  <Row>
                    <Col md={5}>
                      <Button>Export as JSON</Button>
                    </Col>
                    <Col md={1} />
                    <Col md={5}>
                      <Button>Export as PDF</Button>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard
