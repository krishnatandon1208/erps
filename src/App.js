import React, {useState} from 'react';
import './App.css';

function App() {
	const [error, setError] = useState(null);
 
	const submitHandler = (event) => {
		event.preventDefault();
	};

	function handleChange(event) {
		event.target.value === ((event.target.value).toLowerCase()) 
			? setError(null) 
			: setError("Name must be in lowercase");
	}

	return (
		<div className="App">
			<h3>Working with Forms in React</h3>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="k_firstName">First Name</label>
					<input type="text" id="k_firstName" name="firstname" onChange={handleChange} />
					<div id="error-message">{error}</div>
				</div>
				<div>
					<label htmlFor="k_lastName">Last Name</label>
					<input type="text" id="k_lastName" name="lastname" />
				</div>
				<div>
					<label htmlFor="k_email">Email</label>
					<input type="email" id="k_email" name="email" />
				</div>
				<div>
					<label htmlFor="k_contact">Contact</label>
					<input type="number" id="k_contact" name="contact" />
				</div>
				<button disabled={Boolean(error)}>Submit</button>
			</form>
		</div>
	);
}

export default App;
