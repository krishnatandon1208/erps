import React, {useState} from "react";

const allItems = [
	{id:"a", value:"apple"},
	{id:"o", value:"orange"},
	{id:"g", value:"grapes"},
	{id:"p", value:"pear"},
];

const user = [
	{firstName: ""},
	{lastName: ""},
	{email: ""},
	{contact: ""}
];

export default function App() {

	// const [items, setItems] = useState(allItems);
	// console.log(items);

	const [userData, setUserData] = useState(user);
	console.log(userData);

	const submitHandler = (event) => {
		event.preventDefault();
		setUserData(
			[{firstName: event.target.elements.ktfirstName.value},
			{lastName: event.target.elements.ktlastName.value},
			{email: event.target.elements.email.value},
			{contact: event.target.elements.contact.value}]
		)
	}

	console.log("The user details entered are: " + JSON.stringify(userData));

	return (
		<div className="App">
			<h3>Working with Forms in React</h3>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="ktfirstName">First Name</label>
					<input type="text" id="ktfirstName" name="firstname" />
				</div>
				<div>
					<label htmlFor="ktlastName">Last Name</label>
					<input type="text" id="ktlastName" name="lastname" />
				</div>
				<div>
					<label htmlFor="ktemail">Email</label>
					<input type="text" id="ktemail" name="email" />
				</div>
				<div>
					<label htmlFor="ktcontact">Contact</label>
					<input type="text" id="ktcontact" name="contact" />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
}