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
		modal: false,
		data: {}
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
		});
	};

	viewTypography = () => {
		this.setState({
			viewTypography: !this.state.viewTypography
		});
	};

	viewPrimaryColors = () => {
		this.setState({
			viewPrimaryColors: !this.state.viewPrimaryColors
		});
	};

	handleChange = (e) => {
		const id = e.target.getAttribute('id');
		const value = e.target.value;
		const { data } = this.state;

		data[id] = value;

		this.setState({
			data: data
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.data);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<Row>
						<Col md={8}>
							<Card>
								<CardBody>
									<h3 className="m-b">Primary Colors</h3>
									{this.state.viewPrimaryColors && (
										<FormGroup>
											<Label for="primaryColor1">Color 1</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor1Picker')}
											/>
											{this.state.viewColor1Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="primaryColor1"
												value={this.state.data.primaryColor1 || ''}
												onChange={this.handleChange}
											/>
											<Label for="primaryColor2">Color 2</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor2Picker')}
											/>
											{this.state.viewColor2Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="primaryColor2"
												value={this.state.data.primaryColor2 || ''}
												onChange={this.handleChange}
											/>
											<Label for="primaryColor3">Color 3</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor3Picker')}
											/>
											{this.state.viewColor3Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="primaryColor3"
												value={this.state.data.primaryColor3 || ''}
												onChange={this.handleChange}
											/>
											<Label for="primaryColor4">Color 4</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor4Picker')}
											/>
											{this.state.viewColor4Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="primaryColor4"
												value={this.state.data.primaryColor4 || ''}
												onChange={this.handleChange}
											/>
											<Label for="primaryColor5">Color 5</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewColor5Picker')}
											/>
											{this.state.viewColor5Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="primaryColor5"
												value={this.state.data.primaryColor5 || ''}
												onChange={this.handleChange}
											/>
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
											<Input
												type="text"
												name="text"
												id="heading1"
												value={this.state.data.heading1 || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading2">Margin Medium</Label>
											<img src="/images/eye.png" height="15px" />
											<Input
												type="text"
												name="text"
												id="heading2"
												value={this.state.data.heading2 || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading3">Margin Small</Label>
											<img src="/images/eye.png" height="15px" />
											<Input
												type="text"
												name="text"
												id="heading3"
												value={this.state.data.heading3 || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading4">Padding Large</Label>
											<img src="/images/eye.png" height="15px" />
											<Input
												type="text"
												name="text"
												id="heading4"
												value={this.state.data.heading4 || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading5">Padding Medium</Label>
											<img src="/images/eye.png" height="15px" />
											<Input
												type="text"
												name="text"
												id="heading5"
												value={this.state.data.heading5 || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading6">Padding Small</Label>
											<img src="/images/eye.png" height="15px" />
											<Input
												type="text"
												name="text"
												id="heading6"
												value={this.state.data.heading6 || ''}
												onChange={this.handleChange}
											/>
											<Label for="borderLarge">Border Large</Label>
											<img src="/images/eye.png" height="15px" />
											<Input
												type="text"
												name="text"
												id="borderLarge"
												value={this.state.data.borderLarge || ''}
												onChange={this.handleChange}
											/>
											<Label for="borderMedium"> Border Medium</Label>
											<img src="/images/eye.png" height="15px" />
											<Input
												type="text"
												name="text"
												id="borderMedium"
												value={this.state.data.borderMedium || ''}
												onChange={this.handleChange}
											/>
											<Label for="borderSmall">Border Small</Label>
											<img src="/images/eye.png" height="15px" />
											<Input
												type="text"
												name="text"
												id="borderSmall"
												value={this.state.data.borderSmall || ''}
												onChange={this.handleChange}
											/>
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
											<Label for="heading1FontFamily">Font Family</Label>
											<Input
												type="text"
												name="text"
												id="heading1FontFamily"
												value={this.state.data.heading1FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading1FontSize">Font Size</Label>
											<Input
												type="text"
												name="text"
												id="heading1FontSize"
												value={this.state.data.heading1FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading1FontColor">Color</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewHeading1Picker')}
											/>
											{this.state.viewHeading1Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="heading1FontColor"
												value={this.state.data.heading1FontColor || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading1LineHeight">Line Height</Label>
											<Input
												type="text"
												name="text"
												id="heading1LineHeight"
												value={this.state.data.heading1LineHeight || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading1LetterSpacing">Letter Spacing</Label>
											<Input
												type="text"
												name="text"
												id="heading1LetterSpacing"
												value={this.state.data.heading1LetterSpacing || ''}
												onChange={this.handleChange}
											/>

											<h3 className="m-b sub-header">
												<span>Heading 2</span> <img src="/images/eye.png" height="15px" />
											</h3>
											<Label for="heading2FontFamily">Font Family</Label>
											<Input
												type="text"
												name="text"
												id="heading2FontFamily"
												value={this.state.data.heading2FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading2FontSize">Font Size</Label>
											<Input
												type="text"
												name="text"
												id="heading2FontSize"
												value={this.state.data.heading2FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading2FontColor">Color</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewHeading2Picker')}
											/>
											{this.state.viewHeading2Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="heading2FontColor"
												value={this.state.data.heading2FontColor || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading2LineHeight">Line Height</Label>
											<Input
												type="text"
												name="text"
												id="heading2LineHeight"
												value={this.state.data.heading2LineHeight || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading2LetterSpacing">Letter Spacing</Label>
											<Input
												type="text"
												name="text"
												id="heading2LetterSpacing"
												value={this.state.data.heading2LetterSpacing || ''}
												onChange={this.handleChange}
											/>

											<h3 className="m-b sub-header">
												<span>Heading 3</span> <img src="/images/eye.png" height="15px" />
											</h3>
											<Label for="heading3FontFamily">Font Family</Label>
											<Input
												type="text"
												name="text"
												id="heading3FontFamily"
												value={this.state.data.heading3FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading3FontSize">Font Size</Label>
											<Input
												type="text"
												name="text"
												id="heading3FontSize"
												value={this.state.data.heading3FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading3FontColor">Color</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewHeading3Picker')}
											/>
											{this.state.viewHeading3Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="heading3FontColor"
												value={this.state.data.heading3FontColor || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading3LineHeight">Line Height</Label>
											<Input
												type="text"
												name="text"
												id="heading3LineHeight"
												value={this.state.data.heading3LineHeight || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading3LetterSpacing">Letter Spacing</Label>
											<Input
												type="text"
												name="text"
												id="heading3LetterSpacing"
												value={this.state.data.heading3LetterSpacing || ''}
												onChange={this.handleChange}
											/>

											<h3 className="m-b sub-header">
												<span>Heading 4</span> <img src="/images/eye.png" height="15px" />
											</h3>
											<Label for="heading4FontFamily">Font Family</Label>
											<Input
												type="text"
												name="text"
												id="heading4FontFamily"
												value={this.state.data.heading4FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading4FontSize">Font Size</Label>
											<Input
												type="text"
												name="text"
												id="heading4FontSize"
												value={this.state.data.heading4FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading4FontColor">Color</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewHeading4Picker')}
											/>
											{this.state.viewHeading4Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="heading4FontColor"
												value={this.state.data.heading4FontColor || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading4LineHeight">Line Height</Label>
											<Input
												type="text"
												name="text"
												id="heading4LineHeight"
												value={this.state.data.heading4LineHeight || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading4LetterSpacing">Letter Spacing</Label>
											<Input
												type="text"
												name="text"
												id="heading4LetterSpacing"
												value={this.state.data.heading4LetterSpacing || ''}
												onChange={this.handleChange}
											/>

											<h3 className="m-b sub-header">
												<span>Heading 5</span> <img src="/images/eye.png" height="15px" />
											</h3>
											<Label for="heading5FontFamily">Font Family</Label>
											<Input
												type="text"
												name="text"
												id="heading5FontFamily"
												value={this.state.data.heading5FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading5FontSize">Font Size</Label>
											<Input
												type="text"
												name="text"
												id="heading5FontSize"
												value={this.state.data.heading5FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading5FontColor">Color</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewHeading5Picker')}
											/>
											{this.state.viewHeading5Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="heading5FontColor"
												value={this.state.data.heading5FontColor || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading5LineHeight">Line Height</Label>
											<Input
												type="text"
												name="text"
												id="heading5LineHeight"
												value={this.state.data.heading5LineHeight || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading5LetterSpacing">Letter Spacing</Label>
											<Input
												type="text"
												name="text"
												id="heading5LetterSpacing"
												value={this.state.data.heading5LetterSpacing || ''}
												onChange={this.handleChange}
											/>

											<h3 className="m-b sub-header">
												<span>Heading 6</span> <img src="/images/eye.png" height="15px" />
											</h3>
											<Label for="heading6FontFamily">Font Family</Label>
											<Input
												type="text"
												name="text"
												id="heading6FontFamily"
												value={this.state.data.heading6FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading6FontSize">Font Size</Label>
											<Input
												type="text"
												name="text"
												id="heading6FontSize"
												value={this.state.data.heading6FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading6FontColor">Color</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewHeading6Picker')}
											/>
											{this.state.viewHeading6Picker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="heading6FontColor"
												value={this.state.data.heading6FontColor || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading6LineHeight">Line Height</Label>
											<Input
												type="text"
												name="text"
												id="heading6LineHeight"
												value={this.state.data.heading6LineHeight || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading6LetterSpacing">Letter Spacing</Label>
											<Input
												type="text"
												name="text"
												id="heading6LetterSpacing"
												value={this.state.data.heading6LetterSpacing || ''}
												onChange={this.handleChange}
											/>

											<h3 className="m-b sub-header">
												<span>Paragraph</span> <img src="/images/eye.png" height="15px" />
											</h3>
											<Label for="paragraphFontFamily">Font Family</Label>
											<Input
												type="text"
												name="text"
												id="paragraphFontFamily"
												value={this.state.data.paragraphFontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="paragraphFontSize">Font Size</Label>
											<Input
												type="text"
												name="text"
												id="paragraphFontSize"
												value={this.state.data.paragraphFontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="paragraphFontColor">Color</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewParagraphPicker')}
											/>
											{this.state.viewParagraphPicker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="paragraphFontColor"
												value={this.state.data.paragraphFontColor || ''}
												onChange={this.handleChange}
											/>
											<Label for="paragraphLineHeight">Line Height</Label>
											<Input
												type="text"
												name="text"
												id="paragraphLineHeight"
												value={this.state.data.paragraphLineHeight || ''}
												onChange={this.handleChange}
											/>
											<Label for="paragraphLetterSpacing">Letter Spacing</Label>
											<Input
												type="text"
												name="text"
												id="paragraphLetterSpacing"
												value={this.state.data.paragraphLetterSpacing || ''}
												onChange={this.handleChange}
											/>

											<h3 className="m-b sub-header">
												<span>Quotes</span> <img src="/images/eye.png" height="15px" />
											</h3>
											<Label for="quoteFontFamily">Font Family</Label>
											<Input
												type="text"
												name="text"
												id="quoteFontFamily"
												value={this.state.data.quoteFontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="quoteFontSize">Font Size</Label>
											<Input
												type="text"
												name="text"
												id="quoteFontSize"
												value={this.state.data.quoteFontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="quoteFontColor">Color</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewQuotePicker')}
											/>
											{this.state.viewQuotePicker && <SketchPicker />}
											<Input
												type="text"
												name="text"
												id="quoteFontColor"
												value={this.state.data.quoteFontColor || ''}
												onChange={this.handleChange}
											/>
											<Label for="quoteFontLineHeight">Line Height</Label>
											<Input
												type="text"
												name="text"
												id="quoteFontLineHeight"
												value={this.state.data.quoteFontLineHeight || ''}
												onChange={this.handleChange}
											/>
											<Label for="quoteFontLetterSpacing">Letter Spacing</Label>
											<Input
												type="text"
												name="text"
												id="quoteFontLetterSpacing"
												value={this.state.data.quoteFontLetterSpacing || ''}
												onChange={this.handleChange}
											/>
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
									<Button block color="primary" type="submit">
										Save
									</Button>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</form>
			</div>
		);
	}
}
