import './app-header.css'

const AppHeader = ({ liked, allPosts }) => {
	return (
		<div className="app-header d-flex">
			<h2>Denis Kholin</h2>
			<h2>{allPosts} Записей, из них понравилось {liked}</h2>
		</div>
	)
}

export default AppHeader;