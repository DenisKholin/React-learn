import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


const Header = () => {
	return <h1>HELLO MOTHER FUCKER</h1>;
}

const Input = () => {
	return <input type="text" placeholder='WHAT U WANT?' />;
}

const Button = () => {
	return <button>LETS GO</button>;
}

const App = () => {
	return (<>
		<Header />
		<Input />
		<Button />
	</>)
}

root.render(<App />);

reportWebVitals();
