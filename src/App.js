import React, {useRef} from 'react';
import './App.css';

function App() {

	const firstNameRef = useRef();	

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(firstNameRef.current.value);
	};

	return (
		<div className="App">
			<h3>Working with Forms in React</h3>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="k_firstName">First Name</label>
					<input ref={firstNameRef} type="text" id="k_firstName" name="firstname" />
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
					<input type="text" id="k_contact" name="contact" />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
