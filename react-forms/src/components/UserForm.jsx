import React, { useState } from 'react';

function UserForm({ setUsers }) {

	const [user, setUser] = useState({
        name: '',
        email: '',
        age: '',
        telefono: '',
        gender: '',
        typeAccount: '',
        aceptoPublicidad: false
    });

	const handleInput = (event) => {
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		setUser({
            ...user,
            [e.target.name]: value
        });
    };

	const handleSubmit = (event) => {
        event.preventDefault();
		console.log(user);
        setUsers(prevUsers => [...prevUsers, user]);
        setUser({
            name: '',
            email: '',
            age: '',
            teléfono: '',
            gender: '',
            typeAccount: '',
            aceptoPublicidad: false
        });
    };
	return (
		<form onSubmit={handleSubmit}>
			<label>Enter your name:</label>
			<input type="text" name="name" value={user.name} onChange={handleInput} />
	
			<label>Enter your email:</label>
			<input type="text" name="email" value={user.email} onChange={handleInput} />
	
			<label>Enter your age:</label>
			<input type="text" name="age" value={user.age} onChange={handleInput} />

            <label>Enter your gender:</label>
			<label htmlFor="masculino">Masculino</label>
			<input type="radio" name="gender" value='masculino' onChange={handleInput} />
			<label htmlFor="femenino">Femenino</label>
			<input type="radio" name="gender" value='femenino' onChange={handleInput} />
			<label htmlFor="binario">Binario</label>
			<input type="radio" name="gender" value='binario' onChange={handleInput} />
			<label htmlFor="otro">Otro/Prefiero No Decirlo</label>
			<input type="radio" name="gender" value='otro' onChange={handleInput} />

			<input type="submit" />
		</form>
	);
}

export default UserForm;