import React, { Component } from 'react'
import { Card, CardBody, Row, Col, Button } from 'reactstrap'

import EditorJS from '@editorjs/editorjs'

const Marker = require('@editorjs/marker')
const List = require('@editorjs/list')
const BlockImage = require('@editorjs/image')
const BlockHeader = require('@editorjs/header')
const Paragraph = require('@editorjs/paragraph')
const Checklist = require('@editorjs/checklist')
const Embed = require('@editorjs/embed')

class CreateStyleGuideWithEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    const tools = {
      marker: {
        class: Marker,
        inlineToolbar: true
      },
      list: {
        class: List,
        inlineToolbar: true
      },
      image: {
        class: BlockImage,
        inlineToolbar: true
      },
      header: {
        class: BlockHeader,
        inlineToolbar: true
      },
      paragraph: {
        class: Paragraph,
        inlineToolbar: true
      },
      checklist: {
        class: Checklist,
        inlineToolbar: true
      },
      embed: {
        class: Embed,
        inlineToolbar: true
      }
    }
    const editor = new EditorJS({
      /**
       * Id of Element that should contain the Editor
       */
      holderId: 'SteezEditor',
      tools: tools
    })
  }
  render () {
    return (
      <div>
        <Row>
          <Col md={6}>
            <div
              className='style-guide-editor'
              style={{
                margin: '30px'
              }}
            >
              <h1>Steez. Enter Your Styles</h1>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div
              id='SteezEditor'
              style={{
                height: '80vh',
                background: '#fff',
                paddingTop: '50px',
                boxShadow:
                  '0 1px 1px rgba(0, 0, 0, 0.03), 0 1px 8px rgba(0, 21, 41, 0.12)'
              }}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default CreateStyleGuideWithEditor
