import React, { Component } from 'react'
import { Card, CardBody, Row, Col, Button } from 'reactstrap'

import EditorJS from '@editorjs/editorjs'

class CreateStyleGuideWithEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
      
    }
    render() { 
         return (
      <div>
        <Row>
          <Col md={6}>
            <div className='style-guide-editor' style={heroStyles}>
              <h1>Steez. Enter Your Styles</h1>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={12}>
           <div id='SteezEditor'>
           </div>
          </Col>
        </Row>
      </div>
    )
    }
}
 
export default CreateStyleGuideWithEditor;