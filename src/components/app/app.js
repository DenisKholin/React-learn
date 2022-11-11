import AppHeader from "../app-header/app-header";
import SeacrhPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<SeacrhPanel />
				<PostStatusFilter />
			</div>
			<PostList />
			<PostAddForm />
		</div>

	)
}

export default App;