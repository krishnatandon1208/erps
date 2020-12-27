import React, {useState} from 'react';
import './App.css';

function App() {

	const userdata = {
		firstName: "",
		lastName: "",
		email: "",
		contact: ""
	};

	const [userdataDetails, setUserDataDetails] = useState({userdata});

	const submitHandler = (event) => {
		event.preventDefault();
		// console.log(event.target.elements.k_firstName.value);
		// console.log(event.target.elements.k_lastName.value);
		// console.log(event.target.elements.k_email.value);
		// console.log(event.target.elements.k_contact.value);
		//printUserName(event.target[0].value);
		// setUserDataDetails({
		// 	firstName : event.target.elements.firstname.value,
		// 	lastName: event.target.elements.lastname.value,
		// 	email: event.target.elements.email.value,
		// 	contact: event.target.elements.contact.value
		// });
		userdata.firstName = event.target.elements.k_firstName.value;
		userdata.lastName = event.target.elements.k_lastName.value;
		userdata.email = event.target.elements.k_email.value;
		userdata.contact = event.target.elements.k_contact.value;

		// console.log(userdata.firstName + " = userdata.firstName");
		// console.log(userdata.lastName + " = userdata.lastName");
		// console.log(userdata.email + " = userdata.email");
		// console.log(userdata.contact + " = userdata.contact");
		console.log(userdata.firstName + " = userdata");
		console.log(userdataDetails.firstName + " = userdataDetails")
	};

	return (
		<div className="App">
			<h3>Working with Forms in React</h3>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="k_firstName">First Name</label>
					<input type="text" id="k_firstName" name="firstname" />
				</div>
				<div>
					<label htmlFor="k_lastName">Last Name</label>
					<input type="text" id="k_lastName" name="lastname" />
				</div>
				<div>
					<label htmlFor="k_email">Email</label>
					<input type="text" id="k_email" name="email" />
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
