import { Component } from 'react';
import './search-panel.css'

export default class SeacrhPanel extends Component {

	onUpdateSearch = e => {
		const term = e.target.value;
		this.props.onUpdateSearch(term);
	}

	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Поиск по записям"
				onChange={this.onUpdateSearch} />
		)
	}
}