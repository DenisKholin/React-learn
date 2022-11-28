import AppHeader from "../app-header/app-header";
import SeacrhPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css'

const App = () => {

	const data = [
		{ label: 'My', important: true, id: 'qweq' },
		{ label: 'name', important: false, id: 'dsf' },
		{ label: 'who', important: false, id: 'hgt' },
	];

	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SeacrhPanel />
				<PostStatusFilter />
			</div>
			<PostList posts={data} />
			<PostAddForm />
		</div>

	)
}

export default App;