import { Component } from 'react';
import AppHeader from "../app-header/app-header";
import SeacrhPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css'

export default class App extends Component {
	state = {
		data: [
			{ label: 'My', important: true, id: 'qweq' },
			{ label: 'name', important: false, id: 'dsf' },
			{ label: 'who', important: false, id: 'hgt' },
		]
	}

	deleteItem = id => {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);

			const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
			// console.log(newArray)
			return (
				data: newArray
			)
		});
	}

	render() {
		return (
			<div className="app" >
				<AppHeader />
				<div className="search-panel d-flex">
					<SeacrhPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deleteItem} />
				<PostAddForm />
			</div>

		)
	}

}

