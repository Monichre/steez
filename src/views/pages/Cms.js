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
		viewTextColor1Picker: false,
		viewTextColor2Picker: false,
		viewTextColor3Picker: false,
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
			viewTextColor1Picker: false,
			viewTextColor2Picker: false,
			viewTextColor3Picker: false,
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

	handlePrimaryColor1Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor1 = formattedRGBA;

		this.setState({
			data: data,
			viewColor1Picker: false
		});
	};

	handlePrimaryColor2Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor2 = formattedRGBA;

		this.setState({
			data: data,
			viewColor2Picker: false
		});
	};

	handlePrimaryColor3Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor3 = formattedRGBA;

		this.setState({
			data: data,
			viewColor3Picker: false
		});
	};

	handlePrimaryColor4Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor4 = formattedRGBA;

		this.setState({
			data: data,
			viewColor4Picker: false
		});
	};

	handlePrimaryColor5Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.primaryColor5 = formattedRGBA;

		this.setState({
			data: data,
			viewColor5Picker: false
		});
	};

	handleTextColor1Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.textColor1 = formattedRGBA;

		this.setState({
			data: data,
			viewTextColor1Picker: false
		});
	};

	handleTextColor2Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.textColor2 = formattedRGBA;

		this.setState({
			data: data,
			viewTextColor2Picker: false
		});
	};

	handleTextColor3Change = (color) => {
		const formattedRGBA = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
		const { data } = this.state;

		data.textColor3 = formattedRGBA;

		this.setState({
			data: data,
			viewTextColor3Picker: false
		});
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
											{this.state.viewColor1Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor1Change} />
											)}
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
											{this.state.viewColor2Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor2Change} />
											)}
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
											{this.state.viewColor3Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor3Change} />
											)}
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
											{this.state.viewColor4Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor4Change} />
											)}
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
											{this.state.viewColor5Picker && (
												<SketchPicker onChangeComplete={this.handlePrimaryColor5Change} />
											)}
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
											View Examples
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
											<Label for="heading1FontFamily">Font Family 1</Label>
											<Input
												type="text"
												name="text"
												id="heading1FontFamily"
												value={this.state.data.heading1FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading2FontFamily">Font Family 2</Label>
											<Input
												type="text"
												name="text"
												id="heading2FontFamily"
												value={this.state.data.heading2FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading3FontFamily">Font Family 3</Label>
											<Input
												type="text"
												name="text"
												id="heading3FontFamily"
												value={this.state.data.heading3FontFamily || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading1FontSize">Font Size Large</Label>
											<Input
												type="text"
												name="text"
												id="heading1FontSize"
												value={this.state.data.heading1FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading2FontSize">Font Size Medium</Label>
											<Input
												type="text"
												name="text"
												id="heading2FontSize"
												value={this.state.data.heading2FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="heading3FontSize">Font Size Small</Label>
											<Input
												type="text"
												name="text"
												id="heading3FontSize"
												value={this.state.data.heading3FontSize || ''}
												onChange={this.handleChange}
											/>
											<Label for="textColor1">Color 1</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewTextColor1Picker')}
											/>
											{this.state.viewTextColor1Picker && (
												<SketchPicker onChangeComplete={this.handleTextColor1Change} />
											)}
											<Input
												type="text"
												name="text"
												id="textColor1"
												value={this.state.data.textColor1 || ''}
												onChange={this.handleChange}
											/>
											<Label for="textColor2">Color 2</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewTextColor2Picker')}
											/>
											{this.state.viewTextColor2Picker && (
												<SketchPicker onChangeComplete={this.handleTextColor2Change} />
											)}
											<Input
												type="text"
												name="text"
												id="textColor2"
												value={this.state.data.textColor2 || ''}
												onChange={this.handleChange}
											/>
											<Label for="textColor3">Color 3</Label>
											<img
												src="/images/color-wheel.png"
												height="20px"
												onClick={() => this.showColorPicker('viewTextColor3Picker')}
											/>
											{this.state.viewTextColor3Picker && (
												<SketchPicker onChangeComplete={this.handleTextColor3Change} />
											)}
											<Input
												type="text"
												name="text"
												id="textColor3"
												value={this.state.data.textColor3 || ''}
												onChange={this.handleChange}
											/>
											<Label for="lineHeightLarge">Line Height Large</Label>
											<Input
												type="text"
												name="text"
												id="lineHeightLarge"
												value={this.state.data.lineHeightLarge || ''}
												onChange={this.handleChange}
											/>
											<Label for="lineHeightMedium">Line Height Medium</Label>
											<Input
												type="text"
												name="text"
												id="lineHeightMedium"
												value={this.state.data.lineHeightMedium || ''}
												onChange={this.handleChange}
											/>
											<Label for="lineHeightSmall">Line Height Small</Label>
											<Input
												type="text"
												name="text"
												id="lineHeightSmall"
												value={this.state.data.lineHeightSmall || ''}
												onChange={this.handleChange}
											/>
											<Label for="letterSpacingLarge">Letter Spacing Large</Label>
											<Input
												type="text"
												name="text"
												id="letterSpacingLarge"
												value={this.state.data.letterSpacingLarge || ''}
												onChange={this.handleChange}
											/>
											<Label for="letterSpacingMedium">Letter Spacing Medium</Label>
											<Input
												type="text"
												name="text"
												id="letterSpacingMedium"
												value={this.state.data.letterSpacingMedium || ''}
												onChange={this.handleChange}
											/>
											<Label for="letterSpacingSmall">Letter Spacing Small</Label>
											<Input
												type="text"
												name="text"
												id="letterSpacingSmall"
												value={this.state.data.letterSpacingSmall || ''}
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
