import React, {useState} from 'react';
import './App.css';

function App() {
	const [firstName, setFirstName] = useState("");
 
	const submitHandler = (event) => {
		event.preventDefault();
		alert("Clicked by" + firstName);
	};

	function handleChange(event) {
		const {value} = event.target;
		setFirstName(value.toLowerCase());
	}

	return (
		<div className="App">
			<h3>Working with Forms in React</h3>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="k_firstName">First Name</label>
					<input 
						type="text" 
						id="k_firstName" 
						name="firstname" 
						onChange={handleChange} 
						value={firstName}		
					/>
				</div>
				
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
