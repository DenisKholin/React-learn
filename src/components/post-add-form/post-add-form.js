import { Component } from 'react'
import './post-add-form.css'

export default class PostAddForm extends Component {

	state = {
		text: ''
	}

	onValueChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	onSubmit = (e) => {
		const { text } = this.state;
		e.preventDefault(e);
		if (text !== '') {
			this.props.onAdd(text)
		}

		this.setState({
			text: ''
		})
	}

	render() {

		return (
			<form
				className="bottom-panel d-flex"
				onSubmit={this.onSubmit}>
				<input
					type="text"
					placeholder="О чем вы думаете сейчас?"
					className="form-control new-post-label"
					onChange={this.onValueChange}
					value={this.state.text} />
				<button
					type="submit"
					className="btn btn-outline-secondary">
					Добавить</button>
			</form>
		)
	}

}

