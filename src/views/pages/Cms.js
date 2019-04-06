import React from 'react';
import { SketchPicker } from 'react-color';
import {
	Row,
	Col,
	Card,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	CardBody,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

export default class CmsPage extends React.Component {
	state = {
        viewPrimaryColors: false,
        viewTypography: false,
        viewSpacing: false,
		viewColor1Picker: false,
		viewColor2Picker: false,
		viewColor3Picker: false,
		viewColor4Picker: false,
		viewColor5Picker: false,
		viewHeading1Picker: false,
		viewHeading2Picker: false,
		viewHeading3Picker: false,
		viewHeading4Picker: false,
		viewHeading5Picker: false,
		viewHeading6Picker: false,
		viewParagraphPicker: false,
		viewQuotePicker: false,
		modal: false
	};

	resetPickers = () => {
		this.setState({
			viewColor1Picker: false,
			viewColor2Picker: false,
			viewColor3Picker: false,
			viewColor4Picker: false,
			viewColor5Picker: false,
			viewHeading1Picker: false,
			viewHeading2Picker: false,
			viewHeading3Picker: false,
			viewHeading4Picker: false,
			viewHeading5Picker: false,
			viewHeading6Picker: false,
			viewParagraphPicker: false,
			viewQuotePicker: false
		});
	};

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	showColorPicker = (picker) => {
		this.resetPickers();
		this.setState({
			[picker]: !this.state[picker]
		});
    };
    
    viewSpacing = () => {
        this.setState({
            viewSpacing: !this.state.viewSpacing
        })
    }

    viewTypography = () => {
        this.setState({
            viewTypography: !this.state.viewTypography
        })
    }

    viewPrimaryColors = () => {
        this.setState({
            viewPrimaryColors: !this.state.viewPrimaryColors
        })
    }

	render() {
		return (
			<div>
				<Row>
					<Col md={8}>
						<Card>
							<CardBody>
								<h3 className="m-b">Primary Colors</h3>
								{this.state.viewPrimaryColors && (
									<FormGroup>
										<Label for="primary-color-1">Color 1</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewColor1Picker')}
										/>
										{this.state.viewColor1Picker && <SketchPicker />}
										<Input type="text" name="text" id="primary-color-1" />
										<Label for="primary-color-2">Color 2</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewColor2Picker')}
										/>
										{this.state.viewColor2Picker && <SketchPicker />}
										<Input type="text" name="text" id="primary-color-2" />
										<Label for="primary-color-3">Color 3</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewColor3Picker')}
										/>
										{this.state.viewColor3Picker && <SketchPicker />}
										<Input type="text" name="text" id="primary-color-3" />
										<Label for="primary-color-4">Color 4</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewColor4Picker')}
										/>
										{this.state.viewColor4Picker && <SketchPicker />}
										<Input type="text" name="text" id="primary-color-4" />
										<Label for="primary-color-5">Color 5</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewColor5Picker')}
										/>
										{this.state.viewColor5Picker && <SketchPicker />}
										<Input type="text" name="text" id="primary-color-5" />
									</FormGroup>
								)}
								<h6 className="m-b-xxs" onClick={this.viewPrimaryColors}>
                                    {this.state.viewPrimaryColors ? 'Close' : 'View all'}
								</h6>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<h3 className="m-b">Spacing</h3>
								{this.state.viewSpacing && (
									<FormGroup>
										<Label for="heading1">Margin Large</Label>
										<img src="/images/eye.png" height="15px" />
										<Input type="text" name="text" id="heading1" />
										<Label for="heading2">Margin Medium</Label>
										<img src="/images/eye.png" height="15px" />
										<Input type="text" name="text" id="heading2" />
										<Label for="heading3">Margin Small</Label>
										<img src="/images/eye.png" height="15px" />
										<Input type="text" name="text" id="heading3" />
										<Label for="heading4">Padding Large</Label>
										<img src="/images/eye.png" height="15px" />
										<Input type="text" name="text" id="heading4" />
										<Label for="heading5">Padding Medium</Label>
										<img src="/images/eye.png" height="15px" />
										<Input type="text" name="text" id="heading5" />
										<Label for="heading6">Padding Small</Label>
										<img src="/images/eye.png" height="15px" />
										<Input type="text" name="text" id="heading6" />
										<Label for="borderLarge">Border Large</Label>
										<img src="/images/eye.png" height="15px" />
										<Input type="text" name="text" id="borderLarge" />
										<Label for="borderMedium"> Border Medium</Label>
										<img src="/images/eye.png" height="15px" />
										<Input type="text" name="text" id="borderMedium" />
										<Label for="borderSmall">Border Small</Label>
										<img src="/images/eye.png" height="15px" />
										<Input type="text" name="text" id="borderSmall" />
									</FormGroup>
								)}
								<h6 className="m-b-xxs" onClick={this.viewSpacing}>
                                    {this.state.viewSpacing ? 'Close' : 'View all'}
								</h6>
							</CardBody>
						</Card>
						<Card>
							<CardBody>
								<h3 className="m-b">
									<span>Typography</span>

									<Button color="primary" onClick={this.toggle}>
										Typography Examples
									</Button>
									<Modal isOpen={this.state.modal} toggle={this.toggle}>
										<ModalHeader toggle={this.toggle}>Typography Examples</ModalHeader>
										<ModalBody>
											<h1>h1. Heading 1</h1>
											<h2>h2. Heading 2</h2>
											<h3>h3. Heading 3</h3>
											<h4>h4. Heading 4</h4>
											<h5>h5. Heading 5</h5>
											<h6>h6. Heading 6</h6>
											<p>
												Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.
												Nulla tellus elit, varius non commodo eget, mattis vel eros. In sed
												ornare nulla.
											</p>
											<small>
												Quote. Someone famous <cite title="Source Title">Source Title</cite>
											</small>
										</ModalBody>
										<ModalFooter>
											<Button color="secondary" onClick={this.toggle}>
												Close
											</Button>
										</ModalFooter>
									</Modal>
								</h3>

								{this.state.viewTypography && (
									<FormGroup>
										<h3 className="m-b sub-header">
											<span>Heading 1</span> <img src="/images/eye.png" height="15px" />
										</h3>
										<Label for="heading1-font-family">Font Family</Label>
										<Input type="text" name="text" id="heading1-font-family" />
										<Label for="heading1-font-size">Font Size</Label>
										<Input type="text" name="text" id="heading1-font-size" />
										<Label for="heading1-font-color">Color</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewHeading1Picker')}
										/>
										{this.state.viewHeading1Picker && <SketchPicker />}
										<Input type="text" name="text" id="heading1-font-color" />
										<Label for="heading1-line-height">Line Height</Label>
										<Input type="text" name="text" id="heading1-line-height" />
										<Label for="heading1-letter-spacing">Letter Spacing</Label>
										<Input type="text" name="text" id="heading1-letter-spacing" />

										<h3 className="m-b sub-header">
											<span>Heading 2</span> <img src="/images/eye.png" height="15px" />
										</h3>
										<Label for="heading2-font-family">Font Family</Label>
										<Input type="text" name="text" id="heading2-font-family" />
										<Label for="heading2-font-size">Font Size</Label>
										<Input type="text" name="text" id="heading2-font-size" />
										<Label for="heading2-font-color">Color</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewHeading2Picker')}
										/>
										{this.state.viewHeading2Picker && <SketchPicker />}
										<Input type="text" name="text" id="heading2-font-color" />
										<Label for="heading2-line-height">Line Height</Label>
										<Input type="text" name="text" id="heading2-line-height" />
										<Label for="heading2-letter-spacing">Letter Spacing</Label>
										<Input type="text" name="text" id="heading2-letter-spacing" />

										<h3 className="m-b sub-header">
											<span>Heading 3</span> <img src="/images/eye.png" height="15px" />
										</h3>
										<Label for="heading3-font-family">Font Family</Label>
										<Input type="text" name="text" id="heading3-font-family" />
										<Label for="heading3-font-size">Font Size</Label>
										<Input type="text" name="text" id="heading3-font-size" />
										<Label for="heading3-font-color">Color</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewHeading3Picker')}
										/>
										{this.state.viewHeading3Picker && <SketchPicker />}
										<Input type="text" name="text" id="heading3-font-color" />
										<Label for="heading3-line-height">Line Height</Label>
										<Input type="text" name="text" id="heading3-line-height" />
										<Label for="heading3-letter-spacing">Letter Spacing</Label>
										<Input type="text" name="text" id="heading3-letter-spacing" />

										<h3 className="m-b sub-header">
											<span>Heading 4</span> <img src="/images/eye.png" height="15px" />
										</h3>
										<Label for="heading4-font-family">Font Family</Label>
										<Input type="text" name="text" id="heading4-font-family" />
										<Label for="heading4-font-size">Font Size</Label>
										<Input type="text" name="text" id="heading4-font-size" />
										<Label for="heading4-font-color">Color</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewHeading4Picker')}
										/>
										{this.state.viewHeading4Picker && <SketchPicker />}
										<Input type="text" name="text" id="heading4-font-color" />
										<Label for="heading4-line-height">Line Height</Label>
										<Input type="text" name="text" id="heading4-line-height" />
										<Label for="heading4-letter-spacing">Letter Spacing</Label>
										<Input type="text" name="text" id="heading4-letter-spacing" />

										<h3 className="m-b sub-header">
											<span>Heading 5</span> <img src="/images/eye.png" height="15px" />
										</h3>
										<Label for="heading5-font-family">Font Family</Label>
										<Input type="text" name="text" id="heading5-font-family" />
										<Label for="heading5-font-size">Font Size</Label>
										<Input type="text" name="text" id="heading5-font-size" />
										<Label for="heading5-font-color">Color</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewHeading5Picker')}
										/>
										{this.state.viewHeading5Picker && <SketchPicker />}
										<Input type="text" name="text" id="heading5-font-color" />
										<Label for="heading5-line-height">Line Height</Label>
										<Input type="text" name="text" id="heading5-line-height" />
										<Label for="heading5-letter-spacing">Letter Spacing</Label>
										<Input type="text" name="text" id="heading5-letter-spacing" />

										<h3 className="m-b sub-header">
											<span>Heading 6</span> <img src="/images/eye.png" height="15px" />
										</h3>
										<Label for="heading6-font-family">Font Family</Label>
										<Input type="text" name="text" id="heading6-font-family" />
										<Label for="heading6-font-size">Font Size</Label>
										<Input type="text" name="text" id="heading6-font-size" />
										<Label for="heading6-font-color">Color</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewHeading6Picker')}
										/>
										{this.state.viewHeading6Picker && <SketchPicker />}
										<Input type="text" name="text" id="heading6-font-color" />
										<Label for="heading6-line-height">Line Height</Label>
										<Input type="text" name="text" id="heading6-line-height" />
										<Label for="heading6-letter-spacing">Letter Spacing</Label>
										<Input type="text" name="text" id="heading6-letter-spacing" />

										<h3 className="m-b sub-header">
											<span>Paragraph</span> <img src="/images/eye.png" height="15px" />
										</h3>
										<Label for="paragraph-font-family">Font Family</Label>
										<Input type="text" name="text" id="paragraph-font-family" />
										<Label for="paragraph-font-size">Font Size</Label>
										<Input type="text" name="text" id="paragraph-font-size" />
										<Label for="paragraph-font-color">Color</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewParagraphPicker')}
										/>
										{this.state.viewParagraphPicker && <SketchPicker />}
										<Input type="text" name="text" id="paragraph-font-color" />
										<Label for="paragraph-line-height">Line Height</Label>
										<Input type="text" name="text" id="paragraph-line-height" />
										<Label for="paragraph-letter-spacing">Letter Spacing</Label>
										<Input type="text" name="text" id="paragraph-letter-spacing" />

										<h3 className="m-b sub-header">
											<span>Quotes</span> <img src="/images/eye.png" height="15px" />
										</h3>
										<Label for="quote-font-family">Font Family</Label>
										<Input type="text" name="text" id="quote-font-family" />
										<Label for="quote-font-size">Font Size</Label>
										<Input type="text" name="text" id="quote-font-size" />
										<Label for="quote-font-color">Color</Label>
										<img
											src="/images/color-wheel.png"
											height="20px"
											onClick={() => this.showColorPicker('viewQuotePicker')}
										/>
										{this.state.viewQuotePicker && <SketchPicker />}
										<Input type="text" name="text" id="quote-font-color" />
										<Label for="quote-line-height">Line Height</Label>
										<Input type="text" name="text" id="quote-line-height" />
										<Label for="quote-letter-spacing">Letter Spacing</Label>
										<Input type="text" name="text" id="quote-letter-spacing" />
									</FormGroup>
								)}
								<h6 className="m-b-xxs" onClick={this.viewTypography}>
                                    {this.state.viewTypography ? 'Close' : 'View all'}  
								</h6>
							</CardBody>
						</Card>
					</Col>
					<Col md={4}>
						<Card>
							<CardBody>
								<div className="preview-block">{/* preview here */}</div>
								<hr />
								<Button block color="primary">
									Reset Preview
								</Button>
							</CardBody>
						</Card>

						<Card>
							<CardBody>
								<Button block color="primary">
									Save
								</Button>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
