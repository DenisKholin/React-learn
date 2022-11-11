const PostAddForm = () => {
	return (
		<form className="bottom-panel d-flex">
			<input
				type="text"
				placeholder="О чем вы думаете сейчас?"
				className="form-control new-post-label" />
			<button
				type="submit"
				className="btn btn-outside-secondary">
				Добавить</button>
		</form>
	)
}

export default PostAddForm;