import { React, useState } from "react";

function UserForm() {

	const [user, setUser] = useState({});

	const handleInput = (event) => {
		const inputName = event.target.name;
		setUser(prev => {
			return {
			...prev,
			[inputName]: event.target.value
			}
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(user);
		// user: { 
		//        	 name="...",
		//	         email="...",
		//	         age="..."
		//        }
	}
  
	return (
		<form onSubmit={handleSubmit}>
			<label>Enter your name:</label>
			<input type="text" name="name" value={name} onChange={handleInput} />
	
			<label>Enter your email:</label>
			<input type="text" name="email" value={email} onChange={handleInput} />
	
			<label>Enter your age:</label>
			<input type="text" name="age" value={age} onChange={handleInput} />

            <label>Enter your gender:</label>
			<input type="radio" name="gender" value={gender} onChange={handleInput} />
	
			<input type="submit" />
		</form>
	);
}

export default UserForm;